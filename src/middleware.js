export { default } from "next-auth/middleware"

//all route below is the route that we need to protect
export const config = {
    matcher:
        [
            '/overview',
            '/todo-board/:path*',
            '/members',
            '/user-request',
            '/organization-profile',
            '/user-profile',
            '/attendees',
            '/events',
            '/assets',
            '/event-detail/:path*'
        ]
}