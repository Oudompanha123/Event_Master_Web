'use client'

import {useForm} from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const SetNewPasswordComponent = () => {

    const initialData = {
        password: "",
        confirmPassword: "",
    };

    const [isLocked, setIsLocked] = useState(true);
    const [isKeyLocked, setIsKeyLocked] = useState(true);

    const {
        register, handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm({
        defaultValues: initialData
    });

    const handleLockClick = () => setIsLocked(prevState => !prevState);
    const handleKeyLockClick = () => setIsKeyLocked(prevState => !prevState);

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="absolute mx-[29%] mt-[18%] left-[9.5%]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Set New password
                    </h2>
                    <p className="flex justify-center greyUi mt-4">Please enter your new password</p>
                </div>

                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                        Password
                    </label>
                    <div className={"relative"}>
                        <input
                            type={isLocked ? "password" : "text"}
                            id="password"
                            className={`${errors.password ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password requires at least 8 characters"
                                }
                            })}
                        />
                        <div className={"absolute top-4 right-3 cursor-pointer"} onClick={handleLockClick}>
                            <Image src={`${isLocked ? "/lock-slash.svg" : "/unlock.svg"}`} width={20}
                                   height={20}
                                   alt={isLocked ? "lock icon" : "unlock icon"}/>
                        </div>
                    </div>
                    {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                </div>

                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="confirm-password" className="text-sm font-medium primary-text block mb-2">
                        Confirm Password
                    </label>
                    <div className={"relative"}>
                        <input
                            type={isKeyLocked ? "password" : "text"}
                            id="confirm-password"
                            className={`${errors.email ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                            placeholder="Enter your confirm password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: value => value === watch('password') || "Passwords do not match"
                            })}
                        />
                        <div className={"absolute top-4 right-3 cursor-pointer"} onClick={handleKeyLockClick}>
                            <Image src={`${isKeyLocked ? "/lock-slash.svg" : "/unlock.svg"}`} width={20}
                                   height={20}
                                   alt={isKeyLocked ? "lock icon" : "unlock icon"}/>
                        </div>
                    </div>
                    {errors.confirmPassword &&
                        <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>}
                </div>


                <div className="flex justify-center mt-10">
                    <Link href={`/verify`}>
                        <button type="sign Up" id="sign-up"
                                className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400">
                            Continue
                        </button>
                    </Link>
                </div>
            </form>


        </div>
    )
}
export default SetNewPasswordComponent