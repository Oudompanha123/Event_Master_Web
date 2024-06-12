//Get Attendee By EventId
export const getAttendeeByEventIdService = async (id) => {
    const res = await fetch(`${process.env.API_URL}attendees/${id}`,
        {
            cache: "no-store",
            headers: {
                'Authorization': ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k',
                'Content-Type': 'application/json'
            }
        }
    )
    
    const data = await res.json();
    return data
}

//Delete Attendee By Id

export const DeleteAttendeeService = async (id) => {
    console.log("attendee", id);
    // const session = await getServerSession(authOption);
    try {
      const res = await fetch(`${process.env.API_URL}attendees/${id}`, {
        cache: "no-store",
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Data reponse attendee service ", data);
      return data;
    } catch (err) {
      console.log("error attendee service", err);
    }
  };
