'use client'
import React, { useRef, useState } from 'react'
import { CiLock } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";

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

    function reset (){
        ref.current.reset()
    }

  return (
    <>
                <form action="#" className='mx-auto mt-5 w-[90%] ' ref={ref} method="post">
                    <div className='grid md:grid-cols-2 gap-6 w-[100%] sm:grid-cols-1'>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name <span className='text-red-500'>*</span></label>
                            <input type="text" id="name" name='name' className="border rounded-2xl input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" /> 
                        </div>
                        <div className="w-full mb-2 group">
                            <label htmlFor="gender" className='block mb-2 text-sm font-semibold text-gray-900 dark:text-white'>Gender <span className='text-red-500'>*</span></label>
                            <select className="border  py-3 pe-2 input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='gender'>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other" selected>Other</option>
                            </select>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Your Email <span className='text-red-500'>*</span></label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="email" id="email-address-icon" name='email' className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="name@gmail.com"/>
                            </div>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="date" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Date <span className='text-red-500'>*</span></label>
                            <input type="date" id="date" name='date' className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter your name"/>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="phone" className='mb-1 font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="Phone number" name='phone' className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='phone' required/>
                        </div>
                        <div className="w-full mb-2 group flex flex-col">
                            <label htmlFor="address" className='mb-1 font-semibold'>Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="" name='address' className="border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='address' required/>
                        </div>
                    </div>
                    <div className='block mb-5 mt-4'>
                        <button type='button' className='btn bg-purple-600 text-white rounded-3xl' onClick={handleUpdateClick}>Change Password</button> 
                    </div>
                    <div className="w-full mb-5 group flex flex-col">   
                        <label htmlFor="current-password" className='mb-1 font-semibold'>Current Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            {/* <div className="absolute inset-y-0 start-0 flex left-[95%] items-center pointer-events-none">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.375 1.5 13.5 3 13.5 5.25" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> */}
                            <input type="password" placeholder="Enter your current password" className="border input input-bordered max-w-full border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='current-password' required disabled={isLock}/>   
                        </div>
                    </div>
                    <div className="w-full mb-5 group flex flex-col">
                        <label htmlFor="new-password" className='mb-1 font-semibold'>New Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            {/* <div className="absolute inset-y-0 start-0 flex left-[95%] items-center pointer-events-none">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.375 1.5 13.5 3 13.5 5.25" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> */}
                            <input type="password" placeholder="Enter your new password" className="border input input-bordered max-w-full border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='new-password' required disabled={isLock}/>
                        </div>
                    </div>
                    <div className="w-full md:mb-10 group flex flex-col">
                        <label htmlFor="confirm-password" className='mb-1 font-semibold'>Confirm Password <span className='text-red-500'>*</span></label>
                        <div className='relative'>
                            {/* <div className="absolute inset-y-0 start-0 flex left-[95%] items-center pointer-events-none">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12.75 16.5H5.25C2.25 16.5 1.5 15.75 1.5 12.75V11.25C1.5 8.25 2.25 7.5 5.25 7.5H12.75C15.75 7.5 16.5 8.25 16.5 11.25V12.75C16.5 15.75 15.75 16.5 12.75 16.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.5 7.5V6C4.5 3.5175 5.25 1.5 9 1.5C12.375 1.5 13.5 3 13.5 5.25" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9 13.875C10.0355 13.875 10.875 13.0355 10.875 12C10.875 10.9645 10.0355 10.125 9 10.125C7.96447 10.125 7.125 10.9645 7.125 12C7.125 13.0355 7.96447 13.875 9 13.875Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div> */}
                            <input type="password" placeholder="Confirm your new password" className="border input input-bordered max-w-full border-gray-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='confirm-password'required disabled={isLock}/>
                        </div>
                    </div>
                    <div className='flex justify-end my-3 w-full'>
                        {isLock ? (
                            <>
                                <button type='submit' className=' btn bg-green-700 text-lg w-40 lg:w-32 lg:text-base flex items-center text-white rounded-2xl' onClick={handleUpdateClick}><FiEdit/>Update</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn-outline border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base rounded-2xl" onClick={lock}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5 rounded-2xl" type='submit' onClick={reset}>
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