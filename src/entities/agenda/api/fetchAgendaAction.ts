'use server';
import { getAgendaByEventId } from "@/entities/agenda/api/agenda.service";


async function fetchAgenda(id) {
const data = await getAgendaByEventId(id);
  return data;
}

export default fetchAgenda;