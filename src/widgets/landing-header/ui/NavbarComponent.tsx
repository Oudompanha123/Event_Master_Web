'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import logo from "../../../../public/images/event-master.png"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/kit/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/shared/ui/kit/sheet"

const LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
]

export const NavbarComponent = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    // close the menu after navigating (links also close it on tap, which covers the current page)
    useEffect(() => setOpen(false), [pathname])

    return (
        <header className="sticky top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
            <div className="container flex items-center justify-between py-3 lg:py-4">
                <Link href="/" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Image src={logo} height={192} width={192} alt="EventMaster" priority className="h-auto w-36 sm:w-44 lg:w-48" />
                </Link>

                <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
                    {LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            aria-current={pathname === href ? "page" : undefined}
                            className={cn(
                                "border-b-2 py-2 font-medium transition-colors hover:text-purple-text",
                                pathname === href ? "border-purple-text" : "border-transparent",
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                    <Button asChild className="h-10 rounded-full px-10 font-semibold">
                        <Link href="/login">Login</Link>
                    </Button>
                </nav>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon-lg" aria-label="Open menu" className="lg:hidden">
                            <Menu className="size-7" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-72 max-w-[85vw] gap-0 p-6">
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                        <SheetDescription className="sr-only">Site navigation</SheetDescription>
                        <Image src={logo} height={192} width={192} alt="EventMaster" className="mb-8 h-auto w-36" />
                        <nav aria-label="Mobile" className="flex flex-col gap-1">
                            {LINKS.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    aria-current={pathname === href ? "page" : undefined}
                                    className={cn(
                                        "rounded-xl px-4 py-3 text-lg font-medium transition-colors hover:bg-accent",
                                        pathname === href && "bg-accent text-accent-foreground",
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                        <Button asChild className="mt-8 h-12 rounded-full font-semibold">
                            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                        </Button>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
