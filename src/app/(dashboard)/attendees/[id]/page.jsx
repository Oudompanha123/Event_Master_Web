import {
  getAttendeeByEventIdService,
  searchAttendeeByNameOrPhoneService,
} from "@/services/dashboard/attendeeService";
import SearchAttendeeComponent from "../../_components/SearchAttendeeComponent";
// import { Pagination } from "../../_components/paginate/Pagination";
import AttendeeTableComponent from "../../_components/AttendeeTableComponent";
import { getEventById } from "@/services/clientPage/landingService";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { jwtDecode } from "jwt-decode";
import { RPaginate } from "../../_components/paginate/RPaginate";

export default async function AttendeePage({ params: { id }, searchParams }) {
  // const page = searchParams?.page;
  // console.log("page:",page)
  const query = searchParams?.query || "";
  const page = searchParams?.page

  // Fetch data of attendees and event
  const attendeeData = await getAttendeeByEventIdService(id, page);
  const eventData = await getEventById(id);

  // search attendees that based on query
  const searchAttendee = query
    ? await searchAttendeeByNameOrPhoneService(id, query)
    : attendeeData;

  // Check role before go to attendee page
  const session = await getServerSession(authOption);
  console.log("Session :", session);
  let userInfo = jwtDecode(session?.user?.token);
  // console.log("user Info:",userInfo)
  const userRole = userInfo.role;
  // console.log("user role:",userRole)
  if (userRole !== "ROLE_ADMIN" && userRole !== "ROLE_SUB_ADMIN") {
    return (
      <div className="mainh-auto p-6 rounded-3xl">
        <p className="text-center py-10 text-red-600 font-medium text-xl">
          You do not have access to this page.
        </p>
      </div>
    );
  }

  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between px-[3px]">
        <div className="lg:w-[650px] md:w-full w-full">
          <a className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Show All Attendees in {eventData?.payload?.eventName} Event
          </a>
        </div>
        <SearchAttendeeComponent />
      </div>
      <div className="w-full overflow-scroll">
        <AttendeeTableComponent parentData={searchAttendee} eventId={id} />
        <div className="w-full flex justify-end mt-8">
          <RPaginate totalData={10}/>
        </div>
      </div>
    </div>
  );
}
