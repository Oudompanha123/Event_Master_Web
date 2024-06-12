'use client'

import { Filler } from "chart.js";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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
        // <div className="absolute object-cover grid sm:grid-cols-1 md:grid-cols-2 w-full md:w-[70%] lg:w-[49%] h-[83%] mt-20 sm:left-0 md:left-[15%] lg:left-[25%]">
        //     <Image className="absolute object-cover drop-shadow-md"
        //         src="/images/bg-forgotpw.svg" alt="image" width={934} height={746} property="" />
        //     <div
        //         className="absolute bg-violet-400 w-[42px] h-[42px] mt-10 left-10 rounded-full hover:bg-purple-text-head duration-200"
        //         onClick={() => router.back()}>
        //         <Image className="object-cover absolute top-3.5 left-[10px]"
        //             src="/icons/arrowback-icon.svg" alt="icon" width={20} height={20} property="" />
        //     </div>

        //     <div className="absolute object-cover sm:top-20 sm:left-5 md:top-28 md:left-20 lg:top-32 lg:left-40">
        //         <Image className="object-cover"
        //             src={`icons/${chooseImage()}`} alt="icon" width={600} height={200} property="" />
        //         <div className="absolute top-10 mt-3 flex flex-col sm:flex-row sm:space-x-12">
        //             <p className={`${pathname === '/forgot-password' || pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''}`}>
        //                 Forgot password
        //             </p>
        //             <p className={`${pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} pl-0 sm:pl-12`}>
        //                 Verify OTP
        //             </p>
        //             <p className={`${pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''} pl-0 sm:pl-[70px]`}>
        //                 New password
        //             </p>
        //             <p className={`${pathname === '/verify' ? 'text-purple-text' : ''} pl-0 sm:pl-20`}>
        //                 Success
        //             </p>
        //         </div>
        //     </div>
        // </div>

        <div className="absolute flex justify-center items-center w-full h-screen">
            <div className="relative w-full sm:w-[90%] md:w-[75%] lg:w-[59%] h-[53%] lg:h-[70%] rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        className="absolute object-cover"
                        src="/images/bg-forgotpw.svg"
                        alt="background image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div
                    className="absolute sm:top-10 left-5 md:top-10 md:left-10 bg-violet-400 w-10 h-10 rounded-full flex justify-center items-center hover:bg-purple-text-head"
                    onClick={() => router.back()}
                >
                    <Image src="/icons/arrowback-icon.svg" alt="back icon" width={20} height={20} />
                </div>

                <div className="relative z-10 flex flex-col items-center px-4 sm:top-24">
                    <Image
                        src={`/icons/${chooseImage()}`}
                        alt="icon"
                        width={600}
                        height={200}
                    />
                    <div className="flex flex-col sm:hidden md:inline-flex lg:inline-flex sm:flex-row md:flex-row justify-between sm:w-[550px] md: w-[100%] md:space-y-0 md:space-x-3">
                        <p className={`text-gray-600 ${pathname === '/forgot-password' ? 'text-purple-text' : ''}`}>
                            Forgot password
                        </p>
                        <p className={`text-gray-600 ${pathname === '/verify-otp' ? 'text-purple-text' : ''} -pl-12`}>
                            Verify OTP
                        </p>
                        <p className={`text-gray-600 ${pathname === '/set-new-password' ? 'text-purple-text' : ''}`}>
                            New password
                        </p>
                        <p className={`text-gray-600 ${pathname === '/verify' ? 'text-purple-text' : ''}`}>
                            Success
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordComponent