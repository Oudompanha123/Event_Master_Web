'use server'

import { getAllCategory, insertCategory, updateCategory } from "@/services/dashboard/overviewService";
import { deleteCategory } from "@/services/dashboard/overviewService";
import { revalidateTag } from "next/cache";


export const deleteCategoryAction = async (id) => {
    await deleteCategory(id);
    revalidateTag('event')
}








// export const addNewCategoryAction = async (name) => {
//     const data = await insertCategory(name);
//     revalidateTag('overview')
//     return data;
// }

// export const deleteCategoryAction = async (id) => {
//     await deleteCategory(id);
//     revalidateTag('overview')
// }

// export const updateCategoryAction = async (id, categoryName) => {
//     await updateCategory(id, categoryName);
//     revalidateTag('overview');
// }

// export const getAllCategoryAction = async (page) => {
//     const data = await getAllCategory(page);
//     revalidateTag('overview');
//     return data
// }