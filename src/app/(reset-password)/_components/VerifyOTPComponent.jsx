'use client'

import {useForm} from "react-hook-form";
import Link from "next/link";

const VerifyOTPComponent = () => {

    const initialData = {
        email: "",
    };

    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: initialData
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="absolute mx-[29%] mt-[18%] left-[9.5%]">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Enter 4 Digits Code
                    </h2>
                    <p className="flex justify-center greyUi mt-6">Enter the 4 digits code that received your email.</p>
                </div>

                <div className="mt-12">
                    <label htmlFor="email"
                           className="text-sm font-medium primary-text block mb-2">Email
                    </label>
                    <div>
                        <input type="text"
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
                    </div>
                    {errors.email &&
                        <span className="text-red-600 text-sm">{errors.email.message}</span>}
                </div>

                <Link href={`/set-new-password`}>
                    <div className="flex justify-center mt-10">
                        <button type="sign Up" id="sign-up"
                                className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-violet-500 shadow-md shadow-violet-400">
                            Continue
                        </button>
                    </div>
                </Link>
                <Link href={`/forgot`}>
                    <p className="flex justify-end text-blueUi mt-5"><u>Resend Code</u>
                    </p>
                </Link>
            </form>


        </div>
    )
}
export default VerifyOTPComponent