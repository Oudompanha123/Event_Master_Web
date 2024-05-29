'use client'
import React, { useRef, useState } from 'react'
import { CiLock } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

// import { CiLock } from "react-icons/ci";
function FormComponent() {
    const ref = useRef();

    function handleSubmit(){
        ref.current.reset();
    }
  return (
    <>
                <form action="#" className='mx-auto' ref={ref}>
                    <div className='grid grid-cols-2 gap-6 w-[100%]'>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name <span className='text-red-500'>*</span></label>
                            <input type="text" id="name" className="border rounded-2xl input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter your name"/>
                        </div>
                        <div className="w-full mb-2 group">
                            <label htmlFor="gender" className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Gender <span className='text-red-500'>*</span></label>
                            <select className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required id='gender'>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other" selected>Other</option>
                            </select>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span className='text-red-500'>*</span></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="email" id="email-address-icon" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="name@gmail.com"/>
                            </div>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date <span className='text-red-500'>*</span></label>
                            <input type="date" id="date" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter your name"/>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="phone" className='mb-1 font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="Phone number" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='phone' required/>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="address" className='mb-1 font-semibold'>Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='address' required/>
                        </div>
                    </div>
                    <div className='block mb-5 mt-4'>
                        <button type='button' className='bg-blue-700 text-white font-sans p-2 rounded-[50px]'>Change Password</button> 
                    </div>
                    <div className="w-full mb-5 group flex flex-col">   
                        <label htmlFor="current-password" className='mb-1 font-semibold'>Current Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            <div className="absolute inset-y-0 start-0 flex left-[93%] items-center pointer-events-none">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.375 1.5 13.5 3 13.5 5.25" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <input type="password" placeholder="Enter your current password" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='current-password' readOnly required  />   
                        </div>
                    </div>
                    <div className="w-full mb-5 group flex flex-col">
                        <label htmlFor="new-password" className='mb-1 font-semibold'>New Password <span className='text-red-500'>*</span></label>
                        <input type="password" placeholder="Enter your new password" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='new-password' readOnly required/>
                    </div>
                    <div className="w-full mb-10 group flex flex-col">
                        <label htmlFor="confirm-password" className='mb-1 font-semibold'>Confirm Password <span className='text-red-500'>*</span></label>
                        <input type="password" placeholder="Confirm password" className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='new-password' readOnly required/>
                    </div>
                    <div className='flex justify-end w-full'>
                        <button type='submit' className='bg-green-700 p-2 flex text-white rounded-xl' onClick={handleSubmit}><FiEdit/>Update</button>
                    </div>          
                </form>
    </>
  )
}

export default FormComponent