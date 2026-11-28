'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarComponent } from "@/components/SidebarComponent";
import { NavbarComponent } from "@/components/NavbarComponent";

// Dashboard frame: sidebar is a sticky column from `lg` up, and a slide-in
// drawer (opened from the navbar's menu button) on phones and tablets.
// A single sidebar instance is rendered so ids inside it (e.g. the logout
// dialog) stay unique.
export default function DashboardShell({ children }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // close the drawer after navigating
    useEffect(() => setOpen(false), [pathname]);

    // lock page scroll and allow Esc while the drawer is open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <div className="flex min-h-screen">
            {/* backdrop (mobile/tablet only) */}
            <div
                onClick={() => setOpen(false)}
                aria-hidden="true"
                className={`lg:hidden fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
            <aside
                className={`fixed lg:sticky top-0 left-0 z-[70] lg:z-auto h-screen w-[260px] max-w-[80vw] lg:w-[240px] 2xl:w-[260px] shrink-0 bg-white transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0 shadow-xl" : "-translate-x-full"}`}
            >
                <SidebarComponent className="h-full overflow-y-auto" />
            </aside>
            <div className="flex-1 min-w-0">
                <NavbarComponent className="" onMenuClick={() => setOpen(true)} />
                <div
                    data-theme="light"
                    className="p-4 sm:p-6 lg:px-10 xl:px-14 bg-backgroundUi min-h-[92%]"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
