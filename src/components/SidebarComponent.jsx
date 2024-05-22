'use client'
import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { Calendar1, I3Dcube, Layer, LogoutCurve, Notification, People, Setting2 } from "iconsax-react"
import { usePathname } from "next/navigation";

export const SidebarComponent = ({className}) => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={`${className} space-y-6 p-8 border-r-[1px]`}>
            <div>
                <Image src={logo} height={100} width={100} />
            </div>
            <hr />
            <div className="">
                <div className={`${pathname === "/overview" && 'text-white bg-primary'} space-x-3 p-4 flex rounded-[10px] w-[246px] items-center`}>
                    <Layer size="24" color={`${pathname === "/overview" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">Overview</p>
                </div>
                <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                    <People size="24" color="#344054" variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">Members</p>
                </div>
                <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                    <I3Dcube size="24" color="#344054" variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">Assets</p>
                </div>
                <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                    <Calendar1 size="24" color="#344054" variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">Events</p>
                </div>
                <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                    <Notification size="24" color="#344054" variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">User Request</p>
                </div>
                <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                    <Setting2 size="24" color="#344054" variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">Account Setting</p>
                </div>
                <div className="space-x-3 p-4 flex rounded-[10px] w-[246px] items-center">
                    <LogoutCurve size="24" color="#344054" variant="Bulk" />
                    <p className="text-xl font-medium font-jakarta">Logout</p>
                </div>
            </div>
        </div>
    )
}