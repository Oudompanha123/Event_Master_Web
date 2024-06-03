'use client';

import {useState} from "react";
import {useForm} from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

const SignupComponent = () => {

    const initialData = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        organizationCode: ""
    };

    const [isAdminSelected, setIsAdminSelected] = useState(false);
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

    const handleAdminClick = () => {
        setIsAdminSelected(true);
        reset(initialData); // Reset form fields to initialData
    };

    const handleUserClick = () => {
        setIsAdminSelected(false);
        reset(initialData); // Reset form fields to initialData
    };

    const handleLockClick = () => setIsLocked(prevState => !prevState);
    const handleKeyLockClick = () => setIsKeyLocked(prevState => !prevState);

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="mx-[42%] mt-48 w-[45%] bg-white rounded-[40px] shadow-md absolute">
            <div className="flex justify-start p-6 pt-12 mx-8 focus:outline-none">
                <button
                    type="button"
                    id="admin-button"
                    className={`font-medium text-sm rounded-[100px] px-12 py-3.5 -mr-10 ${isAdminSelected ? 'bg-purple-text text-white z-20' : 'shadow-sm bg-white border border-gray-300 primary-text z-10'}`}
                    onClick={handleAdminClick}
                >
                    ADMIN
                </button>
                <button
                    type="button"
                    id="user-button"
                    className={`font-medium text-sm rounded-[100px] px-12 py-3.5 ${!isAdminSelected ? 'bg-purple-text text-white z-20' : 'shadow-sm bg-white border border-gray-300 primary-text z-10'}`}
                    onClick={handleUserClick}
                >
                    USER
                </button>
            </div>

            <div className="p-6 space-y-6 mx-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="name" className="text-sm font-medium primary-text block mb-2">
                                Full Name <span className="text-red-600 text-sm">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                className={`${errors.name ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: "Full Name is required"
                                })}
                            />
                            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="text-sm font-medium primary-text block mb-2">
                                Email <span className="text-red-600 text-sm">*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                className={`${errors.email ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email address"
                                    }
                                })}
                            />
                            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                Password <span className="text-red-600">*</span>
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

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="confirm-password" className="text-sm font-medium primary-text block mb-2">
                                Confirm Password <span className="text-red-600">*</span>
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

                        {isAdminSelected && (
                            <div className="col-span-6">
                                <label htmlFor="phone-number" className="text-sm font-medium primary-text block mb-2">
                                    Phone Number <span className="text-red-600 text-sm">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="phone-number"
                                    className={`${errors.phoneNumber ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                    placeholder="Enter your phone number"
                                    {...register("phoneNumber", {
                                        required: "Phone Number is required",
                                        pattern: {
                                            value: /^0\d{8,}$/,
                                            message: "phone number must be number, start with 0, more than 8 digits"
                                        }
                                        // validate: value => {
                                        //     const numberPattern = /^-?\d*\.?\d+$/;
                                        //     const pattern2 =  /[a-z]/;
                                        //     if(numberPattern.test(value)){
                                        //         return "Please Input number"
                                        //     }
                                        //     if(pattern2.test(value)){
                                        //         return  "Pattern ti 2 jorb validate"
                                        //     }
                                        //     return true;
                                        // }
                                    })}
                                />

                                {errors.phoneNumber &&
                                    <span className="text-red-600 text-sm">{errors.phoneNumber.message}</span>}
                            </div>
                        )}

                        {!isAdminSelected && (
                            <div className="col-span-6 flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="phone-number"
                                           className="text-sm font-medium primary-text block mb-2">
                                        Phone Number <span className="text-red-600 text-sm">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="phone-number"
                                        className={`${errors.phoneNumber ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                        placeholder="Enter your phone number"
                                        {...register("phoneNumber", {
                                            required: "Phone Number is required"
                                        })}
                                    />
                                    {errors.phoneNumber &&
                                        <span className="text-red-600 text-sm">{errors.phoneNumber.message}</span>}
                                </div>

                                <div className="flex-1">
                                    <label htmlFor="organization-code"
                                           className="text-sm font-medium primary-text block mb-2">
                                        Organization Code <span className="text-red-600 text-sm">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        id="organization-code"
                                        className={`${errors.organizationCode ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                        placeholder="Enter your organization code"
                                        {...register("organizationCode", {
                                            required: "Organization Code is required"
                                        })}
                                    />
                                    {errors.organizationCode &&
                                        <span className="text-red-600 text-sm">{errors.organizationCode.message}</span>}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center p-6 pb-16">
                        <Link href={`/verify-register`}>
                            <button
                                type="submit"
                                id="sign-up"
                                className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400">Sign
                                Up
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupComponent;
