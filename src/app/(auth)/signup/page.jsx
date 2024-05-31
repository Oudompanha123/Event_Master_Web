import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import SignupComponent from "@/app/(auth)/_components/SignupComponent";

const SignUpPage = () => {
    return (
        <div className="w-full relative h-screen">
            <Image className="absolute object-cover -mt-[70px] bg-cover"
                   src="/signup.svg" alt="image" width={1920} height={100} property=""/>
            <Link href="" className="absolute top-5 left-8 flex text-white text-2xl gap-1 ">
                <MdKeyboardArrowLeft size={35} className="bg-red-40 flex "/>
                Back
            </Link>
            <Image className="absolute left-[200px] top-[62%] transform translate-y-[-50%]"
                   src="/signup-amico.svg" alt="img" width={472} height={300}/>
            <div className="absolute top-32 left-36 text-white text-2xl">
                <h1 className="text-[62px] font-medium">Register New Account</h1>
                <p className="pt-10 text-md">Create a new account to access our application.</p>
            </div>

            {/*Sign Up Component*/}
            <SignupComponent/>

        </div>
    )
}


export default SignUpPage