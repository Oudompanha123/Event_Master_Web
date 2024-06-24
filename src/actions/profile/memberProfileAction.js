"use server"

import { getAllProfileMember, updateProfileMemberById } from "@/services/profile/profile.service"
import { revalidateTag } from "next/cache";

export const updateMemberDataAction = async (memberId, updateMemberData) =>{
    const updateMember = {
             
    }
    const data =  await updateProfileMemberById(memberId, updateMember);
    revalidateTag("member");
    return data;
}