
export const getAllEventsService = async () => {
    const res = await fetch(`${process.env.API_URL}events`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODYyMzQ3MywiZXhwIjoxNzE5NDg3NDczfQ.fYmp60AjMunmBFMJW3F0Mo-of2IGE_cjH8d7SZvOajQ',
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
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODYyMzQ3MywiZXhwIjoxNzE5NDg3NDczfQ.fYmp60AjMunmBFMJW3F0Mo-of2IGE_cjH8d7SZvOajQ',
                'Content-Type': 'application/json'
            }
        }
    )
    
    const data = await res.json();
    return data
}


export const deleteEventById = async (eventId) => {
    const res = await fetch(`http://34.124.203.109:8081/api/events/${eventId}`,
        {
            next: { tags: ['events'] },
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODI2NDIxMiwiZXhwIjoxNzE5MTI4MjEyfQ.dD5WOgQP3q82Uxu2rgqaN0s-qGuGqzwHcbKymRAsKWM',
            }
        }
    ) 
}

export const findEventByName = async (eventName) => {
    console.log("data service", eventName);
    const res = await fetch(
      `${process.env.API_URL}events/search?name=${eventName}?offset=1&limit=15&eventName=STRING`,
      {
        next: { tags: ["events"] },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODQyNTE0OCwiZXhwIjoxNzE5Mjg5MTQ4fQ.6Z96_ubutGmtJGtt3RQXy-EH4u85-6YggioNOsRT3eA",
        },
        body: JSON.stringify(eventName),
      }
    );
    const data = await res.json();
    console.log("respone", data);
    return data;
  };
  

export const updateEventService = async (eventId, newEvent) => {
    console.log("Updating event:", eventId , newEvent);
    const res = await fetch(`${process.env.API_URL}events/update/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODY5MzYzOCwiZXhwIjoxNzE5NTU3NjM4fQ.EttT3JP5mo8plVzXkHILfkfeghmo0K0UFC9KEGlad0s",
      },
      body: JSON.stringify(newEvent),
    });
    const data = await res.json();
    console.log("response", data);
    return data;
  };



