import React from 'react'
import { CiLock } from "react-icons/ci";
function FormComponent() {
  return (
    <>
                <form action="#" className='mx-auto'>
                    <div className='grid grid-cols-2 gap-6 w-[100%]'>
                        <div class="w-full mb-2 group flex flex-col">
                            <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name <span className='text-red-500'>*</span></label>
                            <input type="text" id="name" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter your name"/>
                        </div>
                        <div class="w-full mb-2 group">
                            <label htmlFor="gender" className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'>Gender <span className='text-red-500'>*</span></label>
                            <select className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required id='gender'>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other" selected>Other</option>
                            </select>
                        </div>
                        <div class="w-full mb-2 group flex flex-col">
                            <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email <span className='text-red-500'>*</span></label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                    </svg>
                                </div>
                                <input type="email" id="email-address-icon" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="name@gmail.com"/>
                            </div>
                        </div>
                        <div class="w-full mb-2 group flex flex-col">
                            <label htmlFor="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date <span className='text-red-500'>*</span></label>
                            <input type="date" id="date" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Enter your name"/>
                        </div>
                        <div class="w-full mb-2 group flex flex-col">
                            <label htmlFor="phone" className='mb-1 font-semibold'>Phone Number <span className='text-red-500'>*</span></label>
                            <input type="number" placeholder="Phone number" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='phone' required/>
                        </div>
                        <div class="w-full mb-2 group flex flex-col">
                            <label htmlFor="address" className='mb-1 font-semibold'>Address <span className='text-red-500'>*</span></label>
                            <input type="text" placeholder="" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='address' required/>
                        </div>
                    </div>
                    <div className='block mb-5 mt-3'>
                        <button type='button' className='bg-blue-700 text-white font-sans p-2 rounded-[50px]'>Change Password</button> 
                    </div>
                    <div class="w-full mb-5 group flex flex-col">
                        <label htmlFor="current-password" className='mb-1 font-semibold'>Current Password <span className='text-red-500'>*</span></label>
                        <input type="password" placeholder="Enter your current password" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='current-password' required/>
                    </div>
                    <div class="w-full mb-5 group flex flex-col">
                        <label htmlFor="new-password" className='mb-1 font-semibold'>New Password <span className='text-red-500'>*</span></label>
                        <input type="password" placeholder="Enter your new password" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='new-password' required/>
                    </div>
                    <div class="w-full mb-10 group flex flex-col">
                        <label htmlFor="confirm-password" className='mb-1 font-semibold'>Confirm Password <span className='text-red-500'>*</span></label>
                        <input type="password" placeholder="Confirm password" className="bg-gray-50 border input input-bordered max-w-[600px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id='new-password' required/>
                    </div>
                    <div className='flex justify-end w-full'>
                        <button type='submit' className='bg-green-700 p-2 text-white rounded-xl'>Update</button>
                    </div>          
                </form>
    </>
  )
}

export default FormComponent