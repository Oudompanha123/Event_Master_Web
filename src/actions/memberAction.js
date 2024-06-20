'use server'
import { deleteMemberByIdService, updateMemberService } from "@/services/dashboard/memberService";
import { revalidateTag } from "next/cache";

export async function deleteMemberAction(memberId){
    await deleteMemberByIdService(memberId);
    revalidateTag('delete_member');
}

export async function updateMemberAction(memberId, role){
    await updateMemberService(memberId, role);
    revalidateTag('update_member');
}