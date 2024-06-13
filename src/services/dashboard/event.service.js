

export const getAllEventsService = async () => {
    const res = await fetch(`${process.env.API_URL}events`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ',
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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ',
                'Content-Type': 'application/json'
            }
        }
    )
    
    const data = await res.json();
    return data
}

