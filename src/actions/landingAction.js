'use server'

import { getAllCategory } from "@/services/clientPage/landingService";


export const getAllCategoryLandingAction = async () => {
    const res = await getAllCategory();
    return res
}