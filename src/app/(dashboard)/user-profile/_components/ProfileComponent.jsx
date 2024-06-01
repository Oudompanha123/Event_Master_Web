'use client'
import React from 'react'
import Image from 'next/image'

function ProfileComponent() {
  
  return (
    <>
        <div className='rounded-full p-1 mt-20 mx-auto min-w-[100px] max-w-[200px] relative'>
            <img src="./images/Avatar.png" alt="logo" />
            <div className='absolute top-36 left-36 bg-slate-300 p-2 rounded-full'>
              <Image src="/images/download-removebg-preview.png" width={20} height={20}/>
            </div>
        </div>
        <div className='mt-2 mx-auto mx-w-[100px] flex flex-col items-center'>
            <h1 className='text-slate-400 font-semibold'>Username</h1>
            <p className='underline font-semibold'>User</p>
        </div>
    </>
  )
}

export default ProfileComponent