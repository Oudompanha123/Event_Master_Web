'use client';

import Link from "next/link";

const LoginComponent = () => {
    return (
        <div className="absolute top-44 left-[15%] flex flex-col justify-center sm:px-6 lg:px-8 px-6">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 w-[110%] px-4 shadow sm:rounded-[40px] sm:px-12">
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
                                   className="shadow-sm bg-white border greyUi primary-text sm:text-sm rounded-2xl block w-full p-3.5"
                                   placeholder="Enter you email" required=""/>
                        </div>

                        <div className="col-span-6 sm:col-span-3 mt-6">
                            <label htmlFor="password"
                                   className="text-sm font-medium primary-text block mb-2">Password <span
                                className="text-red-600">*</span></label>
                            <input type="text" name="brand" id="brand"
                                   className="shadow-sm bg-white border greyUi primary-text sm:text-sm rounded-2xl block w-full p-3.5 "
                                   placeholder="Enter yor password " required=""/>
                            <div className="flex justify-end -mt-[34px] mr-5 ">
                                    <img src="/lock-slash.svg" alt="icon"/>
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
                                    className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-greyUi shadow-md shadow-violet-400">Login
                            </button>
                        </div>

                        <p className="flex justify-center primary-text mb-5 mt-5">Don't have an account?
                            <Link href={`/signup`} className="text-purple-text font-bold"> Sign Up</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginComponent;