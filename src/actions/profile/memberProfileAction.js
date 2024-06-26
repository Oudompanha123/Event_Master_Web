"use server"

import { changePassword, getAllProfileMember, updateProfileMemberById } from "@/services/profile/profile.service"
import { revalidateTag } from "next/cache";

export const updateMemberDataAction = async (memberId, updateMemberData) =>{
    const updateMember = {
        memberName : updateMemberData.name,
        gender : updateMemberData.gender,
        address : updateMemberData.address,
        dateOfBirth : updateMemberData.date,
        phone : updateMemberData.phoneNumber,
        picture : updateMemberData.picture 
    };
    // console.log("Update date: ", updateMember)
    await updateProfileMemberById(memberId, updateMember);
    revalidateTag("customer");
}

export const changePasswordAction = async(updatePassword)=>{
    console.log("Update password action: ", updatePassword)
    const changePasswordMember = {
        oldPassword : updatePassword.currentPassword,
        password : updatePassword.newPassword,
        confirmPassword : updatePassword.confirmPassword
    }
    // console.log("data update: ", changePasswordMember);
    await changePassword(changePasswordMember);
    revalidateTag("customer");
}