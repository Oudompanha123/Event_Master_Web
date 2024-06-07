'use client'

import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";

const ResetPasswordComponent = () => {

    const pathname = usePathname();

    function chooseImage() {
        if (pathname === '/forgot-password') {
            return 'forgot-pw-icon.svg'
        } else if (pathname === '/verify-otp') {
            return 'verify-otp-icon.svg'
        } else if (pathname === '/set-new-password') {
            return 'set-pw-icon.svg'
        } else if (pathname === '/verify') {
            return 'verify-success-icon.svg'
        }
    }

    const router = useRouter();

    console.log(pathname)

    return (
        <div className="absolute grid sm:grid-cols-1 md:grid-cols-2 w-[49%] h-[83%] mt-20 left-[25%]">
            <Image className="absolute object-cover drop-shadow-md"
                   src="/images/bg-forgotpw.svg" alt="image" width={934} height={746} property=""/>

            <div
                className="absolute bg-violet-400 w-[42px] h-[42px] mt-10 left-10 rounded-full  hover:bg-purple-text-head duration-200"
                onClick={() => router.back()}>
                <Image className="object-cover absolute top-3.5 left-[10px] lg:block"
                       src="/icons/arrowback-icon.svg" alt="icon" width={20} height={20} property=""/>
            </div>

            <div className=" absolute top-32 left-40 lg:block">
                <Image className="object-cover"
                       src={`icons/${chooseImage()}`} alt="icon" width={600} height={200} property=""/>
                <div className="absolute top-10 mt-3 flex ">
                    <p className={`${pathname === '/forgot-password' || pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''}`}>Forgot
                        password</p>
                    <p className={`${pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} pl-12`}>Verify
                        OTP</p>
                    <p className={`${pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} pl-[70px]`}>New
                        password</p>
                    <p className={`${pathname === '/verify' ? 'text-purple-text' : ''} pl-20`}>Success</p>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordComponent