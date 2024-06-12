'use server';

import { revalidateTag } from "next/cache";
import { DeleteAgendaService } from "@/services/dashboard/agenda.service";

async function deleteAgenda(agenda) {
  console.log("agenda in action", agenda);
  const data = await DeleteAgendaService(agenda);
  revalidateTag("agenda");
}
export default deleteAgenda;
