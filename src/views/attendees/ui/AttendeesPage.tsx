import {
  getAttendeeByEventIdService,
  searchAttendeeByNameOrPhoneService,
} from "@/entities/attendee/api/attendeeService";
import SearchAttendeeComponent from "@/features/attendee/search/ui/SearchAttendeeComponent";
import { AttendeeTable } from "@/widgets/attendee-table/ui/AttendeeTable";
import { getEventById } from "@/entities/event/api/landingService";
import { getServerSession } from "next-auth";
import { authOption } from "@/shared/config/auth";
import { jwtDecode } from "jwt-decode";

export default async function AttendeePage(props) {
  const { id } = await props.params;
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = searchParams?.page;

  const attendeeData = await getAttendeeByEventIdService(id, page);
  const eventData = await getEventById(id);

  const searchAttendee = query
    ? await searchAttendeeByNameOrPhoneService(id, query)
    : attendeeData;

  let headerResponse = await searchAttendeeByNameOrPhoneService(id, "");
  let header = headerResponse?.payload?.[0]?.data
    ? Object.keys(headerResponse.payload[0].data)
    : [];

  const session = await getServerSession(authOption);

  let userInfo = jwtDecode(session?.user?.token);
  const userRole = userInfo.role;

  const isSearch = !!query;

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
      <div className="w-full">
        <AttendeeTable
          data={searchAttendee?.payload}
          totalRecord={isSearch ? undefined : attendeeData?.totalRecord}
          header={header}
          userRole={userRole}
          isSearch={isSearch}
        />
      </div>
    </div>
  );
}
