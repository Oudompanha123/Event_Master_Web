"use server";

import { updateEventService } from "@/entities/event/api/eventService";
import { createEventService } from "@/entities/category/api/overviewService";
import { revalidateTag } from "next/cache";
export async function handleEvent(data) {
  const submitData = {
    eventName: data.name,
    description: data.description,
    startDate: data.startDate,
    endDate: data.endDate,
    duration: data.duration,
    address: data.address,
    poster: data.poster,
    isPost: data.isPublic,
    maxAttendee: data.maxAttendee,
    categoryId: data.categoryId
  };
  await createEventService(submitData);
  revalidateTag("events");
}
//update
export async function handleUpdateEvent(eventId, submitData) {
  const response = await updateEventService(eventId, submitData);
  revalidateTag("events");
  return response
}
