'use client'

import Image from "next/image"
import Link from "next/link"
import image from "../../../../public/images/event-master-logo.png"
import { usePathname } from "next/navigation";
import { HambergerMenu } from "iconsax-react";

export const NavbarComponent = () => {
    const pathname = usePathname();
    return (
        <div className="flex justify-between py-6 container items-center">
            <Link className="flex items-center gap-6" href={'/'}>
                <Image src={image} height={64} width={64} />
                <h2 className="text-2xl hidden lg:block font-bold">EventMaster</h2>
            </Link>
            <div className="gap-8 items-center hidden lg:flex">
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
            <button className="btn lg:hidden" onClick={() => document.getElementById('my_modal_2').showModal()}>
                <HambergerMenu size="32" color="#344054" />
            </button>
            <dialog id="my_modal_2" className="modal lg:hidden">
                <div className="modal-box">
                    <div className="flex flex-col justify-center space-y-8 items-center">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <button className="text-white bg-purple-text text-sm font-semibold px-14 py-3 rounded-full">Login</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}