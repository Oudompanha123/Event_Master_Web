'use server';

import { UpdateAgendaService } from "@/services/dashboard/agenda.service";

async function updateAgenda(agendaData,id) {
const data = await UpdateAgendaService(agendaData,id);
  return data;
}

export default updateAgenda;