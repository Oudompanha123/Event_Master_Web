import { headerToken } from "@/app/api/auth/headerToken";

export const getAllEventsService = async () => {
    const header = await headerToken()
    const res = await fetch(`${process.env.API_URL}events`,
        {
            cache: "no-store",
            headers: header
        }
    )
    const data = await res.json();
    return data
}

export const getEventByIdService = async (id) => {
    const header = await headerToken()
    const res = await fetch(`${process.env.API_URL}events/${id}`,
        {
            cache: "no-store",
            headers: header
        }
    )
    
    const data = await res.json();
    return data
}

