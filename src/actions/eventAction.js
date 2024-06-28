'use server'

import { getAgendaByEventId } from "@/services/dashboard/agenda.service";
import { addAgendaToClone, addAttendeeToEvent, addMaterialToClone, getEventById, getEventForm, updateEventForm } from "@/services/dashboard/eventService";
import { getMaterialByEventId } from "@/services/dashboard/materialService";


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

export const addAttendeeToEventAction = async (data) => {
    const res = await addAttendeeToEvent(data)
    return res
}

export const addAgendaToCloneAction = async (data, id) => {
    const res = await addAgendaToClone(data, id);
    return res
}

export const addMaterialToCloneAction = async (data) => {
    const res = await addMaterialToClone(data);
    return res
}

export const getAgendaByIdAction = async (id) => {
    const res = await getAgendaByEventId(id);
    return res
}

export const getMaterialByIdAction = async (id) => {
    const res = await getMaterialByEventId(id);
    return res
}