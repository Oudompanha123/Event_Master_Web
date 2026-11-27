// Same shape as the API pipeline (Event_Master_API/Jenkinsfile): the Jenkins
// controller is itself a container with the Docker socket mounted, so every
// tool runs in a throwaway container instead of being installed on Jenkins.
//
// The flags are all load-bearing:
//   -v $JENKINS_VOLUME   the workspace lives inside the jenkins_home volume, so
//                        mounting it makes $WORKSPACE name the same files on
//                        both sides of the socket.
//   --user 1000:1000     everything npm writes stays owned by the jenkins user,
//                        or the next checkout/cleanup fails on root files.
//   --group-add 0        grants access to the mounted Docker socket.
//   --network cicd       same network as SonarQube, so http://sonarqube:9000
//                        resolves during the scan.

/** Runs one shell command in a Node container with the workspace mounted. */
def npmRun(String command) {
    withEnv(["NODE_CMD=${command}"]) {
        sh '''
            docker run --rm \
              --user 1000:1000 \
              --group-add 0 \
              -v "$JENKINS_VOLUME":/var/jenkins_home \
              -e HOME=/var/jenkins_home \
              -e npm_config_cache=/var/jenkins_home/.npm \
              -w "$WORKSPACE" \
              "$NODE_IMAGE" \
              sh -c "$NODE_CMD"
        '''
    }
}

/**
 * True when this build is of the production branch.
 *
 * GitFlow puts releasable code on main and day-to-day integration on develop,
 * so only main is allowed to build an image and deploy it. BRANCH_NAME is set
 * only by multibranch jobs; a plain pipeline job gets GIT_BRANCH from the git
 * plugin in the form 'origin/main', so both are accepted.
 */
def isProductionBranch() {
    String branch = env.BRANCH_NAME ?: env.GIT_BRANCH ?: ''
    return branch == 'main' || branch.endsWith('/main')
}

/** main and develop are analysed; short-lived branches only install and build. */
def isAnalysedBranch() {
    String branch = env.BRANCH_NAME ?: env.GIT_BRANCH ?: ''
    return isProductionBranch() || branch == 'develop' || branch.endsWith('/develop')
}

pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 40, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
        // Two builds deploying the same stack would fight each other.
        disableConcurrentBuilds()
    }

    // Jenkins asks GitHub for new commits every ~5 minutes and builds only
    // when the revision changed (no webhook needed on a local setup).
    triggers {
        pollSCM('H/5 * * * *')
    }

    environment {
        IMAGE_NAME          = 'event-master-web'
        HOST_PORT           = '3000'
        // 'docker stack deploy' names the service <stack>_<service in stack.yml>.
        STACK_NAME          = 'event-master-web'
        SERVICE_NAME        = 'event-master-web_web'

        NODE_IMAGE          = 'node:20-alpine'
        SONAR_SCANNER_IMAGE = 'sonarsource/sonar-scanner-cli:latest'
        // Docker volume and network created by the CI stack's compose project ('cicd').
        JENKINS_VOLUME      = 'cicd_jenkins_home'
        CICD_NETWORK        = 'cicd'
        // Name of the SonarQube server configured under Manage Jenkins > System.
        SONARQUBE_ENV       = 'SonarQube'

        // Where the deployed API answers. host.docker.internal is how containers
        // reach the Docker host here (same convention as the API pipeline).
        // The trailing slash is required.
        API_URL             = 'http://host.docker.internal:8899/'
        NEXTAUTH_URL        = 'http://localhost:3000'
    }

    stages {
        // No Checkout stage: Jenkins already cloned the repo to read this file.

        stage('Install') {
            steps {
                // Fails fast when package.json and package-lock.json disagree.
                // --ignore-scripts: nothing in the dependency tree runs code on CI.
                npmRun 'npm ci --ignore-scripts --no-audit --no-fund'
            }
        }

        stage('SonarQube Analysis') {
            when { expression { isAnalysedBranch() } }
            steps {
                withSonarQubeEnv(env.SONARQUBE_ENV) {
                    // withSonarQubeEnv exports the token as SONAR_AUTH_TOKEN; the
                    // scanner image reads SONAR_TOKEN, so forward it under that name.
                    sh '''
                        export SONAR_TOKEN="${SONAR_TOKEN:-$SONAR_AUTH_TOKEN}"

                        docker run --rm \
                          --user 1000:1000 \
                          --group-add 0 \
                          --network "$CICD_NETWORK" \
                          -v "$JENKINS_VOLUME":/var/jenkins_home \
                          -e SONAR_HOST_URL -e SONAR_TOKEN \
                          -e SONAR_USER_HOME=/var/jenkins_home/.sonar \
                          -w "$WORKSPACE" \
                          "$SONAR_SCANNER_IMAGE" \
                          -Dsonar.projectVersion="$BUILD_NUMBER"
                    '''
                }
            }
        }

        stage('Quality Gate') {
            when { expression { isAnalysedBranch() } }
            steps {
                // waitForQualityGate needs SonarQube to call a webhook back into
                // Jenkins, which this setup deliberately does not configure, so the
                // gate is polled instead (same approach as the API pipeline).
                withSonarQubeEnv(env.SONARQUBE_ENV) {
                    timeout(time: 5, unit: 'MINUTES') {
                        sh '''
                            set -e
                            TOKEN="${SONAR_TOKEN:-$SONAR_AUTH_TOKEN}"

                            REPORT_TASK=.scannerwork/report-task.txt
                            if [ ! -f "$REPORT_TASK" ]; then
                                echo "No report-task.txt found - did the analysis stage upload a report?"
                                exit 1
                            fi
                            CE_TASK_URL=$(grep '^ceTaskUrl=' "$REPORT_TASK" | cut -d= -f2-)

                            STATUS=PENDING
                            while [ "$STATUS" = PENDING ] || [ "$STATUS" = IN_PROGRESS ]; do
                                sleep 5
                                RESP=$(curl -s -u "$TOKEN:" "$CE_TASK_URL")
                                STATUS=$(echo "$RESP" | jq -r .task.status)
                                echo "SonarQube analysis task status: $STATUS"
                            done

                            if [ "$STATUS" != SUCCESS ]; then
                                echo "$RESP"
                                exit 1
                            fi

                            ANALYSIS_ID=$(echo "$RESP" | jq -r .task.analysisId)
                            QG=$(curl -s -u "$TOKEN:" \
                                "$SONAR_HOST_URL/api/qualitygates/project_status?analysisId=$ANALYSIS_ID")
                            QG_STATUS=$(echo "$QG" | jq -r .projectStatus.status)
                            echo "Quality Gate status: $QG_STATUS"

                            if [ "$QG_STATUS" != OK ]; then
                                echo "$QG" | jq .
                                exit 1
                            fi
                        '''
                    }
                }
            }
        }

        stage('Docker Build') {
            when { expression { isProductionBranch() } }
            steps {
                withCredentials([
                    string(credentialsId: 'nextauth-secret', variable: 'NEXTAUTH_SECRET'),
                    string(credentialsId: 'knock-secret-api-key', variable: 'KNOCK_SECRET_API_KEY')
                ]) {
                    // 'next build' prerenders pages that call the API, so the build
                    // container must be able to reach API_URL: deploy the API first.
                    // --add-host makes host.docker.internal resolve on Linux hosts too.
                    sh '''
                        docker build \
                          --add-host host.docker.internal:host-gateway \
                          --build-arg API_URL="$API_URL" \
                          --build-arg NEXTAUTH_URL="$NEXTAUTH_URL" \
                          --build-arg NEXTAUTH_SECRET="$NEXTAUTH_SECRET" \
                          --build-arg KNOCK_SECRET_API_KEY="$KNOCK_SECRET_API_KEY" \
                          -t "$IMAGE_NAME:$BUILD_NUMBER" \
                          -t "$IMAGE_NAME:latest" \
                          .
                    '''
                }
            }
        }

        stage('Deploy') {
            when { expression { isProductionBranch() } }
            steps {
                withCredentials([
                    string(credentialsId: 'nextauth-secret', variable: 'NEXTAUTH_SECRET'),
                    string(credentialsId: 'knock-secret-api-key', variable: 'KNOCK_SECRET_API_KEY')
                ]) {
                    // stack.yml reads every value through ${...}, which
                    // 'docker stack deploy' substitutes from this shell, so the
                    // credentials reach the service without being written to disk.
                    sh '''
                        IMAGE_TAG="$BUILD_NUMBER" docker stack deploy \
                          --compose-file stack.yml \
                          --prune \
                          "$STACK_NAME"
                    '''
                }
            }
        }

        stage('Health Check') {
            when { expression { isProductionBranch() } }
            steps {
                // Waits for 1/1 replicas (start-first keeps the old task around for a
                // few seconds), then asks the running app over its published port.
                // Any 2xx/3xx counts: the landing page may redirect to /login.
                sh '''
                    i=0
                    while [ $i -lt 40 ]; do
                        i=$((i + 1))
                        sleep 3

                        REPLICAS=$(docker service ls --filter name="$SERVICE_NAME" --format '{{.Replicas}}')
                        [ "$REPLICAS" = "1/1" ] || continue

                        CODE=$(curl -s -o /dev/null -w '%{http_code}' --max-time 10 \
                            "http://host.docker.internal:$HOST_PORT/" || true)
                        case "$CODE" in
                            2*|3*)
                                echo "Web is up on http://localhost:$HOST_PORT (replicas $REPLICAS, HTTP $CODE)"
                                exit 0
                                ;;
                        esac
                    done

                    echo "Service did not become healthy. Task state:"
                    docker service ps "$SERVICE_NAME" --no-trunc 2>&1 || true
                    echo "Last log lines:"
                    docker service logs --tail 40 "$SERVICE_NAME" 2>&1 || true
                    exit 1
                '''
            }
        }
    }

    post {
        always {
            sh 'docker image prune -f'
        }
    }
}
