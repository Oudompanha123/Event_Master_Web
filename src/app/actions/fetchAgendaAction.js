'use server';

import { getAgendaByEventId } from "@/services/dashboard/agenda.service";


async function fetchAgenda(id) {
const data = await getAgendaByEventId(id)
  return data;
}

export default fetchAgenda;