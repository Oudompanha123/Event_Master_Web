<p align="center">
  <img
    src="./public/images/event-master copy.png"
    width="400"
    alt="EventMaster Logo"
  />
</p>

<h1 align="center">EventMaster</h1>

## Introduction

EventMaster, developed by the Korea Software HRD Center, is a web application designed to streamline the management of events and improve the experience for both the event organizers and the attendees. For event organizers, EventMaster offers them with many useful features, such as dynamic registration form creation, attendee management, agenda management, and material management. With these essential tools, event organizers can efficiently manage their events. On the other hand, the attendees will find it easier to browse for any kind of event that interests them and join by filling out the registration form attached to each event. In brief, EventMaster is the finest choice for fulfilling the event management system, with many wonderful features provided.

<img src="https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/landing.jpg?alt=media&token=16c12168-8f97-44cd-b3a1-2452b7e2caae" alt="landing_page">
<img src="https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/material.jpg?alt=media&token=7c4140eb-1b70-477f-96fe-c1b12a9790ae" alt="material_page">

## Features

- View and join events
- Create Event
- Manage Event
- Manage Material
- Dynamic Form
- Notification
- Verify OTP

## Project structure

`src/` follows [Feature-Sliced Design](https://feature-sliced.design). A layer may only import from the layers below it:

```text
app → views → widgets → features → entities → shared
```

| Layer | What goes there | Examples |
| --- | --- | --- |
| `app/` | Next.js routing only: layouts, route handlers, providers. Each `page.tsx` is one line that re-exports its view. | `app/(dashboard)/members/page.tsx`, `app/_providers` |
| `views/` | One slice per page. It composes widgets and features. Named `views` because Next.js reserves `src/pages` for the Pages Router. | `views/members`, `views/event-detail` |
| `widgets/` | Large self-contained blocks of a page. | `widgets/dashboard-shell`, `widgets/material-board`, `widgets/asset-table` |
| `features/` | User actions, grouped by domain: `features/<domain>/<action>`. | `features/auth/login`, `features/event/create`, `features/asset/manage` |
| `entities/` | Business entities: their API calls and server actions, plus display-only UI. | `entities/event`, `entities/member`, `entities/material` |
| `shared/` | Code with no business meaning. | `shared/ui` (DataTable, icons), `shared/api/headerToken`, `shared/config/auth` |

Inside a slice, code is split into segments: `ui/` (components), `model/` (types, helpers) and `api/` (server actions and fetch services).

Rules to keep the structure working:

1. **Import another slice through its public API**: `import { CreateEventButton } from "@/features/event/create"`, not `…/create/ui/CreateEventButton`. Inside a slice, use direct paths.
2. **Import `api/` files by path**: for example `@/entities/event/api/eventService`. They are never re-exported from a slice's `index.ts`, because some of them are server-only (`getServerSession`, `next/headers`) and would break the build if a client component pulled them in through an index.
3. **In server components** (files without `"use client"`), import client components from their own file, for example `@/features/auth/login/ui/LoginComponent`. If a server component imports a slice's `index.ts`, Next.js ships every client component that index re-exports to that page.
4. **Entities may use each other's `api/`** where a server action needs it (duplicating an event also copies its agenda and materials). Keep UI cross-imports between slices of the same layer out.

## Local CI

`git push` runs the local CI first and stops the push if a check fails. `yarn install` turns this on, through the `prepare` script, which points git at `.githooks/`.

| Check | Why |
| --- | --- |
| Lockfile in sync | Jenkins and the Dockerfile run `npm ci`, which fails if `package-lock.json` does not match `package.json`. After `yarn add`, also run `npm install --package-lock-only --ignore-scripts`. |
| Type check | `tsc --noEmit` |
| FSD rules | `scripts/check-fsd.mjs` enforces the rules in [Project structure](#project-structure). |
| Security audit | Fails on high or critical advisories in production dependencies. |
| Production build | The same `next build` the Docker image runs. Stop `yarn dev` first, because both write to `.next`. |

Run it by hand:

```bash
yarn ci          # everything above (about a minute)
yarn ci:quick    # skip the production build
yarn ci:docker   # also build the Docker image, like the pipeline's Docker Build stage
CI_QUICK=1 git push   # push with the quick checks only
```

## CI/CD

The pipeline mirrors the API's (`Event_Master_API/Jenkinsfile`) and runs on the same Jenkins and
SonarQube containers (`cicd` compose stack). A **multibranch pipeline** job pointed at this
repository picks up the `Jenkinsfile`; Jenkins polls GitHub every ~5 minutes.

| Stage                | What it does                                                          |
|----------------------|-----------------------------------------------------------------------|
| `Install`            | `npm ci` in a Node 20 container - fails if the lockfile is out of sync |
| `SonarQube Analysis` | `sonar-scanner` using `sonar-project.properties` (project `event-master-web`) |
| `Quality Gate`       | Polls SonarQube and fails the build unless the gate is `OK`           |
| `Docker Build`       | Builds `event-master-web:<build number>` and `:latest`                |
| `Deploy`             | `docker stack deploy` of `stack.yml` as the `event-master-web` stack  |
| `Health Check`       | Waits for `1/1` replicas, then requires HTTP 2xx/3xx on port 3000     |

| Branch       | Install | Analysis + Gate | Build + Deploy |
|--------------|---------|-----------------|----------------|
| `main`       | yes     | yes             | **yes**        |
| `develop`    | yes     | yes             | no             |
| other        | yes     | no              | no             |

There are no automated frontend tests yet, so the quality gate is the main check before a deploy.

### Jenkins setup (once)

Add these under *Manage Jenkins > Credentials* (kind: *Secret text*):

| Credential ID          | Value                                   |
|------------------------|-----------------------------------------|
| `nextauth-secret`      | `NEXTAUTH_SECRET` (`openssl rand -base64 32`) |
| `knock-secret-api-key` | Knock server-side API key               |

The SonarQube server entry named `SonarQube` is the one the API pipeline already uses.

### Order matters

`next build` prerenders pages that call the API, so **deploy the API stack first**. The web
service reaches it through `API_URL` (default `http://host.docker.internal:8899/`, with the
trailing slash). Next.js also downloads Google Fonts during the build, so the build needs
internet access.

### Manual deploy

```bash
docker build -t event-master-web:latest \
  --build-arg API_URL=http://host.docker.internal:8899/ \
  --build-arg NEXTAUTH_URL=http://localhost:3000 \
  --build-arg NEXTAUTH_SECRET=... --build-arg KNOCK_SECRET_API_KEY=... .

IMAGE_TAG=latest API_URL=http://host.docker.internal:8899/ NEXTAUTH_URL=http://localhost:3000 \
NEXTAUTH_SECRET=... KNOCK_SECRET_API_KEY=... \
  docker stack deploy -c stack.yml event-master-web
```

## Routes

> Login Page
> <br> > http://34.87.153.65:9999/login > <br><br>
> Signup Page
> <br> > http://34.87.153.65:9999/member > <br><br>
> Langin Page
> <br> > http://34.87.153.65:9999/ > <br><br>
> About Page
> <br> > http://34.87.153.65:9999/about > <br><br>
> Overview Page
> <br> > http://34.87.153.65:9999/overview > <br><br>
> Member Page
> <br> > http://34.87.153.65:9999/members > <br><br>
> Asset Page
> <br> > http://34.87.153.65:9999/assets > <br><br>
> Events Page
> <br> > http://34.87.153.65:9999/events > <br><br>
> User Request Page
> <br> > http://34.87.153.65:9999/user-request > <br><br>
> Organization Profile Page
> <br> > http://34.87.153.65:9999/organization-profile > <br><br>
> User Profile Page
> <br> > http://34.87.153.65:9999/user-profile > <br><br>
> Member Page
> <br> > http://34.87.153.65:9999/member > <br><br>
