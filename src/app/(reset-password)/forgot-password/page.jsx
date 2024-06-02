import Image from "next/image";
import ForgotPasswordComponent from "@/app/(reset-password)/_components/ForgotPasswordComponent";
import Link from "next/link";

const ForgotPasswordPage = () => {
    return (
        <div className="bg-primary-purple w-[100%] h-screen relative">
            <div className="absolute w-[49%] h-[83%] mt-20 left-[25%]">
                <Image className="absolute object-cover"
                       src="/images/bg-forgotpw.svg" alt="image" width={934} height={746} property=""/>

                <Link href={`/login`} className="absolute top-10 left-10  hover:bg-purple-text-head hover:rounded-full">
                    <Image className="object-cover"
                           src="/icons/back-icon.svg" alt="icon" width={42} height={42} property=""/>
                </Link>
                <div className=" absolute  top-32 left-44">
                    <Image className="object-cover"
                           src="/icons/step-fg-icon.svg" alt="icon" width={600} height={200} property=""/>
                    <div className="absolute top-10 mt-3 flex gap-x-16  ">
                        <p className="text-purple-text">Forgot password</p>
                        <p>Verify OTP</p>
                        <p>New password</p>
                        <p>Success</p>
                    </div>
                </div>

            </div>
            {/*forgot password component*/}
            <ForgotPasswordComponent/>
        </div>

    )
}

export default ForgotPasswordPage