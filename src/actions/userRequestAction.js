"use server"
import { ApproveUserRequestByIdService, RejectUserRequestByIdService } from "@/services/dashboard/userRequestService";
import { revalidateTag } from "next/cache";


export async function deleteUserRequestAction(memberId){
    await RejectUserRequestByIdService(memberId);
    revalidateTag('reject_user');
}

export async function updateUserRequestAction(memberId){
    await ApproveUserRequestByIdService(memberId);
    revalidateTag('approve_user');
}