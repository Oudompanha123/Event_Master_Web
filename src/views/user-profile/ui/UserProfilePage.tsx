import React from 'react'
import PictureComponent from "@/features/profile/edit/ui/PictureComponent";
import FormComponent from "@/features/profile/edit/ui/FormComponent";
import { getAllMemberProfile } from '@/entities/member/api/profile.service';
import ProfileComponent from "@/features/profile/edit/ui/ProfileComponent";


async function page() {
  const getAllMember = await getAllMemberProfile();
  return (
    <>
      <div className='p-2 rounded-2xl relative'>
        <div className='w-full bg-white sm:w-auto sm:h-auto rounded-2xl md:flex justify-between shadow-md relative'>
            <div className='w-full flex flex-col justify-center py-5'>
                <FormComponent getAllMember={getAllMember.payload}/>
                <div className="mb-5 mt-4 mx-auto relative z-20 w-fit">
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