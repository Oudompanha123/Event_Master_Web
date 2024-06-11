export const getAgendaByEventId = async (id) => {
  const res = await fetch(`${process.env.API_URL}agendas/${id}`, {
    cache: "no-store",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const CreateAgendaService = async (agendaData) => {
  try {
    const res = await fetch(`${process.env.API_URL}/agendas`, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k`, // Assuming you store the token in an environment variable
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agendaData),
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There was an error creating the agenda:", error);
    throw error;
  }
};


export const DeleteAgendaService = async (id) => {
  console.log("agenda", id);
  // const session = await getServerSession(authOption);
  try {
    const res = await fetch(`http://34.124.203.109:8080/api/agendas/${id}`, {
      cache: "no-store",
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgwNDIwMjcsImV4cCI6MTcxODkwNjAyN30.uXoLW1f_guhaMR6Di1VQjFUb6QIhLyghz4HZj8GRG1k",
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

