'use client'

import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { AddSquare } from "iconsax-react"
import { usePathname } from "next/navigation"
import { NotificationMenu } from "./NotificationMenu"

export const NavbarComponent = ({ className }) => {
    const pathname = usePathname();
    return (
        <div className={`${className} sticky top-0 z-50 bg-white flex justify-between items-center py-4 px-14 border-b-[1px]`}>
            <h2 className="text-xl font-semibold">
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
                <div className="bg-[#F7F9FB] p-3.5 rounded-full">
                    {/* <Notification size="24" color="#344054" variant="Bulk" /> */}
                    <NotificationMenu />
                </div>
                <div className="flex items-center bg-[#F7F9FB] gap-2 py-4 px-6 rounded-full">
                    <AddSquare size="24" color="#344054" variant="Bold" />
                    <p className="text-sm">New Event</p>
                </div>
                <div className="flex items-center gap-4">
                    <div>
                        <p className="font-medium">Thomas Brown</p>
                        <p className="text-sm">ThomasNikola@gmail.com</p>
                    </div>
                    <div className="w-[48px] h-48px]">
                        <Image src={logo} height={48} width={48} />
                    </div>
                </div>
            </div>
        </div>
    )
}