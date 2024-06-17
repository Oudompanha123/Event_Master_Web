'use server'

import { findEvent } from "@/services/clientPage/landingService";

export const handleSearch = async (input) => {
    const searchData = {
        startDate: `${input.get('startDate')}T12:00:00`,
        endDate: `${input.get('endDate')}T12:00:00`
    }

    try {
        const findData = await findEvent(searchData);
        console.log(findData)
        return findData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export const callingServiceAction = async (searchData) => {
    const data = await findEvent(searchData);
    console.log('inside action')
    return data
}