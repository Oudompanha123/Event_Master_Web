'use client';

import {useState} from "react";
import {useForm} from "react-hook-form";

const SignupComponent = () => {

    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const [isAdminSelected, setIsAdminSelected] = useState(false);
    const [isLocked, setIsLocked] = useState(true);
    const [isKeyLock, setIsKeyLocked] = useState(true);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [organizationCode, setOrganizationCode] = useState("");

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

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <div className="mx-[42%] mt-48 w-[45%] bg-white rounded-[40px] shadow-md absolute">
                <div className="flex justify-start p-6 pt-12 mx-8 focus:outline-none">
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium primary-text block mb-2">
                                    Full Name <span className="text-red-600 text-sm">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                    placeholder="Enter your full name"
                                    {...register("name", {
                                        required: "Full Name is required"
                                    })}
                                />
                                {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email" className="text-sm font-medium primary-text block mb-2">
                                    Email <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
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
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                    placeholder="Enter your password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password requires at least 8 characters"
                                        }
                                    })}
                                />
                                <div
                                    className="flex justify-end -mt-[34px] mr-5 cursor-pointer mb-3.5"
                                    onClick={handleLockClick}
                                >
                                    <img
                                        src={isLocked ? "/lock-slash.svg" : "/unlock.svg"}
                                        alt={isLocked ? "lock icon" : "unlock icon"}
                                    />
                                </div>
                                {errors.password &&
                                    <span className="text-red-600 text-sm">{errors.password.message}</span>}
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="confirm-password"
                                       className="text-sm font-medium primary-text block mb-2">
                                    Confirm Password <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                    placeholder="Enter your confirm password"
                                    {...register("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: value => value === watch('password') || "Passwords do not match"
                                    })}
                                />
                                <div
                                    className="flex justify-end -mt-[34px] mr-5 cursor-pointer mb-3.5"
                                    onClick={handleKeyLockClick}
                                >
                                    <img
                                        src={isKeyLock ? "/lock-slash.svg" : "/unlock.svg"}
                                        alt={isKeyLock ? "lock icon" : "unlock icon"}
                                    />
                                </div>
                                {errors.confirmPassword &&
                                    <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>}
                            </div>

                            <div className="col-span-6 -mt-6">
                                <div
                                    className={`col-span-6 pt-5 transition-all duration-500 ${isAdminSelected ? 'opacity-100' : 'opacity-50 hidden'}`}>
                                    <label htmlFor="phone-number"
                                           className="text-sm font-medium primary-text block mb-2">
                                        Phone Number <span className="text-red-600 text-sm">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="phone-number"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                        placeholder="Enter your phone number"
                                        {...register("phoneNumber", {
                                            required: isAdminSelected ? "Phone Number is required" : true
                                        })}
                                    />
                                    {errors.phoneNumber &&
                                        <span className="text-red-600 ">{errors.phoneNumber.message}</span>}
                                </div>

                                {!isAdminSelected && (
                                    <div
                                        className="col-span-6 pt-5 flex space-x-4 transition-transform duration-1000 transform">
                                        <div className="flex-1">
                                            <label htmlFor="user-phone-number"
                                                   className="text-sm font-medium primary-text block mb-2">
                                                Phone Number <span className="text-red-600 text-sm">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="user-phone-number"
                                                value={userPhoneNumber}
                                                onChange={(e) => setUserPhoneNumber(e.target.value)}
                                                className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                                placeholder="Enter your phone number"
                                                {...register("userPhoneNumber", {
                                                    required: "Phone Number is required"
                                                })}
                                            />
                                            {errors.userPhoneNumber &&
                                                <span
                                                    className="text-red-600 text-sm">{errors.userPhoneNumber.message}</span>}
                                        </div>
                                        <div className="flex-1">
                                            <label htmlFor="organization-code"
                                                   className="text-sm font-medium primary-text block mb-2">
                                                Organization Code <span className="text-red-600">*</span>
                                            </label>
                                            <input
                                                type="password"
                                                id="organization-code"
                                                value={organizationCode}
                                                onChange={(e) => setOrganizationCode(e.target.value)}
                                                className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                                                placeholder="Enter your organization code"
                                                {...register("organizationCode", {
                                                    required: "Organization Code is required"
                                                })}
                                            />
                                            {errors.organizationCode &&
                                                <span
                                                    className="text-red-600 text-sm">{errors.organizationCode.message}</span>}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-center p-6 pb-16">
                            <button
                                type="submit"
                                id="sign-up"
                                className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
