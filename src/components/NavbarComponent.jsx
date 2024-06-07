'use client'

import Image from "next/image"
import logo from "../../public/images/gundam.jpg"
import { redirect, usePathname } from "next/navigation"
import { NotificationMenu } from "./NotificationMenu"
import { CreateEventButton } from "@/app/(dashboard)/_components/Action/CreateEventButton"
import { NotificationCard } from "@/app/(dashboard)/_components/NotificationCard"
import Link from "next/link"

export const NavbarComponent = ({ className }) => {
    const pathname = usePathname();
    console.log(pathname.startsWith('/attendees'))
    return (
        <div className={`${className} justify-between sticky top-0 z-50 bg-white flex lg:justify-between items-center py-3 px-3 lg:px-14 border-b-[1px]`}>
            {!pathname.startsWith('/event-detail') && !pathname.startsWith('/attendees') ?
                <h2 className="text-lg lg:text-xl font-semibold block">
                    {pathname === '/overview' ?
                        'Overview' :
                        pathname === '/members' ?
                            'Member' :
                            pathname === '/assets' ?
                                'Assets' :
                                pathname === '/events' || pathname.startsWith("/event-detail") || pathname === "/attendees" ?
                                    'Events' :
                                    pathname === '/user-request' ?
                                        'Notification' :
                                        pathname === '/organization-profile' ?
                                            "Organization Profile" :
                                            pathname === '/user-profile' ?
                                                "User Profile" :
                                                pathname === '/account-setting' ?
                                                    'Account Setting' :
                                                    'Default'}
                </h2>
                :
                <div>
                    <div className="hidden lg:flex text-sm breadcrumbs">
                        <ul className="">
                            <li>
                                <Link href={'/event-detail/1'}>Design Skill & Tech Session</Link>
                            </li>
                            <li>
                                <Link href={'/attendees'}>Attendees</Link>
                            </li>
                            <li>
                                <Link href={'/events'}>
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex lg:hidden text-sm breadcrumbs">
                        <ul className="">
                            <li>
                                <Link href={'/attendees'}>Attendees</Link>
                            </li>
                            <li>
                                <Link href={'/events'}>
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            <div className="space-x-10 flex items-center">
                <div className="bg-[#F7F9FB] p-2 rounded-full hidden cursor-pointer">
                    {/* <NotificationMenu /> */}
                    <Image src={'/icons/icon.svg'} width={24} height={24} />
                </div>
                <NotificationCard />
                <CreateEventButton />
                <Link href={'/user-profile'}>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <p className="font-semibold text-end text-sm">Thomas Brown</p>
                            <p className="text-xs text-greyUi">ThomasNikola@gmail.com</p>
                        </div>
                        <div className="w-[48px] h-48px] hidden lg:block">
                            <Image src={logo} height={48} width={48} />
                        </div>
                        <div className="w-[32px] h-[32px] block lg:hidden">
                            <Image src={logo} />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}