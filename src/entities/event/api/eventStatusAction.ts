'use server'

import {changeStatus, findEvent, getAllCategoryService, getCategoryName} from "@/entities/event/api/eventService";
import { revalidateTag } from "next/cache";

export const getAllCategoryEventAction = async () => {
    const res = await getAllCategoryService();
    return res
}

export const getCategoryNameAction = async (cateName) => {
    const res = await getCategoryName(cateName);
    return res;
}

export const callingServiceAction = async (searchData) => {
    const data = await findEvent(searchData);
    return data
}

export const handleChangeStatusAction = async (eventId, active) => {
    const data = await changeStatus(eventId, active)
    revalidateTag("events")
    return data
}