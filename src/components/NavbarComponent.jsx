'use client'

import Image from "next/image"
import logo from "../../public/images/gundam.jpg"
import { usePathname } from "next/navigation"
import { NotificationMenu } from "./NotificationMenu"
import { CreateEventButton } from "@/app/(dashboard)/_components/Action/CreateEventButton"
import { NotificationCard } from "@/app/(dashboard)/_components/NotificationCard"

export const NavbarComponent = ({ className }) => {
    const pathname = usePathname();
    return (
        <div className={`${className} sticky top-0 z-50 bg-white flex lg:justify-between justify-end items-center py-3 px-3 lg:px-14 border-b-[1px]`}>
            <h2 className="text-xl font-semibold hidden lg:block">
                {pathname === '/overview' ?
                    'Overview' :
                    pathname === '/members' ?
                        'Member' :
                        pathname === '/assets' ?
                            'Assets' :
                            pathname === '/events' || pathname == "/event-detail" || pathname === "/attendees" ?
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
            <div className="space-x-10 flex items-center">
                <div className="bg-[#F7F9FB] p-2 rounded-full hidden cursor-pointer">
                    {/* <NotificationMenu /> */}
                    <Image src={'/icons/icon.svg'} width={24} height={24} />
                </div>
                <NotificationCard />
                <CreateEventButton />
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
            </div>
        </div>
    )
}