import Image from "next/image";
import LoginComponent from "@/app/(auth)/_components/LoginComponent";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="w-full relative h-screen">
            <Image className="absolute object-cover -mt-[70px] bg-cover"
                   src="/login.svg" alt="image" width={1920} height={100} property=""/>

            <Link href={`/`} className="absolute top-5 left-8 flex text-white text-xl gap-1">
                <MdKeyboardArrowLeft size={30} className="bg-red-40 flex"/>
                Back
            </Link>

            <Image className="absolute right-[300px] top-[60%] transform translate-y-[-50%] w-[550px]"
                   src="/login-amico.svg" alt="img" width={472} height={300}/>
            <div className="absolute top-24 right-56 w-[30%] text-white text-2xl">
                <h1 className="text-[58px] font-medium">Welcome!</h1>
                <p className="pt-10 text-xl line-clamp-2">Log in to manage your events with ease and
                    efficiency.</p>
            </div>

            {/*Login Component*/}
            <LoginComponent/>

        </div>
    )
}


export default LoginPage