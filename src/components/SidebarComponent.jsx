'use client'
import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { Calendar1, I3Dcube, Layer, LogoutCurve, Notification, People, Setting2 } from "iconsax-react"
import { usePathname } from "next/navigation";
import Link from "next/link";

export const SidebarComponent = ({ className }) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={`${className} space-y-6 p-8 border-r-[1px]`}>
            <div>
                <Image src={logo} height={100} width={100} />
            </div>
            <hr />
            <div className="">
                <Link href={'/overview'}>
                    <div className={`${pathname === "/overview" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-full items-center`}>
                        <Layer size="24" color={`${pathname === "/overview" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className="text-xl font-medium">Overview</p>
                    </div>
                </Link>
                <Link href={'/members'}>
                    <div className={`${pathname === "/members" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-full items-center`}>
                        <People size="24" color={`${pathname === "/members" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className="text-xl font-medium">Members</p>
                    </div>
                </Link>
                <Link href={'/assets'}>
                    <div className={`${pathname === "/assets" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-full items-center`}>
                        <I3Dcube size="24" color={`${pathname === "/assets" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className="text-xl font-medium">Assets</p>
                    </div>
                </Link>
                <Link href={'/events'}>
                    <div className={`${pathname === "/events" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-full items-center`}>
                        <Calendar1 size="24" color={`${pathname === "/events" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className="text-xl font-medium">Events</p>
                    </div>
                </Link>
                <Link href={'/user-request'}>
                    <div className={`${pathname === "/user-request" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-full items-center`}>
                        <Notification size="24" color={`${pathname === "/user-request" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className="text-xl font-medium">User Request</p>
                    </div>
                </Link>
                <Link href={'/account-setting'}>
                    <div className={`${pathname === "/account-setting" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-full items-center`}>
                        <Setting2 size="24" color={`${pathname === "/account-setting" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className="text-xl font-medium">Account Setting</p>
                    </div>
                </Link>
                <Link href={'/logout'}>
                    <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                        <LogoutCurve size="24" color="#344054" variant="Bulk" />
                        <p className="text-xl font-medium">Logout</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}