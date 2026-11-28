'use server';
import { revalidateTag } from "next/cache";
import { UpdateAgendaService } from "@/entities/agenda/api/agenda.service";

async function updateAgenda(agendaData, id) {
  const data = await UpdateAgendaService(agendaData, id); 
  revalidateTag("agenda");
  return data;
}

export default updateAgenda;
