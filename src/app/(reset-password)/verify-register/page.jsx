import Image from "next/image";
import Link from "next/link";
import VerifyRegisterComponent from "@/app/(reset-password)/_components/VerifyRegisterComponent";


const VerifyRegisterPage = () => {
    return (
        <div className="bg-primary-purple w-[100%] h-screen relative">
            <div className="absolute w-[49%] h-[83%] mt-20 left-[25%]">
                <Image className="absolute object-cover drop-shadow-lg"
                       src="images/verify-otp-rg.svg" alt="image" width={934} height={746} property=""/>

                <Link href={`/signup`} className="absolute top-10 left-10  hover:bg-purple-text-head hover:rounded-full">
                    <Image className="object-cover"
                           src="/icons/back-icon.svg" alt="icon" width={42} height={42} property=""/>
                </Link>

            </div>
            {/*forgot password component*/}
            <VerifyRegisterComponent/>
        </div>

    )
}
export default VerifyRegisterPage