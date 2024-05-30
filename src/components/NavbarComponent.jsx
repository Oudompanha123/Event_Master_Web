'use client'

import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { AddSquare } from "iconsax-react"
import { usePathname } from "next/navigation"
import { NotificationMenu } from "./NotificationMenu"

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
                            pathname === '/events' ?
                                'Events' :
                                pathname === '/user-request' ?
                                    'Notification' :
                                    pathname === '/account-setting' ?
                                        'Account Setting' :
                                        'Default'}
            </h2>
            <div className="space-x-10 flex items-center">
                <div className="bg-[#F7F9FB] p-2 rounded-full hidden lg:block">
                    {/* <Notification size="24" color="#344054" variant="Bulk" /> */}
                    <NotificationMenu />
                </div>
                <div className="hidden lg:flex items-center bg-[#F7F9FB] gap-2 py-3 px-3 lg:px-6 rounded-full">
                    <AddSquare size="24" color="#344054" variant="Bold" />
                    <p className="text-sm hidden lg:block">New Event</p>
                </div>
                <div className="flex lg:hidden items-center bg-[#F7F9FB] gap-2 py-3 px-3 lg:px-6 rounded-full">
                    <AddSquare size="20" color="#344054" variant="Bold" />
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">
                        <p className="font-medium text-sm">Thomas Brown</p>
                        <p className="text-xs">ThomasNikola@gmail.com</p>
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