'use client'
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const ResetPasswordComponent = () => {



    const pathname = usePathname();

    function chooseImage(){
        if(pathname === '/forgot-password'){
            return 'forgot-pw-icon.svg'
        }else if(pathname === '/verify-otp'){
            return 'verify-otp-icon.svg'
        }else if(pathname === '/set-new-password'){
            return 'set-pw-icon.svg'
        }else if(pathname === '/verify'){
            return 'verify-success-icon.svg'
        }
    }

    console.log(pathname)
    return (
        <div className="absolute w-[49%] h-[83%] mt-20 left-[25%]">
            <Image className="absolute object-cover drop-shadow-lg"
                   src="/images/bg-forgotpw.svg" alt="image" width={934} height={746} property=""/>

            <Link href={`/login`} className="absolute top-10 left-10  hover:bg-purple-text-head hover:rounded-full">
                <Image className="object-cover"
                       src="/icons/back-icon.svg" alt="icon" width={42} height={42} property=""/>
            </Link>

            <div className=" absolute  top-32 left-44">
                <Image className="object-cover"
                       src={`icons/${chooseImage()}`} alt="icon" width={600} height={200} property=""/>
                <div className="absolute top-10 mt-3 flex gap-x-16  ">
                    <p className={`${pathname === '/forgot-password' || pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''}`}>Forgot password</p>
                    <p className={`${pathname === '/verify-otp' || pathname === '/set-new-password' || pathname === '/verify' ? 'text-purple-text' : ''}`}>Verify OTP</p>
                    <p className={`${pathname === '/set-new-password' || pathname === '/verify' ?  'text-purple-text' : ''}`}>New password</p>
                    <p className={`${pathname === '/verify' ? 'text-purple-text' : ''}`}>Success</p>
                </div>
            </div>
        </div>

    )
}

export default ResetPasswordComponent