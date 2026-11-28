'use client'

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/shared/ui/kit/sheet"
import { SidebarComponent } from "./SidebarComponent"
import { NavbarComponent } from "./NavbarComponent"

// Dashboard frame: the sidebar is a sticky column from `lg` up; on phones and tablets it opens as a
// Sheet (drawer) from the navbar's menu button. The Sheet handles focus trapping, Esc, the backdrop
// and scroll locking.
export default function DashboardShell({ children }) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    // close the drawer after navigating
    useEffect(() => setOpen(false), [pathname])

    return (
        <div className="flex min-h-screen">
            <aside className="sticky top-0 hidden h-screen w-60 shrink-0 lg:block 2xl:w-65">
                <SidebarComponent className="h-full overflow-y-auto" />
            </aside>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="w-70 max-w-[85vw] gap-0 p-0 lg:hidden">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">Dashboard navigation</SheetDescription>
                    <SidebarComponent className="h-full overflow-y-auto border-r-0" />
                </SheetContent>
            </Sheet>

            <div className="min-w-0 flex-1">
                <NavbarComponent onMenuClick={() => setOpen(true)} />
                <main data-theme="light" className="min-h-[92%] bg-background-ui p-4 sm:p-6 lg:px-10 xl:px-14">
                    {children}
                </main>
            </div>
        </div>
    )
}
