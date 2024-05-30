import Image from "next/image";
import {PiLockKey} from "react-icons/pi";
import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import {red} from "next/dist/lib/picocolors";

const Page = () => {
    return (
        <>
            <div className="h-screen w-full relative">
                <Image className="absolute object-cover -mt-[15vh]"
                       src="/images/rectangle-white.png" alt="Photo" width={1920} height={300}/>

                <Image className="absolute object-cover -mt-[15vh]"
                       src="/images/rectangle.png" alt="img" width={1920} height={300}/>

                <Image className="absolute left-[127px] top-[50%] transform translate-y-[-50%]"
                       src="/images/img.png" alt="img" width={472} height={300}/>
                <Link href="" className="bg-none absolute top-5 left-8 text-white text-2xl flex  gap-1 ">
                    <MdKeyboardArrowLeft size={35} className="bg-red-40 flex "/>
                    Back
                </Link>
                <Image className="absolute left-[360px] top-[10px] object-contain"
                       src="/images/start.png" alt="img" width={600} height={300}/>
                <Image className="absolute left-[540px] top-[175px] object-contain"
                       src="/images/star.png" alt="img" width={260} height={200}
                />
                <div className="absolute top-24 left-36 text-white text-2xl">
                    <h1 className="text-[62px] font-medium">Register New Account</h1>
                    <p className="pt-10 text-md">Create a new account to access our application.</p>
                </div>

                <div className="mx-[35%] mt-56 w-[55%] bg-white rounded-[40px] shadow-md absolute">
                    <div className="flex justify-start p-6 pt-12 mx-8">
                        <button type="sign Up" id="sign-up"
                                className="shadow-sm bg-white border border-gray-300 primary-text font-medium text-sm rounded-3xl px-10 py-3.5">
                            ADMIN
                        </button>
                        <button type="sign Up" id="sign-up"
                                className="bg-purple-text text-white font-medium text-sm rounded-3xl px-10 py-3.5 ml-[-35px]">
                            USER
                        </button>
                    </div>

                    <div className="p-6 space-y-6 mx-8">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="name" className="text-sm font-medium primary-text block mb-2">Full
                                        Name <span className="text-red-600">*</span></label>
                                    <input type="text" name="product-name" id="product-name"
                                           className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                           placeholder="Enter your full name" required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="email"
                                           className="text-sm font-medium primary-text block mb-2">Email <span
                                        className="text-red-600">*</span></label>
                                    <input type="text" name="category" id="category"
                                           className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                           placeholder="Enter you email" required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="password"
                                           className="text-sm font-medium primary-text block mb-2">Password <span
                                        className="text-red-600">*</span></label>
                                    <input type="text" name="brand" id="brand"
                                           className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5 "
                                           placeholder="Enter yor password " required=""/>
                                    <div className="flex justify-end -mt-7 mr-5 ">
                                        <p className="rounded-md primary-text"><PiLockKey/></p>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="confirm-password"
                                           className="text-sm font-medium primary-text block mb-2">Confirm
                                        Password <span
                                            className="text-red-600">*</span></label>
                                    <input type="password" name="price" id="price"
                                           className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                           placeholder="Enter your confirm password" required=""/>
                                    <div className="flex justify-end -mt-7 mr-5">
                                        <p className="rounded-sm primary-text"><PiLockKey/></p>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-3 pt-5">
                                    <label htmlFor="phone-number"
                                           className="text-sm font-medium primary-text block mb-2">Phone
                                        Number <span
                                            className="text-red-600">*</span></label>
                                    <input type="text" name="brand" id="brand"
                                           className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                           placeholder="Enter yor phone number" required=""/>
                                </div>
                                <div className="col-span-6 sm:col-span-3 pt-5">
                                    <label htmlFor="organization-code"
                                           className="text-sm font-medium primary-text block mb-2">Organization
                                        Code <span
                                            className="text-red-600">*</span></label>
                                    <input type="password" name="price" id="price"
                                           className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                           placeholder="Enter your organizzation code" required=""/>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="flex justify-center p-6 pb-16">
                        <button type="sign Up" id="sign-up"
                                className="bg-purple-text text-white font-medium text-sm rounded-3xl px-32 py-3.5 hover:bg-greyUi">Sign
                            Up
                        </button>
                    </div>
                </div>
            </div>
        </>


    )
}


export default Page