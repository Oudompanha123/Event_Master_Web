"use server";
import { DeleteAttendeeService } from "@/services/dashboard/attendeeService";
import { revalidateTag } from "next/cache";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getAllMember } from "@/services/notification/notificationService";
import { Knock } from "@knocklabs/node";
const knockClient = new Knock(process.env.KNOCK_SECRET_API_KEY);
export async function deleteAttendeeAction(attendeeId) {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  await DeleteAttendeeService(attendeeId);
  revalidateTag("attendee");
  const allMember = await getAllMember();
  await knockClient.notify("new-workout", {
    actor: userInfo?.sub,
    recipients: allMember.payload
      .filter((x) => x.email !== userInfo?.sub)
      .map((x) => x.email),
    data: {
      workoutText: {
        value: `has been deleted attendee.`,
      },
    },
  });

}
