'use client';

import Link from "next/link";
import {useState} from "react";

const SignupComponent = () => {

    const [isAdminSelected, setIsAdminSelected] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const [isKeyLock, setIsKeyLocked] = useState(true);

    const handleAdminClick = () => {
        setIsAdminSelected(true);
    };

    const handleUserClick = () => {
        setIsAdminSelected(false);
    };

    const handleLockClick = () => {
        setIsLocked(prevState => !prevState);
    };

    const handleKeyLockClick = () => {
        setIsKeyLocked(prevState => !prevState);
    }

    return (
        <div>
            <div className="mx-[42%] mt-48 w-[45%] bg-white rounded-[40px] shadow-md absolute">
                <div className="flex justify-start p-6 pt-12 mx-8">
                    <button
                        type="button"
                        id="admin-button"
                        className={`font-medium text-sm rounded-[100px] px-12 py-3.5 -mr-10
                        ${isAdminSelected ? 'bg-purple-text text-white z-20' : 'shadow-sm bg-white border border-gray-300 primary-text z-10'}`}
                        onClick={handleAdminClick}
                    >
                        ADMIN
                    </button>
                    <button
                        type="button"
                        id="user-button"
                        className={`font-medium text-sm rounded-[100px] px-12 py-3.5 ${
                            !isAdminSelected ? 'bg-purple-text text-white z-20' : 'shadow-sm bg-white border border-gray-300 primary-text z-10'
                        }`}
                        onClick={handleUserClick}
                    >
                        USER
                    </button>
                </div>

                <div className="p-6 space-y-6 mx-8">
                    <form action="#">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium primary-text block mb-2 ">Full
                                    Name <span className="text-red-600">*</span></label>
                                <input type="text" name="product-name" id="product-name"
                                       className=" shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                       placeholder="Enter your full name" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email"
                                       className="text-sm font-medium primary-text block mb-2">Email <span
                                    className="text-red-600">*</span></label>
                                <input type="text" name="category" id="category"
                                       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                       placeholder="Enter your email" required=""/>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                    Password <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                    placeholder="Enter your password"
                                    required=""
                                />
                                <div
                                    className="flex justify-end -mt-[34px] mr-5 cursor-pointer"
                                    onClick={handleLockClick}
                                >
                                    <img
                                        src={isLocked ? "/lock-slash.svg" : "/unlock.svg"}
                                        alt={isLocked ? "lock icon" : "unlock icon"}
                                    />
                                </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="confirm-password"
                                       className="text-sm font-medium primary-text block mb-2">
                                    Confirm Password <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                    placeholder="Enter your confirm password"
                                    required=""
                                />
                                <div
                                    className="flex justify-end -mt-[34px] mr-5 cursor-pointer"
                                    onClick={handleKeyLockClick}
                                >
                                    <img
                                        src={isKeyLock ? "/lock-slash.svg" : "/unlock.svg"}
                                        alt={isKeyLock ? "lock icon" : "unlock icon"}
                                    />
                                </div>
                            </div>

                            <div
                                className={`col-span-6 pt-5 transition-all duration-500 ${isAdminSelected ? 'opacity-100' : 'opacity-100'}`}>
                                <label htmlFor="phone-number"
                                       className="text-sm font-medium primary-text block mb-2">Phone
                                    Number <span className="text-red-600">*</span></label>
                                <input type="text" name="phone-number" id="phone-number"
                                       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                       placeholder="Enter your phone number" required=""/>
                            </div>

                            {!isAdminSelected && (
                                <div className="col-span-6 pt-5 transition-transform duration-500 transform">
                                    {/*<label htmlFor="organization-code"*/}
                                    {/*       className="text-sm font-medium primary-text block mb-2">*/}
                                    {/*    Organization Code*/}
                                    {/*    <span className="text-red-600">*</span></label>*/}
                                    {/*<input type="password" name="organization-code" id="organization-code"*/}
                                    {/*       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"*/}
                                    {/*       placeholder="Enter your organization code" required=""*/}
                                    {/*/>*/}
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                <div className="flex justify-center p-6 pb-16">
                    <button type="sign Up" id="sign-up"
                            className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400">
                        <Link href={`/login`}>Sign Up</Link>
                    </button>
                </div>

            </div>

        </div>
    )

}
export default SignupComponent;
