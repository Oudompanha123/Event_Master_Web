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
export const getAllCategory = async () => {
    const res = await fetch(`${process.env.API_URL}events/getAllCategoryNames`)
    const data = await res.json()
    return data
}

export const getEventByCateNameLoading = async ({ name, page }) => {
    const res = await fetch(`${process.env.API_URL}events/filter/${name}?offset=${page}&limit=8`)
    const data = await res.json();
    return data
}

export const getEventByCateName = async (name) => {
    const res = await fetch(`${process.env.API_URL}events/filter/${name}`)
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
    searchData.categoryName ? console.log('have data') : console.log('no data')
    let res;
    if (searchData.categoryName) {
        res = await fetch(`${process.env.API_URL}events/search?eventName=${searchData.eventName}&categoryName=${searchData.categoryName}&status=${searchData.status}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`)
    } else {
        res = await fetch(`${process.env.API_URL}events/search?eventName=${searchData.eventName}&status=${searchData.status}&startDateTime=${searchData.startDateTime !== 'T12:00:00' ? searchData.startDateTime : ''}&endDateTime=${searchData.endDateTime !== 'T12:00:00' ? searchData.endDateTime : ''}`)
    }
    const data = await res.json()
    return data
}

export const deleteEventById = async (eventId) => {
    const res = await fetch(`http://34.124.203.109:8081/api/events/${eventId}`,
        {
            next: { tags: ['events'] },
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODY5MzYzOCwiZXhwIjoxNzE5NTU3NjM4fQ.EttT3JP5mo8plVzXkHILfkfeghmo0K0UFC9KEGlad0s',
            }
        }
    ) 
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

