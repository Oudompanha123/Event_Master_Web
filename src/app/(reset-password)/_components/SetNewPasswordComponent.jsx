'use client'

import {useForm} from "react-hook-form";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import { changePasswordAction } from "@/actions/auth/forgetPasswordAction";

const SetNewPasswordComponent = ({email, otp}) => {
    const initialData = {
        password: "",
        confirmPassword: "",
    };

    const {
        register, handleSubmit,
        formState: {errors, isValid},
        watch,
        reset
    } = useForm({
        mode: 'onChange', // Validate on change
        defaultValues: initialData
    });

    const [isLocked, setIsLocked] = useState(true);
    const [isKeyLocked, setIsKeyLocked] = useState(true);
    const [isLoading, setIsloading] = useState(false);

    const handleLockClick = () => setIsLocked(prevState => !prevState);
    const handleKeyLockClick = () => setIsKeyLocked(prevState => !prevState);

    const router = useRouter();

    const onSubmit = async (data) => {
        setIsloading(true);
        await changePasswordAction(email, otp, data);
        setIsloading(false);
        router.push('/verify');
    };

    return (
        <div className="absolute flex justify-center sm:pt-[460px] md:pl-[30%] lg:pl-[50%] lg:pt-[360px] w-full md:w-[70%] lg:w-[39%] h-[100%]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:mt-[-85px] lg:text-xl mt-5">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Set New password
                    </h2>
                    {/* <p className="flex justify-center greyUi mt-4">Please enter your new password</p> */}
                </div>

                <div className="lg:mt-[-2px] col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={isLocked ? "password" : "text"}
                            id="password"
                            className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 ${
                                errors.password ? "border-red-700 focus:border-red-600" : "border-gray-300"
                            }`}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^[A-Za-z0-9]*$/,
                                    message: "Password must contain only numbers and characters"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password requires at least 8 characters"
                                }
                            })}
                        />
                        <div className="absolute top-4 right-3 cursor-pointer" onClick={handleLockClick}>
                            <Image
                                src={isLocked ? "/icons/lock-slash.svg" : "/icons/unlock.svg"}
                                width={20}
                                height={20}
                                alt={isLocked ? "lock icon" : "unlock icon"}
                            />
                        </div>
                    </div>
                    {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                </div>

                <div className="col-span-6 sm:col-span-3 mt-6">
                    <label htmlFor="confirm-password" className="text-sm font-medium primary-text block mb-2">
                        Confirm Password
                    </label>

                    <div className="relative">
                        <input
                            type={isKeyLocked ? "password" : "text"}
                            id="confirm-password"
                            className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 ${
                                errors.confirmPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"
                            }`}
                            placeholder="Enter your confirm password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: value => value === watch('password') || "Passwords do not match"
                            })}
                        />
                        <div className="absolute top-4 right-3 cursor-pointer" onClick={handleKeyLockClick}>
                            <Image
                                src={isKeyLocked ? "/icons/lock-slash.svg" : "/icons/unlock.svg"}
                                width={20}
                                height={20}
                                alt={isKeyLocked ? "lock icon" : "unlock icon"}
                            />
                        </div>
                    </div>
                    {errors.confirmPassword &&
                        <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>}
                </div>

                <div className="flex justify-center mt-10">
                    <button
                        id="continue"
                        className={`bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 shadow-md shadow-violet-400 ${
                            !isValid ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-500"
                        }`}
                        disabled={!isValid}
                    >
                        {isLoading ? <div className='loader'></div> : <p>Continue</p> } 
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SetNewPasswordComponent;
