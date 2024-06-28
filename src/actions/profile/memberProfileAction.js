"use server"

import { changePassword, updateProfileMemberById } from "@/services/profile/profile.service"
import { revalidateTag } from "next/cache";

export const updateMemberDataAction = async (memberId, data) => {
    const res = await updateProfileMemberById(memberId, data);
    revalidateTag("customer");
    return res
}

export const changePasswordAction = async (updatePassword) => {
    const changePasswordMember = {
        oldPassword: updatePassword.currentPassword,
        password: updatePassword.newPassword,
        confirmPassword: updatePassword.confirmPassword
    }

    const res = await changePassword(changePasswordMember);
    revalidateTag("customer");
    return res
}