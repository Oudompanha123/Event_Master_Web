"use server";
import {
  deleteMemberByIdService,
  getAllMemberService,
  searchMemberService,
  updateMemberService,
} from "@/services/dashboard/memberService";
import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { jwtDecode } from "jwt-decode";
import { getAllMember } from "@/services/notification/notificationService";
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
  console.log(data)

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

export async function searchMemberAction(memberName) {
  const data = await searchMemberService(memberName);
  revalidateTag("member");
  return data;
}
