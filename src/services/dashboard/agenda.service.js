// import { ZCOOL_KuaiLe } from "next/font/google";

export const getAgendaByEventId = async (id) => {
  try {
    console.log("The event id is", id);
    const res = await fetch(`${process.env.API_URL}agendas/${id}`, {
      cache: "no-store",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ",
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching the agenda data:", error);
  }
};


export const CreateAgendaService = async (data, id) => {
  // console.log("event id is :",id)
  try {
    const res = await fetch(`${process.env.API_URL}agendas/${id}`, {
      method: "POST",
      headers: {
        Authorization : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ`, // Assuming you store the token in an environment variable
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw `Error: ${errorText}`;
    }

    const dataAgenda = await res.json();
    return dataAgenda;
  } catch (error) {
    console.error("There was an error creating the agenda:", error);
    throw error;
  }
};

export const DeleteAgendaService = async (id) => {
  console.log("agenda event id is:", id);
  // const session = await getServerSession(authOption);
  try {
    const res = await fetch(`${process.env.API_URL}agendas/${id}`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Data reponse agenda service ", data);
    return data;
  } catch (err) {
    console.log("error agenda service", err);
  }
};

export const UpdateAgendaService = async (data, id) => {
  // console.log("event id is :",id)
  try {
    const res = await fetch(`${process.env.API_URL}agendas/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ`, // Assuming you store the token in an environment variable
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw `Error: ${errorText}`;
    }

    const dataAgenda = await res.json();
    return dataAgenda;
  } catch (error) {
    console.error("There was an error updating the agenda:", error);
    throw error;
  }
};
