'use server'

import { getAllCategory, getEventByCateNameLoading } from "@/services/clientPage/landingService";


export const getAllCategoryLandingAction = async () => {
    const res = await getAllCategory();
    return res
}

export const getEventByCategoryNameAction = async ({name, page}) => {
    const res = await getEventByCateNameLoading({ name, page });
    const data = res.payload
    return data
}