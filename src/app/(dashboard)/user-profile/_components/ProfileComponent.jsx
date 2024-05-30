import React from 'react'
import Image from 'next/image'
function ProfileComponent() {
  return (
    <>
        <div className='rounded-full p-1 mt-20 mx-auto bg-blue-200 min-w-[100px] max-w-[200px]'>
            <Image src="/images/Avatar.png" width={200} height={200}/>
        </div>
        <div className='mt-5 mx-auto mx-w-[100px] flex flex-col items-center'>
            <h1 className='text-slate-400 font-semibold'>Username</h1>
            <p className='underline font-semibold'>User</p>
        </div>
    </>
  )
}

export default ProfileComponent