'use client'
import React, { useState } from 'react'
import { LiaUserEditSolid } from "react-icons/lia";
import Image from 'next/image'
function ProfileComponent() {

  // const [isToggle, setIsToggle] = useState(true)
  const [profileImage, setProfileImage] = useState(
    "/images/Avatar.png"
  );

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  // const toggle = ()=>{
  //   setIsToggle(!isToggle);
  // }
  return (
    <>
        <div className='rounded-full mt-20 mx-auto min-w-[80px] max-w-[150px] relative'>
            <img src={profileImage} alt="logo" className='rounded-full' id="picture"/>
            <label htmlFor="image-upload" className="absolute top-28 right-3 w-8 h-8 bg-slate-100  rounded-full flex justify-center items-center p-1 duration-300 hover:bg-slate-200 cursor-pointer">
                <LiaUserEditSolid className="w-7 h-7 text-gray-700" />
                <input type="file" id="image-upload" className='hidden' onChange={handleImageUpload} />
            </label>
        </div>
        <div className='mt-2 mx-auto mx-w-[100px] flex flex-col items-center'>
            <h1 className='text-slate-400 font-semibold'>Username</h1>
            <p className='underline font-semibold'>User</p>
        </div>
    </>
  )
}

export default ProfileComponent