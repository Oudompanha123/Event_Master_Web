import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { getAttendeeByEventIdService, searchAttendeeByNameOrPhoneService } from "@/entities/attendee/api/attendeeService";
import { getEventById } from "@/entities/event/api/landingService";
import SearchAttendeeComponent from "@/features/attendee/search/ui/SearchAttendeeComponent";
import { AttendeeTable } from "@/widgets/attendee-table/ui/AttendeeTable";
import { authOption } from "@/shared/config/auth";
import { PageSection } from "@/shared/ui/page-section";

export default async function AttendeePage(props) {
  const { id } = await props.params;
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = searchParams?.page;
  const isSearch = !!query;

  // the column list comes from the first attendee's form answers (an empty search returns all)
  const [attendeeData, eventData, headerResponse, session] = await Promise.all([
    isSearch ? searchAttendeeByNameOrPhoneService(id, query) : getAttendeeByEventIdService(id, page),
    getEventById(id),
    searchAttendeeByNameOrPhoneService(id, ""),
    getServerSession(authOption),
  ]);
  const header = headerResponse?.payload?.[0]?.data ? Object.keys(headerResponse.payload[0].data) : [];
  const userRole = jwtDecode(session?.user?.token).role;

  return (
    <PageSection
      title="Attendees"
      description={eventData?.payload?.eventName}
      actions={<SearchAttendeeComponent className="lg:max-w-md" />}
    >
      <AttendeeTable
        data={attendeeData?.payload}
        totalRecord={isSearch ? undefined : attendeeData?.totalRecord}
        header={header}
        userRole={userRole}
        isSearch={isSearch}
      />
    </PageSection>
  );
}
