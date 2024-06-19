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
            next: { tags: ['events'] },
            cache: "no-store",
            headers: header
        }
    )
    const data = await res.json();
    return data
}

export const findEvent = async (searchData) => {
    const res = await fetch(`
        ${process.env.API_URL}events/search?&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`,
        {
            cache: "no-store",
            method: 'POST',
        }
    )
    const data = await res.json();
    return data
}

export const createEventService = async (newEvent) => {
    console.log("new event", newEvent)
    const res = await fetch(`${process.env.API_URL}events`,
        {
            next: { tags: 'events' },
            method: "POST",
            body: JSON.stringify(newEvent),
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODI0MzE2MSwiZXhwIjoxNzE5MTA3MTYxfQ.wfXJ-AcYZ08shSfRfszEqNin4mHeq0wEaVGnA1nHSG4',
                'Content-Type': 'application/json'
            }
        }
    )
    const data = await res.json();
    return data;
}


export const updateEventService = async (data, id) => {
    try {
        const res = await fetch(`${process.env.API_URL}events/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODI0MzE2MSwiZXhwIjoxNzE5MTA3MTYxfQ.wfXJ-AcYZ08shSfRfszEqNin4mHeq0wEaVGnA1nHSG4',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data
            }),
        })
        if (!res.ok) {
            const errorText = await res.text();
            throw (`Error: ${errorText}`);
        }

        const dataAgenda = await res.json();
        return dataAgenda;
    } catch (error) {
        console.error("There was an error updating the event:", error);
        throw error;
    };
}

