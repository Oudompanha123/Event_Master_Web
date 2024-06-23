'use server'

import { getEventById, getEventForm, updateEventForm } from "@/services/dashboard/eventService";


export const updateEventFormAction = async (data, id) => {
    const res = await updateEventForm(data, id);
    return res
}

export const getEventFormAction = async (id) => {
    const res = await getEventForm(id)
    return res
}

export const getEventByIdAction = async (id) => {
    const res = await getEventById(id);
    return res
}