'use server';

import { createEventService } from "@/services/dashboard/event.service";
import { revalidateTag } from "next/cache";

async function createAgenda(eventData,id) {
  const data = await createEventService(eventData,id);
  revalidateTag('events');
  return data;
}

export default createAgenda;