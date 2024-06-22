'use client'

import { useEffect, useState } from "react";
import { RedirectBackComponent } from "../../_componenets/RedirectButtonComponent"

import { useForm } from "react-hook-form"
import { getFormAction } from "@/actions/landingAction";
import { InputField } from "@/app/(dashboard)/_components/InputField";
import { Boolean } from "@/app/(dashboard)/_components/Boolean";

const Page = ({ params: { id } }) => {
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [registerForm, setRegisterForm] = useState();

    const gen = watch("gender");

    const onSubmit = (data) => {
        console.log(data);
    };

    const getData = async (id) => {
        const res = await getFormAction(id);
        console.log(res, 'checking form')
        setRegisterForm(res?.payload?.data?.form)
    }

    useEffect(() => {
        getData(id)
    }, [])

    console.log('checking form data', registerForm)
    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <div className="p-6 rounded-3xl border-2 border-slate-100 bg-white drop-shadow-sm">
                <h2 className="font-bold text-2xl mb-8">Register Form</h2>
                <form action="" className="space-y-4 lg:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* first row  */}
                    {/* <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Full Name</label>
                            <input
                                type="text"
                                id="fullanme"
                                name="fullname"
                                className={`${errors.fullname ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your full name"
                                {...register("fullname", {
                                    required: "Full name is required",
                                })}
                            />
                            {errors.fullname && <span className="text-red-600 text-sm">{errors.fullname.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Gender</label>
                            <select className={`${errors.gender && "border-red-500"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} name="gender" id="" {...register("gender", {
                                required: "gender is required", validate: (v) => {
                                    if (v === "0") {
                                        return "Please select your gender";
                                    }
                                }
                            })}>
                                <option value="0">Enter Your Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            {errors.gender && <span className="text-red-600 text-sm">{errors.gender.message}</span>}
                        </div>
                    </div> */}
                    {/* second row  */}
                    {/* <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Phone Number</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className={`${errors.fullname ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your phone number"
                                {...register("phone", {
                                    required: "Phone number is required",
                                })}
                            />
                            {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
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
                    </div> */}
                    {/* third row  */}
                    {/* <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-16">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className={`${errors.company ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter ompany name"
                                {...register("company", {
                                    required: "Company name is required",
                                })}
                            />
                            {errors.company && <span className="text-red-600 text-sm">{errors.company.message}</span>}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Title/Position (optional)</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                className={`${errors.positioin ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter title / position"
                            />
                        </div>
                    </div> */}
                    <div className="grid grid-cols-2 gap-8">
                        {registerForm?.map((x, index) => (
                            <>
                                {x.type == 'boolean' ?
                                    <Boolean name={inputName} />
                                    :
                                    <InputField key={index} type={x.type} name={x.label} />
                                }
                            </>
                        ))}
                    </div>
                    <div className="w-full text-end">
                        <button type="submit" className="rounded-full text-sm lg:text-base px-8 py-4 bg-purple-text text-white font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page