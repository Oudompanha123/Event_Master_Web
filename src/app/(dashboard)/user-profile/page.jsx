import React from 'react'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import ProfileComponent from './_components/ProfileComponent';
import PictureComponent from './_components/PictureComponent';
import FormComponent from './_components/FormComponent';

function page() {
  return (
    <>
        <div className='bg-slate-100 w-full h-[800px] rounded-xl flex justify-between'>
            <div className='relative w-[300px] h-full'>
                <ProfileComponent/>
                <PictureComponent/>
            </div>
            <div className='w-[70%] flex justify-center items-center'>
                <FormComponent/>
            </div>
        </div>
    </>
    
  )
}

export default page