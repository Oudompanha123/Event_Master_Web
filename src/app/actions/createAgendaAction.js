'use server';
import { CreateAgendaService } from "@/services/dashboard/agenda.service";

async function createAgenda(agendaData,id) {
  const data = await CreateAgendaService(agendaData,id);
  return data;
}

export default createAgenda;
