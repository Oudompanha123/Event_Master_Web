'use server'

export const updateOrganization = async (id, organizationData) => {
  const response = await fetch(
    `${process.env.API_URL}profiles/update-organization/${id}`,
    {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NTYsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkxQTWY0RyIsImFkZHJlc3MiOiJQaG5vbSBQZW5oIiwibG9nbyI6Ii9pbWFnZXMvZGVmYXVsdC1sb2dvLnBuZyJ9LCJvcmdJZCI6NTYsIm1lbWJlcklkIjo3OCwic3ViIjoic292YW5uZGF2aW4ubW9ybkBnbWFpbC5jb20iLCJpYXQiOjE3MTg3NjU4MzYsImV4cCI6MTcxOTYyOTgzNn0.uk4An3iLXUupXu3yCsIjoKxoz-YEjvx2qnnqpYEgOEM",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(organizationData),
    }
  );
  const test = await response.json()
  console.log('checking', test)
  return test;
};
