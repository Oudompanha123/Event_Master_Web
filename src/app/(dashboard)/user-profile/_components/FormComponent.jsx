'use client'
import React, { useRef, useState } from 'react'
import { CiLock } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import {useForm} from "react-hook-form";


// import { CiLock } from "react-icons/ci";
function FormComponent() {
    const ref = useRef();

    const [isLock, setLocked] = useState(true);

    const lock = ()=>{
        setLocked(!isLock)
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
                            <input type="text" id="name" name='name' className="border rounded-2xl py-3 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Enter your name" 
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}
                        </div>

                        <div className="w-full mb-2 group">
                            <label htmlFor="gender" className='block mb-2 text-sm font-semibold text-gray-900 dark:text-white'>Gender <span className='text-red-500'>*</span></label>
                            <select className="border  py-3 pe-2 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='gender'  
                            {...register('gender', { required: 'Gender is required' })}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other" selected>Other</option>
                            </select>
                            {errors.gender && <span className='text-red-500 text-sm'>{errors.gender.message}</span>}
                        </div>

                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Your Email <span className='text-red-500'>*</span></label>
                            <div className="relative">
                                <input type="email" id="email" name='email' className="border py-3 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
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
                            <input type="date" id="date" name='date' className="border py-3 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Enter your name"
                                {...register('date', { required: 'Date is required' })}
                            />
                            {errors.date && <span className='text-red-500 text-sm'>{errors.date.message}</span>}
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="phone" className='mb-1 font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="Phone number" name='phone' className="border py-3 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='phone' 
                                {...register('phoneNumber', { required: 'Phone number is required' })}
                            />
                            {errors.phoneNumber && <span className='text-red-500 text-sm'>{errors.phoneNumber.message}</span>}
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="address" className='mb-1 font-semibold'>Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="" name='address' className="border py-3 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='address' 
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && <span className='text-red-500 text-sm'>{errors.address.message}</span>}
                        </div>
                    </div>
                    <div className='block mb-5 mt-4'>
                        <button type='button' className='btn bg-purple-600 text-white rounded-3xl' onClick={handleUpdateClick}>
                            Change Password
                        </button> 
                    </div>
                    <div className="w-full mb-5 group flex flex-col">   
                        <label htmlFor="current-password" className='mb-1 font-semibold'>Current Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <input type="password" placeholder="Enter your current password" className="border py-3 input-bordered max-w-full border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='current-password' 
                                disabled={isLock}
                                {...register('currentPassword', { required: 'Current password is required' })}
                            />
                            <div className={"absolute top-4 right-3 cursor-pointer"}>
                                <img src="" alt="" />
                            </div>
                        </div>
                        {errors.currentPassword && <span className='text-red-500 text-sm'>{errors.currentPassword.message}</span>}   
                    </div>
                    <div className="w-full mb-5 group flex flex-col">
                        <label htmlFor="new-password" className='mb-1 font-semibold'>New Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <input type="password" placeholder="Enter your new password" className="border py-3 input-bordered max-w-full border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='new-password' 
                                disabled={isLock}
                                {...register('newPassword', { required: 'New password is required' })}
                            />
                            {errors.newPassword && <span className='text-red-500 text-sm'>{errors.newPassword.message}</span>}
                        </div>
                    </div>
                    <div className="w-full md:mb-10 group flex flex-col">
                        <label htmlFor="confirm-password" className='mb-1 font-semibold'>Confirm Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <input type="password" placeholder="Confirm your new password" className="border py-3 input-bordered max-w-full border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='confirm-password'
                                disabled={isLock} 
                                {...register('confirmPassword', {
                                    required: 'Confirm password is required',
                                    validate: (value) => value === watch('newPassword') || 'Passwords do not match'
                                })}
                            />
                            {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}
                        </div>
                    </div>
                    <div className='flex justify-end my-3 w-full'>
                        {isLock ? (
                            <>
                                <button type='submit' className=' btn sm:text-sm bg-green-700 text-lg w-40 lg:w-32 lg:text-base flex items-center text-white rounded-2xl' onClick={handleUpdateClick}><FiEdit/>Update</button>
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