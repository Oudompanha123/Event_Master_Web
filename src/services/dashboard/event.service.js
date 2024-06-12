

export const getAllEventsService = async () => {
    const res = await fetch(`${process.env.API_URL}events`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k',
                'Content-Type': 'application/json'
            }
        }
    )
    const data = await res.json();
    return data
}

export const getEventByIdService = async (id) => {
    const res = await fetch(`${process.env.API_URL}events/${id}`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k',
                'Content-Type': 'application/json'
            }
        }
    )
    
    const data = await res.json();
    return data
}

