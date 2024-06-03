'use client';

import Link from "next/link";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Image from "next/image";

const LoginComponent = callback => {

    const initialData = {
        userEmail: "",
        userPassword: ""
    };

    const [isLocked, setIsLocked] = useState(true);
    const handleLockClick = () => setIsLocked(prevState => !prevState);

    const {
        register, handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm({
        defaultValues: initialData
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="absolute top-44 left-[15%] flex flex-col justify-center sm:px-6 lg:px-8 px-6">
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 w-[110%] px-4 shadow sm:rounded-[40px] sm:px-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-20 -mt-5">
                            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold greyUi flex justify-center">
                                Login
                            </h2>
                            <p className="mt-5 flex justify-center greyUi">Welcome back! Please enter your
                                information</p>
                        </div>

                        <div className="col-span-6 sm:col-span-3 -mt-6">
                            <label htmlFor="userEmail" className="text-sm font-medium primary-text block mb-2">
                                Email <span className="text-red-600 text-sm">*</span>
                            </label>
                            <div>
                                <input
                                    type="text"
                                    id="userEmail"
                                    className={`${errors.userEmail ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                    placeholder="Enter your email"
                                    {...register("userEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Enter a valid email address"
                                        }
                                    })}
                                />
                            </div>
                            {errors.userEmail &&
                                <span className="text-red-600 text-sm">{errors.userEmail.message}</span>}
                        </div>

                        <div className="col-span-6 sm:col-span-3 mt-6">
                            <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                Password <span className="text-red-600">*</span>
                            </label>
                            <div className={"relative"}>
                                <input
                                    type={isLocked ? "password" : "text"}
                                    id="password"
                                    className={`${errors.userPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                    placeholder="Enter your password"
                                    {...register("userPassword", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password requires at least 8 characters"
                                        }
                                    })}
                                />
                                <div className={"absolute top-4 right-3 cursor-pointer"} onClick={handleLockClick}>
                                    <Image src={`${isLocked ? "/icons/lock-slash.svg" : "/icons/unlock.svg"}`} width={20}
                                           height={20}
                                           alt={isLocked ? "lock icon" : "unlock icon"}/>
                                </div>
                            </div>
                            {errors.userPassword &&
                                <span className="text-red-600 text-sm">{errors.userPassword.message}</span>}
                        </div>

                        <div className="mt-3 flex items-center justify-end">
                            <div className="text-sm leading-5">
                                <Link href={`/forgot-password`}
                                   className="font-medium purple-text hover:text-greyUi">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        <div className="flex justify-center p-6 mt-5">
                            <button type="submit" id="login"
                                    className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400">
                                Login
                            </button>
                        </div>

                        <p className="flex justify-center primary-text mb-5 mt-2">Don't have an account?
                            <Link href={`/signup`} className="text-purple-text font-bold"> Sign Up</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default LoginComponent;
