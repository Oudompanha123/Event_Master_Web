import { headerToken } from "@/app/api/auth/headerToken";
export const getAttendeeByEventIdService = async (eventId, page) => {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.API_URL}attendees/${eventId}?offset=${
      page ? page : 1
    }&limit=8`,
    {
      cache: "no-store",
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};
export const DeleteAttendeeService = async (attendeeId) => {
  const header = await headerToken();
  const res = await fetch(`${process.env.API_URL}attendees/${attendeeId}`, {
    next: { tags: ["attendee"] },
    method: "DELETE",
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const searchAttendeeByNameOrPhoneService = async (
  id,
  attendeeNameOrPhone
) => {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.API_URL}attendees/search?eventId=${id}&attendeeNameOrPhone=${attendeeNameOrPhone}`,
    {
      method: "GET",
      headers: header,
      next: { tags: ["attendee"] },
    }
  );
  const data = await res.json();
  return data;
};

