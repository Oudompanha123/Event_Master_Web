'use client'

import Image from "next/image"
import logo from "../../public/images/event-master-logo.png"
import { Calendar1, I3Dcube, Layer, LogoutCurve, Notification, People, Setting2 } from "iconsax-react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import data from "../data/sidebar.json"
import { useState } from "react";

export const SidebarComponent = ({ className }) => {
    const pathname = usePathname();
    const [click, setClick] = useState(false);

    return (
        <div className={`${className} space-y-6 p-8 border-r-1px sticky top-0 h-screen`}>
            <div>
                <Image src={logo} height={100} width={100} />
            </div>
            <hr />
            <div>
                {data?.data?.map((x, index) => (
                    <Link onClick={() => setClick(false)} href={x.link} key={index}>
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
                {/* dropdown sidebar  */}
                <ul className={`menu pl-0 w-ful cursor-pointer rounded-radiusUi`}>
                    <h2 onClick={() => setClick(!click)} className={`menu-title flex items-center gap-3 rounded-radiusUi p-4 ${pathname === "/organization-profile" || pathname === "/user-profile" && "text-white bg-purple-text"}`}>
                        <Setting2 size="24" color={`${pathname === "/organization-profile" || pathname === "/user-profile" ? '#FFFFFF' : '#344054'}`} variant="Bulk" />
                        <p className={`text-xl font-medium ${pathname === "/organization-profile" || pathname === "/user-profile" ? "text-white" : 'text-primary-text'}`}>Account Setting</p>
                    </h2>
                    <ul className={`${!click && 'hidden'}`}>
                        <li className={`ml-8 ${pathname == '/organization-profile' && 'underline'}`}>
                            <Link href={'/organization-profile'}>Organization Profile</Link>
                        </li>
                        <li className={`ml-8 ${pathname == '/user-profile' && 'underline'}`}>
                            <Link href={'/user-profile'}>User Profile</Link>
                        </li>
                    </ul>
                </ul>
                <Link onClick={() => setClick(false)} href={'/logout'}>
                    <div className={`space-x-3 p-4 flex rounded-radiusUi w-full items-center`}>
                        <LogoutCurve size="24" color="#344054" variant="Bulk" />
                        <p className="text-xl font-medium">Logout</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}