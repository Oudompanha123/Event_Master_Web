'use server';
import { CreateAgendaService } from "@/services/dashboard/agenda.service";
async function createAgenda(agendaData){
    console.log("agenda in action",agendaData);
    const data = await CreateAgendaService(agendaData);
    revalidateTag("agenda");
    return agendaData
  }
  export default createAgenda;