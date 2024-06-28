'use server'

import {getAllCategoryService, getCategoryName, getEventByIdService} from "@/services/dashboard/eventService";
import { revalidateTag } from "next/cache";

export const getAllCategoryEventAction = async () => {
    const res = await getAllCategoryService();
    revalidateTag('events')
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