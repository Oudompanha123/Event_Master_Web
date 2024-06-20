import { headerToken } from "@/app/api/auth/headerToken";
// Get Attendee By EventId
export const getAttendeeByEventIdService = async (eventId, page) => {
  const header = await headerToken()
  const res = await fetch(`${process.env.API_URL}attendees/${eventId}?offset=${page ? page : 1}&limit=8`,
    {
    cache: "no-store",
    headers: header
  });
  const data = await res.json();
  console.log("data:",data);
  return data;
};

// Delete Attendee By Id
export const DeleteAttendeeService = async (attendeeId) => {
  // console.log("Attendee Id:,",attendeeId);
  const header = await headerToken()
  const res = await fetch(`${process.env.API_URL}attendees/${attendeeId}`, {
    next: { tags: ["attendee"] },
    method: "DELETE",
    headers: header,
  });
  const data = await res.json();
  // console.log("Data:", data);
  return data;
};
// Search Attendee service by name or phone number
export const searchAttendeeByNameOrPhoneService = async (id, attendeeNameOrPhone) => {
  const header = await headerToken()
  const res = await fetch(
    `${process.env.API_URL}attendees/search?eventId=${id}&attendeeNameOrPhone=${attendeeNameOrPhone}`,
    {
      method: "GET",
      headers: header,
      // cache: "no-store",
      next: { tags: ["attendee"] },
    }
  );
  const data = await res.json();
  // console.log("Data Attendee:", data.payload);
  return data;
};
