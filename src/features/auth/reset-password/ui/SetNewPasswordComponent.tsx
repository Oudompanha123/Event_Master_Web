'use client'

import {useForm} from "react-hook-form";
import Image from "next/image";
import {useState} from "react";
import {useRouter} from "next/navigation";
import { changePasswordAction } from "@/features/auth/reset-password/api/forgetPasswordAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// API errors come back as ProblemDetail: field errors in `Errors`, otherwise `detail`.
function apiErrorMessage(res) {
    if (res?.Errors && typeof res.Errors === "object") return Object.values(res.Errors).join(", ");
    return res?.detail || res?.message || "Something went wrong. Please try again.";
}

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
        try {
            const response = await changePasswordAction(email, otp, data);
            if (response?.status === 'OK') {
                router.push('/verify');
                return;
            }
            toast.error(apiErrorMessage(response), { position: "top-center" });
        } catch (e) {
            toast.error("Cannot reach the server. Please try again.", { position: "top-center" });
        }
        setIsloading(false);
    };

    return (
        <div className="absolute flex justify-center sm:pt-[400px] md:pl-[30%] lg:pl-[50%] lg:pt-[380px] 2xl:pt-[370px] w-full md:w-[70%] lg:w-[39%] h-[100%]">
            <ToastContainer autoClose={2000}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-[210px] sm:mt-[20px] lg:mt-[-75px] lg:text-xl flex justify-center">
                    <h2 className="mt-6 sm:mt-[1px] text-center md:text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Set New password
                    </h2>
                    {/* <p className="flex justify-center greyUi mt-4">Please enter your new password</p> */}
                </div>

                <div className="pr-0 sm:pr-9">
                    <div className="sm:mt-[30px] lg:mt-[-2px] 2xl:mt-[50px] col-span-6 sm:col-span-3 mt-[5px] ml-0 sm:ml-10 mx-auto"> 
                        <label htmlFor="password" className="text-sm font-medium primary-text block mb-2 sm:mb-5 lg:mb-2">
                            Password
                        </label>
                        <div className="relative w-[min(330px,calc(100vw-4rem))] sm:w-[500px]">
                            <input
                                type={isLocked ? "password" : "text"}
                                id="password"
                                className={` w-full shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block p-3.5 ${
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

                    <div className="col-span-6 sm:col-span-3 mt-3 sm:mt-8 lg:mt-6 ml-0 sm:ml-10">
                        <label htmlFor="confirm-password" className="text-sm font-medium primary-text block mb-2 sm:mb-5 lg:mb-2">
                            Confirm Password
                        </label>

                        <div className="relative w-[min(330px,calc(100vw-4rem))] sm:w-[500px]">
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
                </div>
                

                <div className="flex justify-center mt-6 sm:mt-14 lg:mt-8 px-9">
                    <button
                        id="continue"
                        className={`flex justify-center w-full bg-purple-text text-white font-medium text-sm rounded-3xl py-3.5 shadow-md shadow-violet-400 ${
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
