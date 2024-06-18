
import { headerToken } from "@/app/api/auth/headerToken";
// Get Attendee By EventId
export const getAttendeeByEventIdService = async (eventId) => {
  // console.log("id in event for get attendee by event id:",id)
  console.log("EVENT ID: ", eventId)
  const header = await headerToken()
  const res = await fetch(`${process.env.API_URL}attendees/${eventId}`, {
    cache: "no-store",
    headers: header
  });

  const data = await res.json();
  // console.log("Data in attendee:",data)
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
export const searchAttendeeByNameOrPhoneService = async (id, attendeeNameOrPhone ) => {
  // console.log("id in event for search attendee by name or phone:",id)
  // console.log("Name or Phone: ",attendeeNameOrPhone);
  const header = await headerToken()
  const res = await fetch(
    `${process.env.API_URL}attendees/search?eventId=${id}&attendeeNameOrPhone=${attendeeNameOrPhone}&offset=1&limit=8`,
    // http://34.124.203.109:8081/api/attendees/search?eventId=62&attendeeNameOrPhone=R&offset=1&limit=8
    {
      method: "GET",
      headers: header,
      cache: "no-store",
      next: { tags: ["attendee"] },
      // 
    
      // body: JSON.stringify(id, attendeeNameOrPhone ),
    }
  );
  const data = await res.json();
  console.log("Data Attendee:", data);
  return data;
};
