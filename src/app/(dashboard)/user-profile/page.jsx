import React from 'react'
import PictureComponent from './_components/PictureComponent';
import FormComponent from './_components/FormComponent';
import { getAllMemberProfile } from '@/services/profile/profile.service';
import ProfileComponent from './_components/ProfileComponent';


async function page() {
  const getAllMember = await getAllMemberProfile();
  return (
    <>
      <div className='p-2 rounded-2xl relative'>
        <div className='w-full bg-white sm:w-auto sm:h-auto rounded-2xl md:flex justify-between shadow-md relative'>
            <div className='w-full flex flex-col justify-center py-5'>
                <FormComponent getAllMember={getAllMember.payload}/>
                <div className="mb-5 mt-4 mx-auto z-20 w-[46%]">
                  <ProfileComponent/>
                </div>
            </div>
            <PictureComponent/>
        </div>
      </div>   
    </>

  )
}

export default page