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
        <div className="absolute grid sm:grid-cols-1 md:grid-cols-2 lg:w-[49%] lg:h-[83%] lg:mt-20 lg:left-[25%] lg:block md:w-[75%] md:left-[12.8%] md:top-0">
            <Image className=" object-cover drop-shadow-md"
                   src="/images/bg-forgotpw.svg" alt="image" width={934} height={746} property=""/>

            <div
                className=" absolute bg-violet-400 lg:w-[42px] lg:h-[42px] lg:mt-12 lg:left-12 rounded-full  hover:bg-purple-text-head duration-200 lg:block md:w-[45px] md:h-[45px] md:mt-10 md:left-12 md:top-2 md:rounded-full md:hover:bg-purple-text-head md:duration-200"
                onClick={() => router.back()}>
                <Image className="object-cover absolute lg:top-3.5 lg:left-[10px] lg:block md:top-4 md:left-[12px]"
                       src="/icons/arrowback-icon.svg" alt="icon" width={20} height={20} property=""/>
            </div>

            <div className=" absolute lg:top-32 lg:left-38 lg:block md:top-[15%] md:left-28 md:max-w-screen-md md:mx-12">
                <Image className="object-cover"
                       src={`icons/${chooseImage()}`} alt="icon" width={600} height={200} property=""/>
                <div className="absolute lg:top-12 lg:mt-2 flex md:text-[14px]">
                    <p className={`${pathname === '/forgot-password' || pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} md:pl-2`}>Forgot
                        password</p>
                    <p className={`${pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} lg:pl-16 lg:block md:pl-16`}>Verify
                        OTP</p>
                    <p className={`${pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} lg:pl-20 lg:block md:pl-[80px]`}>New
                        password</p>
                    <p className={`${pathname === '/verify' ? 'text-purple-text' : ''} lg:pl-18 lg:block md:pl-[90px]`}>Success</p>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordComponent