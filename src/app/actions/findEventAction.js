'use server'

import { findEventService } from "@/services/dashboard/eventService";

export const handleSearch = async (input) => {
    const searchData = {
        startDate: `${input.get('startDate')}T12:00:00`,
        endDate: `${input.get('endDate')}T12:00:00`
    }

    try {
        const findData = await findEventService(searchData);
        console.log(findData)
        return findData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const callingEventService = async (searchData) => {
    const data = await findEventService(searchData);
    return data
}
  