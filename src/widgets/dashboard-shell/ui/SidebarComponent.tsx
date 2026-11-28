'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { useSession } from "next-auth/react"
import { jwtDecode } from "jwt-decode"
import { BellRing, Box, CalendarDays, ChevronDown, LayoutDashboard, Settings, Users, type LucideIcon } from "lucide-react"
import logo from "../../../../public/images/event-master.png"
import { LogoutAction } from "@/features/auth/logout"
import { cn } from "@/shared/lib/utils"
import { Separator } from "@/shared/ui/kit/separator"

type NavItem = { href: string; label: string; icon: LucideIcon; roles: string[]; also?: (path: string) => boolean }

const ALL = ["ROLE_USER", "ROLE_SUB_ADMIN", "ROLE_ADMIN"]
const STAFF = ["ROLE_SUB_ADMIN", "ROLE_ADMIN"]

const NAV: NavItem[] = [
    { href: "/overview", label: "Overview", icon: LayoutDashboard, roles: ALL },
    { href: "/members", label: "Members", icon: Users, roles: ALL },
    { href: "/assets", label: "Assets", icon: Box, roles: ALL },
    // an event's detail and attendee pages belong to Events
    { href: "/events", label: "Events", icon: CalendarDays, roles: ALL, also: (p) => p.startsWith("/event-detail") || p.startsWith("/attendees") },
    { href: "/user-request", label: "User Request", icon: BellRing, roles: STAFF },
]

const SETTINGS = [
    { href: "/organization-profile", label: "Organization Profile", roles: ["ROLE_ADMIN"] },
    { href: "/user-profile", label: "User Profile", roles: ALL },
]

const itemClass = (active: boolean) =>
    cn(
        "flex w-full items-center gap-3 rounded-radius-ui px-4 py-3 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        active ? "bg-primary text-primary-foreground" : "text-primary-text hover:bg-accent hover:text-accent-foreground",
    )

export const SidebarComponent = ({ className }: { className?: string }) => {
    const pathname = usePathname()
    const { data: session, status } = useSession()
    const role = useMemo(() => {
        if (status !== "authenticated" || !session?.user?.token) return undefined
        return jwtDecode(session.user.token)?.role
    }, [session, status])

    const inSettings = SETTINGS.some((s) => s.href === pathname)
    const [settingsOpen, setSettingsOpen] = useState(inSettings)

    const items = role ? NAV.filter((n) => n.roles.includes(role)) : []
    const settings = role ? SETTINGS.filter((s) => s.roles.includes(role)) : []

    return (
        <div className={cn("flex flex-col gap-4 border-r border-border bg-white p-4 2xl:p-5", className)}>
            <Link prefetch href="/overview" className="block p-2">
                <Image src={logo} height={192} width={192} alt="EventMaster" className="h-auto w-full max-w-48" priority />
            </Link>
            <Separator />
            <nav aria-label="Main" className="flex flex-col gap-1">
                {items.map(({ href, label, icon: Icon, also }) => {
                    const active = pathname === href || Boolean(also?.(pathname))
                    return (
                        <Link prefetch key={href} href={href} aria-current={active ? "page" : undefined} className={itemClass(active)}>
                            <Icon className="size-5 shrink-0" aria-hidden="true" />
                            {label}
                        </Link>
                    )
                })}

                <button
                    type="button"
                    onClick={() => setSettingsOpen((o) => !o)}
                    aria-expanded={settingsOpen}
                    aria-controls="sidebar-settings"
                    className={cn(itemClass(false), "justify-between")}
                >
                    <span className="flex items-center gap-3">
                        <Settings className="size-5 shrink-0" aria-hidden="true" />
                        Account Setting
                    </span>
                    <ChevronDown className={cn("size-5 transition-transform duration-300", settingsOpen && "rotate-180")} aria-hidden="true" />
                </button>
                {settingsOpen && (
                    <div id="sidebar-settings" className="flex flex-col gap-1">
                        {settings.map(({ href, label }) => (
                            <Link prefetch key={href} href={href} aria-current={pathname === href ? "page" : undefined} className={cn(itemClass(pathname === href), "pl-12")}>
                                {label}
                            </Link>
                        ))}
                    </div>
                )}

                <LogoutAction />
            </nav>
        </div>
    )
}
