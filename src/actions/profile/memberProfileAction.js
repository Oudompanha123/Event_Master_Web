"use server"

import { getAllProfileMember, updateProfileMemberById } from "@/services/profile/profile.service"
import { revalidateTag } from "next/cache";

export const updateMemberDataAction = async (memberId, updateMemberData) =>{
    const updateMember = {
        memberName : updateMemberData.name,
        gender : updateMemberData.gender,
        email : updateMemberData.email,
        address : updateMemberData.address,
        dateOfBirth : updateMemberData.date,
        phone : updateMemberData.phoneNumber 
    };
    // console.log("Update Member data: ", updateMember)
    // console.log("Member ID: ", memberId)
    await updateProfileMemberById(memberId, updateMember);
    revalidateTag("customer");
}