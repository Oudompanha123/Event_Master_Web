"use server";
import {
  deleteMemberByIdService,
  getAllMemberService,
  searchMemberService,
  updateMemberService,
} from "@/entities/member/api/memberService";
import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";
import { authOption } from "@/shared/config/auth";
import { jwtDecode } from "jwt-decode";
import { getAllMember } from "@/shared/api/notificationService";
import { Knock } from "@knocklabs/node";
const knockClient = new Knock(process.env.KNOCK_SECRET_API_KEY);

export async function getAllMembersAction(page) {
  const data = await getAllMemberService(page);
  revalidateTag("member");
  return data;
}

export async function deleteMemberAction(memberId) {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const data = await deleteMemberByIdService(memberId);
  revalidateTag("member");
  const allMember = await getAllMember();
  if (allMember.totalRecord != 1) {
    await knockClient.notify("new-workout", {
      actor: userInfo?.sub,
      recipients: allMember.payload
        .filter((x) => x.email !== userInfo?.sub)
        .map((x) => x.email),
      data: {
        workoutText: {
          value: `has been deleted member.`,
        },
      },
    });
  }
  return data;
}

export async function updateMemberAction(memberId, role) {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const data = await updateMemberService(memberId, role);

  const allMember = await getAllMember();
  if (allMember.totalRecord != 1) {
    await knockClient.notify("new-workout", {
      actor: userInfo?.sub,
      recipients: allMember.payload
        .filter((x) => x.email !== userInfo?.sub)
        .map((x) => x.email),
      data: {
        workoutText: {
          value: "has been updated member role.",
        },
      },
    });
  }
  revalidateTag("member");
  return data;
}

export async function searchMemberAction(memberName, page?: number | string) {
  const data = await searchMemberService(memberName, page);
  revalidateTag("member");
  return data;
}
