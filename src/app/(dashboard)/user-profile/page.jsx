import React from 'react'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import ProfileComponent from './_components/ProfileComponent';
import PictureComponent from './_components/PictureComponent';
import FormComponent from './_components/FormComponent';
import { getAllProfileMember } from '@/services/profile/profile.service';
import { getAllProfileMemberAction } from '@/actions/profile/memberProfileAction';


async function page() {
  return (
    <>
    <div className='p-2 rounded-2xl relative'>
        <div className='w-full bg-white sm:w-auto sm:h-auto rounded-2xl md:flex justify-between shadow-md relative'>
            <div className='w-full flex justify-center items-center py-5'>
                <FormComponent/>
            </div>
            <PictureComponent/>
        </div>
    </div>   
    </>
    
  )
}

export default page