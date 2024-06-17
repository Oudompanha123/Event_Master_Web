import { data } from "autoprefixer";
import { log } from "console";


export const getAllEventsService = async () => {
    const res = await fetch(`${process.env.API_URL}events`,
        {
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODIxMTY0NiwiZXhwIjoxNzE5MDc1NjQ2fQ.-8kl8QdWxyr4fWncAhKRUvyDOfWOJpZbQJ62zzIVLZ4',
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
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6ImhWZzFsVyIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDcsIm1lbWJlcklkIjo2NSwic3ViIjoibml0YWx5MDg2QGdtYWlsLmNvbSIsImlhdCI6MTcxODQyNTE0OCwiZXhwIjoxNzE5Mjg5MTQ4fQ.6Z96_ubutGmtJGtt3RQXy-EH4u85-6YggioNOsRT3eA",
      },
      body: JSON.stringify(newEvent),
    });
    const data = await res.json();
    console.log("response", data);
    return data;
  };



