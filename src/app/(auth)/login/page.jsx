import {PiLockKey} from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";

const Page = () => {
    return (
        <>
            <div className="h-screen w-full relative">
                <Image className="absolute object-cover -mt-[15vh]"
                       src="/images/rectangle-white.png" alt="Photo" width={1920} height={300}/>

                <Image className="absolute object-cover -mt-[15vh]"
                       src="/images/rectangle.png" alt="img" width={1920} height={300}/>

                <Image className="absolute right-[180px] top-[60%] transform translate-y-[-50%]"
                       src="/images/login-amico.png" alt="img" width={472} height={300}/>
                <Link href="" className="bg-none absolute top-5 left-8 text-white text-2xl flex  gap-1 ">
                    <MdKeyboardArrowLeft size={35} className="bg-red-40 flex "/>
                    Back
                </Link>
                <Image className="absolute right-0 top-[-80px] object-contain"
                       src="/images/start.png" alt="img" width={600} height={300}/>
                <Image className="absolute right-[160px] top-[83px] object-contain"
                       src="/images/star.png" alt="img" width={260} height={200}
                />
                <div className="absolute top-24 right-44 w-[25%] text-white text-2xl">
                    <h1 className="text-[62px] font-medium">Welcome!</h1>
                    <p className="pt-10 text-md line-clamp-2">CLog in to manage your events with ease and
                        efficiency.</p>
                </div>

                <div className="absolute min-h-screen left-[15%] flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 w-[110%] px-4 shadow sm:rounded-[40px] sm:px-10">
                            <form>
                                <div className="mb-20 -mt-5">
                                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold greyUi flex justify-center">
                                        Login
                                    </h2>
                                    <p className="mt-5 flex justify-center greyUi">Welcome back! Please enter your
                                        information</p>
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email"
                                           className="text-sm font-medium primary-text block mb-2">Email <span
                                        className="text-red-600">*</span></label>
                                    <input type="text" name="category" id="category"
                                           className="shadow-sm bg-white border greyUi primary-text sm:text-sm rounded-xl block w-full p-2.5"
                                           placeholder="Enter you email" required=""/>
                                </div>

                                <div className="col-span-6 sm:col-span-3 mt-5 mt-6">
                                    <label htmlFor="password"
                                           className="text-sm font-medium primary-text block mb-2">Password <span
                                        className="text-red-600">*</span></label>
                                    <input type="text" name="brand" id="brand"
                                           className="shadow-sm bg-white border greyUi primary-text sm:text-sm rounded-xl block w-full p-2.5 "
                                           placeholder="Enter yor password " required=""/>
                                    <div className="flex justify-end -mt-7 mr-5 ">
                                        <p className="rounded-md primary-text"><PiLockKey/></p>
                                    </div>
                                </div>

                                <div className="mt-6 flex items-center justify-end">
                                    <div className="text-sm leading-5">
                                        <a href="#"
                                           className="font-medium purple-text hover:text-greyUi">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                <div className="flex justify-center p-6 mt-5">
                                    <button type="sign Up" id="sign-up"
                                            className="bg-purple-text text-white font-medium text-sm rounded-3xl px-40 py-2.5 hover:bg-greyUi shadow-md shadow-violet-400">Login
                                    </button>
                                </div>

                                <p className="flex justify-center primary-text mb-5 mt-5">Don't have an account?
                                    <span className="text-purple-text font-bold"> Sign Up</span></p>
                            </form>

                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}


export default Page