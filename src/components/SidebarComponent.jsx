'use client'
import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { Calendar1, I3Dcube, Layer, LogoutCurve, Notification, People, Setting2 } from "iconsax-react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import data from "../data/sidebar.json"

export const SidebarComponent = ({ className }) => {
    const pathname = usePathname();

    return (
        <div className={`${className} space-y-6 p-8 border-r-1px`}>
            <div>
                <Image src={logo} height={100} width={100} />
            </div>
            <hr />
            <div>
                {data?.data?.map((x, index) => (
                    <Link href={x.link} key={index}>
                        <div className={`space-x-3 p-4 flex rounded-radiusUi w-full items-center ${pathname === x.link && "text-white bg-purple-text"}`}>
                            {x.icon == 'overview' ? <Layer size="24" color={`${pathname === "/overview" ? "#FFFFFF" : '#344054'}`} variant="Bulk" />
                                : x.icon == "members" ? <People size="24" color={`${pathname === "/members" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                                    : x.icon == 'assets' ? <I3Dcube size="24" color={`${pathname === "/assets" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                                        : x.icon == "events" ? <Calendar1 size="24" color={`${pathname === "/events" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                                            : x.icon == "request" ? <Notification size="24" color={`${pathname === "/user-request" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                                                : x.icon == "setting" ? <Setting2 size="24" color={`${pathname === "/account-setting" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                                                    : x.icon == "logout" ? <LogoutCurve size="24" color="#344054" variant="Bulk" /> : <LogoutCurve size="24" color="#344054" variant="Bulk" />}
                            <p className="text-xl font-medium">{x.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}