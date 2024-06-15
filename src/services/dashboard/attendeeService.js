// Get Attendee By EventId
export const getAttendeeByEventIdService = async (id) => {
  const res = await fetch(`${process.env.API_URL}attendees/${id}`, {
    cache: "no-store",
    headers: {
      Authorization:
        " Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ",
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

// Delete Attendee By Id
export const DeleteAttendeeService = async (attendeeId) => {
  const res = await fetch(`${process.env.API_URL}attendees/${attendeeId}`, {
    next: { tags: ["attendee"] },
    method: "DELETE",
    headers: {
      Authorization:
        " Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ",
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // console.log("Data:", data);
  return data;
};

// Search Attendee service by name or phone number
export const SearchAttendeeByNameOrPhoneService = async (id, attendeeNameOrPhone ) => {
  const res = await fetch(
    `${process.env.API_URL}attendees/search?eventId=${id}&attendeeNameOrPhone=${attendeeNameOrPhone}&offset=1&limit=7`,
    {
      next: {tags: ['attendee']},
      cache: "no-store",
      headers: {
        Authorization:
          " Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDIsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IkQ1Q1VRUiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDIsIm1lbWJlcklkIjo2MCwic3ViIjoicGVuZ2NoaGFpdGl0aEBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNjEwMjksImV4cCI6MTcxOTEyNTAyOX0.YpGls2D8r4NUe0yKLupmuD0YnsrjIMpZOYn-ju7HRaQ",
          "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};
