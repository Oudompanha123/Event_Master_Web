'use client'

import Image from "next/image"
import defaultProfile from "../../../../public/images/default-profile.jpg"
import { usePathname, useSearchParams } from "next/navigation"
import { NotificationMenu } from "./NotificationMenu"
import { CreateEventButton } from "@/features/event/create";
import Link from "next/link"
import { useSession } from "next-auth/react"
import { jwtDecode } from "jwt-decode"
import { getEventByIdAction } from "@/entities/event/api/eventFormAction"
import { getOrganizationAction } from "@/entities/organization/api/orgAction"
import { useEffect, useState } from "react"

export const NavbarComponent = ({ className, onMenuClick }) => {
    const [eventName, setEventName] = useState<any>();
    const pathname = usePathname();
    let url = pathname;
    let eId = url.split('/').pop()

    const param = useSearchParams()
    const eName = param.get('name')
    // searchParam for server 
    const eventId = pathname.split('/')[2];
    const { data: session, status } = useSession();
    let userInfo;

    if (status === 'authenticated' && session?.user?.token) {
        userInfo = jwtDecode(session.user.token);
    }

    const getEventById = async (id) => {
        const res = await getEventByIdAction(id);
        setEventName(res?.payload?.eventName)
    }

    useEffect(() => {
        if (pathname.startsWith('/event-detail') || pathname.startsWith('/attendees')) {
            setEventName(undefined);
            getEventById(eventId);
        }
    }, [pathname, eventId])

    const userRole = userInfo?.role;

    // The token's organization is a snapshot from login time; load the live one,
    // and pick up edits made on the organization profile page.
    const [org, setOrg] = useState(null);
    useEffect(() => {
        if (status !== 'authenticated') return;
        getOrganizationAction()
            .then(res => res?.payload && setOrg(res.payload))
            .catch(err => console.error("Error loading organization: ", err));
        const onUpdated = (e) => e.detail && setOrg(e.detail);
        window.addEventListener('organization-updated', onUpdated);
        return () => window.removeEventListener('organization-updated', onUpdated);
    }, [status]);
    const orgName = org?.orgName ?? userInfo?.organization?.orgName;
    const orgLogo = org?.logo ?? userInfo?.organization?.logo;
    const logoSrc = orgLogo && /^(http|https):\/\//.test(orgLogo) ? orgLogo : defaultProfile;

    return (
        <div className={`${className ?? ''} justify-between gap-3 sticky top-0 z-50 bg-white flex items-center py-3 px-4 sm:px-6 lg:px-10 xl:px-14 border-b-1px`}>
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                {onMenuClick && (
                    <button
                        type="button"
                        onClick={onMenuClick}
                        aria-label="Open menu"
                        className="lg:hidden -ml-1 p-2 rounded-lg hover:bg-gray-100 shrink-0"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#344054" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                )}
                {!pathname.startsWith('/event-detail') && !pathname.startsWith('/attendees') ?
                    <h2 className="text-lg lg:text-xl font-semibold block truncate">
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
                                    <Link href={`/event-detail/${eventId}`}>{eventName ? eventName : '...'}</Link>
                                </li>
                                <li>
                                    <Link href={`/attendees/${eventId}`}>Attendees</Link>
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
            </div>
            <div className="flex items-center gap-3 sm:gap-6 lg:gap-10 shrink-0">
                <div className="bg-[#F7F9FB] p-2 rounded-full hidden cursor-pointer">
                    {/* <NotificationMenu /> */}
                    <Image src={'/icons/icon.svg'} width={24} height={24} alt="" />
                </div>
                {/* <NotificationCard /> */}
                <div tabIndex={0} role="button" className="bg-[#F7F9FB] p-1 rounded-full hidden cursor-pointer lg:block">
                    <NotificationMenu />
                </div>
                {userRole === "ROLE_ADMIN" || userRole === "ROLE_SUB_ADMIN" ? <CreateEventButton /> : ''}
                <Link href={'/user-profile'}>
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            <p className="font-semibold text-end text-sm">{orgName}</p>
                            <p className="text-xs text-grey-ui">{userInfo?.sub}</p>
                        </div>
                        <div className="w-[48px] h-[48px] hidden lg:block">
                            <Image
                                className="rounded-full w-full h-full object-cover"
                                src={logoSrc}
                                alt="organization logo"
                                height={48}
                                width={48}
                            />
                        </div>
                        <div className="w-[36px] h-[36px] block lg:hidden">
                            <Image
                                className="rounded-full w-full h-full object-cover"
                                src={logoSrc}
                                alt="organization logo"
                                height={48}
                                width={48}
                            />
                            {/* <Image className="rounded-full" src={userInfo?.organization?.logo != "" ? userInfo?.organization?.logo : defaultProfile} height={32} width={32} /> */}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}