'use server'

import { findEvent } from "@/entities/event/api/eventService";
import { getCategoryName } from "@/entities/event/api/eventService";

export const handleSearch = async (input) => {
    const searchData = {
        startDate: `${input.get('startDate')}T12:00:00`,
        endDate: `${input.get('endDate')}T12:00:00`
    }

    try {
        const findData = await findEvent(searchData);
        return findData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const callingEventServiceAction = async (searchData) => {
    const data = await findEvent(searchData);
    return data
}

export const handleCategoryName = async (cateName) => {
    const data = await getCategoryName(cateName);
    return data
}