'use server';
import { revalidateTag } from "next/cache";
import { getAgendaByEventId } from "@/entities/agenda/api/agenda.service";


async function fetchAgenda(id) {
const data = await getAgendaByEventId(id);
revalidateTag('agendas');
  return data;
}

export default fetchAgenda;