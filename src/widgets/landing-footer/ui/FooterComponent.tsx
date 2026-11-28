import Link from "next/link"
import Image from "next/image"
import googleIcon from "../../../../public/icons/google.png"
import facebookIcon from "../../../../public/icons/facebook.png"
import { Separator } from "@/shared/ui/kit/separator"

const SOCIAL = [
    { href: "https://www.facebook.com/ksignhrd", icon: facebookIcon, label: "EventMaster on Facebook" },
    { href: "https://maps.app.goo.gl/pSM8FKj1BayJ7uph7", icon: googleIcon, label: "EventMaster on Google Maps" },
]

export const FooterComponent = () => (
    <footer className="container space-y-6 pt-24 pb-12 lg:pt-32 lg:pb-16">
        <h2 className="text-2xl font-extrabold lg:text-3xl">EventMaster</h2>
        <p className="max-w-md text-sm font-medium md:text-base">
            EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.
        </p>
        <nav aria-label="Footer" className="flex gap-6 text-sm font-medium md:gap-10 md:text-base">
            <Link href="/" className="hover:text-purple-text">Home</Link>
            <Link href="/about" className="hover:text-purple-text">About</Link>
        </nav>
        <Separator />
        <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-medium md:text-base">© 2024 EventMaster</p>
            <div className="flex gap-3">
                {SOCIAL.map(({ href, icon, label }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="rounded-full border border-grey-ui p-1 transition-colors hover:border-purple-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Image src={icon} width={24} height={24} alt="" />
                    </a>
                ))}
            </div>
        </div>
    </footer>
)
