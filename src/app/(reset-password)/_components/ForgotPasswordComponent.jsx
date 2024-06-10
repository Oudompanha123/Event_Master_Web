'use client'
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

const ForgotPasswordComponent = () => {

    const initialData = {
        email: "",
    };

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({
        defaultValues: initialData,
        mode: "onChange"
    });

    const router = useRouter();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="absolute lg:mx-[29%] lg:mt-[13%] lg:left-[9%] lg:block md:top-28 md:left-14 md:block sm:hidden">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:mt-5 lg:block">
                    <h2 className="lg:mt-6 lg:text-center lg:text-3xl leading-9 font-extrabold Stext-purple-text-head flex justify-center md:text-3xl ">
                        Forgot Password?
                    </h2>
                    <p className="flex justify-center greyUi lg:mt-3 md:badge-md md:mt-4 md:mr-1.5">Please enter your email to reset password</p>
                </div>

                <div className="lg:mt-12">
                    <label htmlFor="email" className="text-sm font-medium primary-text block mb-2">Email</label>
                    <div>
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
                    </div>
                    {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
                </div>

                <div className="lg:flex lg:justify-center lg:mt-10">
                    <button
                        onClick={() => router.push('/verify-otp')}
                        type="button"
                        id="continue"
                        className={`bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 shadow-md shadow-violet-400 ${!isValid ? "opacity-50 cursor-not-allowed" : "hover:bg-violet-500"}`}
                        disabled={!isValid}
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPasswordComponent;
