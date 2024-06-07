'use client'
import React, { useRef, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import {useForm} from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";


// import { CiLock } from "react-icons/ci";
function FormComponent() {
    const ref = useRef();

    const [isLock, setLocked] = useState(true);

    const [drop , setDrop] = useState(true)

    const [showPasswords, setShowPasswords] = useState({
        currentPassword: false,
        newPassword: false,
        confirmPassword: false
    });

    const toggleShowPassword = (field) => {
        setShowPasswords((prevState) => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const lock = ()=>{
        setLocked(!isLock)
    }

    const isDrop = ()=>{
        setDrop(!drop)
    }

    function handleUpdateClick(){
        setLocked(!isLock)
    }

    function clear (){
        ref.current.reset()
    }

    const initialData = {
        name: "",
        gender: "other",
        email: "",
        date: "",
        phoneNumber: "",
        address: "",
        currentPassword:"Nita1234",
        newPassword:"12345678",
        confirmPassword:"12345678"
    };

    const {
        register, handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm({
        defaultValues: initialData
    });

    const onSubmit = (data) => {
        console.log("Form submitted", data);
        reset();
    };

  return (
    <>
                <form action="#" className='mx-auto mt-5 w-[90%] ' ref={ref} method="post" onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-2 gap-6 w-[100%] sm:grid-cols-1'>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name <span className='text-red-500'>*</span></label>
                            <input type="text" id="name" name='name' className={`${errors.name ? "border-red-700 focus:border-red-600" : "border-gray-300"} border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your name" 
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
                        </div>

                        <div className="w-full mb-2 group">
                            <label htmlFor="gender" className='block mb-2 text-sm font-semibold text-gray-900 dark:text-white'>Gender <span className='text-red-500'>*</span></label>
                            <div className='relative'>
                               <select onClick={isDrop} className={`${errors.gender ? "border-red-700 focus:border-red-600" : "border-gray-300"} border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} id='gender'  
                                    {...register('gender', { required: 'Gender is required' })}>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other" selected>Other</option>
                                </select>
                                    {/* {drop ? (
                                    <>
                                        <div className={"absolute top-2.5 right-2 cursor-pointer"}>
                                            <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54611 10.6432C8.10595 10.2396 7.39364 10.2411 6.95512 10.6465C6.51661 11.0519 6.51794 11.7077 6.9581 12.1114L13.7207 18.3127C14.1609 18.7163 14.8732 18.7149 15.3117 18.3095L22.0491 12.0807C22.4876 11.6752 22.4862 11.0194 22.0461 10.6158C21.6059 10.2121 20.8936 10.2136 20.4551 10.619L14.5118 16.1137L8.54611 10.6432Z" fill="#313144"/>
                                            </svg>
                                        </div>                    
                                    </>
                                    ) : (
                                    <>
                                        <div className={"absolute top-2.5 right-2 cursor-pointer"}>
                                            <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4197 16.3155C20.8536 16.7258 21.5658 16.7354 22.0105 16.3368C22.4552 15.9381 22.464 15.2823 22.0301 14.872L15.3638 8.56718C14.9299 8.15681 14.2177 8.14729 13.773 8.5459L6.94047 14.6702C6.49576 15.0688 6.48699 15.7246 6.92088 16.1349C7.35477 16.5453 8.06702 16.5548 8.51173 16.1562L14.539 10.7537L20.4197 16.3155Z" fill="#313144"/>
                                            </svg>
                                        </div>     
                                    </>
                                    )} */}
                            </div>
                            {errors.gender && <span className='text-red-500 text-sm'>{errors.gender.message}</span>}
                        </div>

                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Your Email <span className='text-red-500'>*</span></label>
                            <div className="relative">
                                <input type="email" id="email" name='email' className={`${errors.email ? "border-red-700 focus:border-red-600" : "border-gray-300"} border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your email" 
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Enter a valid email address"
                                    }
                                })}/>
                                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}
                            </div>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="date" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Date <span className='text-red-500'>*</span></label>
                            <input type="date" id="date" name='date' className={`${errors.date ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                                placeholder="Enter your name"
                                {...register('date', { required: 'Date is required' })}
                            />
                            {errors.date && <span className='text-red-500 text-sm'>{errors.date.message}</span>}
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="phone" className='mb-1 text-sm font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="Phone number" name='phone' className={`${errors.phoneNumber ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} id='phone' 
                                {...register('phoneNumber', { required: 'Phone number is required' })}
                            />
                            {errors.phoneNumber && <span className='text-red-500 text-sm'>{errors.phoneNumber.message}</span>}
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="address" className='mb-1 text-sm font-semibold'>Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="" name='address' className={`${errors.address ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} id='address' 
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && <span className='text-red-500 text-sm'>{errors.address.message}</span>}
                        </div>
                    </div>
                    <div className='block mb-5 mt-4'>
                        <button type='button' className='btn bg-purple text-white rounded-3xl hover:bg-purple-text-head' onClick={handleUpdateClick}>
                            Change Password
                        </button> 
                    </div>
                    <div className="w-full mb-5 group flex flex-col">   
                        <label htmlFor="current-password" className='mb-1 text-sm font-semibold'>Current Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <input type={showPasswords.currentPassword ? "text" : "password"} className={`${errors.currentPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} placeholder="Enter your current password"  id='current-password' 
                                disabled={isLock}
                                {...register('currentPassword', { required: 'Current password is required' })}
                            />
                            <div className={"absolute top-4 right-3 cursor-pointer"} onClick={()=> toggleShowPassword("currentPassword")}>
                                {showPasswords.currentPassword ? <CiUnlock /> : <CiLock/> }
                            </div>
                        </div>
                        {errors.currentPassword && <span className='text-red-500 text-sm'>{errors.currentPassword.message}</span>}   
                    </div>
                    <div className="w-full mb-5 group flex flex-col">
                        <label htmlFor="new-password" className='mb-1 text-sm font-semibold'>New Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <input type={showPasswords.newPassword ? "text" : "password"} className={`${errors.newPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} 
                                placeholder="Enter your new password" disabled={isLock} {...register('newPassword', { required: 'New password is required' })}
                            />
                            <div className={"absolute top-4 right-3 cursor-pointer"} onClick={()=> toggleShowPassword("newPassword")}>
                                {showPasswords.newPassword ? <CiUnlock /> :<CiLock/>}
                            </div>
                        </div>
                        {errors.newPassword && <span className='text-red-500 text-sm'>{errors.newPassword.message}</span>}
                    </div>
                    <div className="w-full md:mb-10 group flex flex-col">
                        <label htmlFor="confirm-password" className='mb-1 text-sm font-semibold'>Confirm Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <input type={showPasswords.confirmPassword ? "text" : "password"}  className={`${errors.confirmPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} placeholder="Confirm your new password" id='confirm-password'
                                disabled={isLock} 
                                {...register('confirmPassword', {
                                    required: 'Confirm password is required',
                                    validate: (value) => value === watch('newPassword') || 'Passwords do not match'
                                })}
                            />
                             <div className={"absolute top-4 right-3 cursor-pointer"} onClick={()=> toggleShowPassword("confirmPassword")}>
                                {showPasswords.confirmPassword ? <CiUnlock /> :<CiLock/>}
                            </div>
                        </div>
                        {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
                    </div>
                    <div className='flex justify-end my-3 w-full'>
                        {isLock ? (
                            <>
                                <button type='submit' className='btn btn-success text-white flex items-center rounded-2xl text-lg sm:text-sm w-40 lg:w-32 lg:text-base sm:w-20' onClick={handleUpdateClick}>
                                    <FiEdit/>Update
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base rounded-2xl" onClick={lock}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5 rounded-2xl" type='submit' onClick={clear}>
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.5 12.75H13.25V16C13.25 16.41 12.91 16.75 12.5 16.75C12.09 16.75 11.75 16.41 11.75 16V12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H11.75V8C11.75 7.59 12.09 7.25 12.5 7.25C12.91 7.25 13.25 7.59 13.25 8V11.25H16.5C16.91 11.25 17.25 11.59 17.25 12C17.25 12.41 16.91 12.75 16.5 12.75Z" fill="white"/>
                                    </svg>
                                    Save
                                </button>
                            </>
                        )}
                    </div>          
                </form>
    </>
  )
}

export default FormComponent