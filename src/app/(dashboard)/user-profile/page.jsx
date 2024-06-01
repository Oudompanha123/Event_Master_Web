import React from 'react'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import ProfileComponent from './_components/ProfileComponent';
import PictureComponent from './_components/PictureComponent';
import FormComponent from './_components/FormComponent';


function page() {
  return (
    <>
    <div className='p-2 rounded-2xl'>
        <div className='w-full bg-white sm:w-auto md:h-[820px] sm:h-auto rounded-2xl md:flex justify-between'>
            <div className='relative md:w-[30%] h-full'>
                <ProfileComponent/>
                <PictureComponent/>
            </div>
            <div className='lg:min-w-[70%] md:max-w-[80%] flex justify-center items-center'>
                <FormComponent/>
            </div>
        </div>
    </div>
        
    </>
    
  )
}

export default page