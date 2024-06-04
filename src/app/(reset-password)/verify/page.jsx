import Image from "next/image";
import Link from "next/link";
import VerifyComponent from "@/app/(reset-password)/_components/VerifyComponent";


const VerifyPage = () => {
    return (
        <div className="bg-primary-purple w-[100%] h-screen relative">
            <div className="absolute w-[49%] h-[83%] mt-20 left-[25%]">
                <Image className="object-cover drop-shadow-lg"
                       src="/images/bg-forgotpw.svg" alt="image" width={934} height={746} property=""/>

                <Link href={`/set-new-password`} className="absolute top-10 left-10  hover:bg-purple-text-head hover:rounded-full">
                    <Image className="object-cover"
                           src="/icons/back-icon.svg" alt="icon" width={42} height={42} property=""/>
                </Link>
                <div className=" absolute  top-32 left-44">
                    <Image className="object-cover"
                           src="/icons/verify.svg" alt="icon" width={600} height={200} property=""/>
                    <div className="absolute top-10 mt-3 flex gap-x-16  ">
                        <p className="text-purple-text">Forgot password</p>
                        <p className="text-purple-text">Verify OTP</p>
                        <p className="text-purple-text">New password</p>
                        <p className="text-purple-text">Success</p>
                    </div>
                </div>

                <Image
                    className="absolute mt-[23%] left-[29%]"
                    src="/images/verify-success.gif" alt="image" width={400} height={200} property=""/>
            </div>
            {/*Verify component*/}
            <VerifyComponent/>

        </div>

    )
}

export default VerifyPage
