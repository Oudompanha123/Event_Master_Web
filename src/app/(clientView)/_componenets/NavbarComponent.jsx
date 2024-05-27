'use client'

import Image from "next/image"
import Link from "next/link"
import image from "../../../../public/images/event-master-logo.png"
import { usePathname } from "next/navigation";

export const NavbarComponent = () => {
    const pathname = usePathname();
    return (
        <div className="flex justify-between py-6 container">
            <Link className="flex items-center gap-6" href={'/'}>
                <Image src={image} height={64} width={64} />
                <h2 className="text-2xl font-bold">EventMaster</h2>
            </Link>
            <div className="flex gap-8 items-center">
                <div className="space-x-8">
                    <Link href={'/'}>
                        <span className={`py-3 ${pathname == "/" && 'border-b-2'} border-purple-text`}>Home</span>
                    </Link>
                    <Link href={'about'}>
                        <span className={`py-3 ${pathname == "/about" && 'border-b-2'} border-purple-text`}>About</span>
                    </Link>
                </div>
                <button className="text-white bg-purple-text text-xl font-semibold px-14 py-3 rounded-full">Login</button>
            </div>
        </div>
    )
}