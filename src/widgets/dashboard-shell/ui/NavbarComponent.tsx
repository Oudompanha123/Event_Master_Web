'use client'

import { Fragment, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { jwtDecode } from "jwt-decode"
import { Building2, Menu, UserRound } from "lucide-react"
import defaultProfile from "../../../../public/images/default-profile.jpg"
import { NotificationMenu } from "./NotificationMenu"
import { CreateEventButton } from "@/features/event/create"
import { getEventByIdAction } from "@/entities/event/api/eventFormAction"
import { getOrganizationAction } from "@/entities/organization/api/orgAction"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/kit/avatar"
import { Button } from "@/shared/ui/kit/button"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/shared/ui/kit/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/ui/kit/dropdown-menu"

const TITLES: Record<string, string> = {
    "/overview": "Overview",
    "/members": "Member",
    "/assets": "Assets",
    "/events": "Events",
    "/user-request": "Notification",
    "/organization-profile": "Organization Profile",
    "/user-profile": "User Profile",
    "/account-setting": "Account Setting",
}

const initials = (name?: string) =>
    (name ?? "")
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("") || "EM"

export const NavbarComponent = ({ className, onMenuClick }: { className?: string; onMenuClick?: () => void }) => {
    const pathname = usePathname()
    const { data: session, status } = useSession()
    const userInfo = useMemo(
        () => (status === "authenticated" && session?.user?.token ? jwtDecode(session.user.token) : undefined),
        [session, status],
    )
    const userRole = userInfo?.role

    // event pages show breadcrumbs instead of a title
    const onEventPage = pathname.startsWith("/event-detail") || pathname.startsWith("/attendees")
    const eventId = pathname.split("/")[2]
    const [eventName, setEventName] = useState<string>()
    useEffect(() => {
        if (!onEventPage || !eventId) return
        setEventName(undefined)
        getEventByIdAction(eventId).then((res) => setEventName(res?.payload?.eventName))
    }, [onEventPage, eventId])

    // The token's organization is a snapshot from login time; load the live one,
    // and pick up edits made on the organization profile page.
    const [org, setOrg] = useState<any>(null)
    useEffect(() => {
        if (status !== "authenticated") return
        getOrganizationAction()
            .then((res) => res?.payload && setOrg(res.payload))
            .catch((err) => console.error("Error loading organization: ", err))
        const onUpdated = (e) => e.detail && setOrg(e.detail)
        window.addEventListener("organization-updated", onUpdated)
        return () => window.removeEventListener("organization-updated", onUpdated)
    }, [status])
    const orgName = org?.orgName ?? userInfo?.organization?.orgName
    const orgLogo = org?.logo ?? userInfo?.organization?.logo
    const logoSrc = orgLogo && /^(http|https):\/\//.test(orgLogo) ? orgLogo : defaultProfile.src

    return (
        <header className={`sticky top-0 z-50 flex items-center justify-between gap-3 border-b border-border bg-white px-4 py-3 sm:px-6 lg:px-10 xl:px-14 ${className ?? ""}`}>
            <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                {onMenuClick && (
                    <Button variant="ghost" size="icon" onClick={onMenuClick} aria-label="Open menu" className="-ml-1 shrink-0 lg:hidden">
                        <Menu className="size-6" />
                    </Button>
                )}
                {onEventPage ? (
                    <Breadcrumb className="min-w-0">
                        <BreadcrumbList className="flex-nowrap">
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href="/events">Events</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem className="min-w-0">
                                {pathname.startsWith("/event-detail") ? (
                                    <BreadcrumbPage className="truncate">{eventName ?? "..."}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild>
                                        <Link href={`/event-detail/${eventId}`} className="truncate">{eventName ?? "..."}</Link>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                            {pathname.startsWith("/attendees") && (
                                <Fragment>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>Attendees</BreadcrumbPage>
                                    </BreadcrumbItem>
                                </Fragment>
                            )}
                        </BreadcrumbList>
                    </Breadcrumb>
                ) : (
                    <h1 className="truncate text-lg font-semibold lg:text-xl">{TITLES[pathname] ?? "Default"}</h1>
                )}
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4 lg:gap-8">
                <div className="hidden rounded-full bg-background-ui p-1 sm:block">
                    <NotificationMenu />
                </div>
                {(userRole === "ROLE_ADMIN" || userRole === "ROLE_SUB_ADMIN") && <CreateEventButton />}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <span className="hidden text-right lg:block">
                            <span className="block text-sm font-semibold">{orgName}</span>
                            <span className="block text-xs text-grey-ui">{userInfo?.sub}</span>
                        </span>
                        <Avatar className="size-9 lg:size-12">
                            <AvatarImage src={logoSrc} alt="Organization logo" className="object-cover" />
                            <AvatarFallback>{initials(orgName)}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="font-normal">
                            <span className="block truncate text-sm font-semibold">{orgName}</span>
                            <span className="block truncate text-xs text-muted-foreground">{userInfo?.sub}</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/user-profile">
                                <UserRound /> User Profile
                            </Link>
                        </DropdownMenuItem>
                        {userRole === "ROLE_ADMIN" && (
                            <DropdownMenuItem asChild>
                                <Link href="/organization-profile">
                                    <Building2 /> Organization Profile
                                </Link>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
