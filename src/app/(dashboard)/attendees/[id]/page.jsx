import {getAttendeeByEventIdService} from "@/services/dashboard/attendeeService";
// import { getEventById } from "@/services/clientPage/landingService";
import SearchAttendeeComponent from "../../_components/SearchAttendeeComponent";
import { Pagination } from "../../_components/paginate/Pagination";
import AttendeeTableComponent from "../../_components/AttendeeTableComponent";
// import { searchAttendeeAction } from "@/actions/attendeeAction";
// import { getAllEventsService } from "@/services/dashboard/event.service";
import { getEventById } from "@/services/clientPage/landingService";
// import { searchAttendeeAction } from "@/actions/attendeeAction";

export default async function AttendeePage  ({params: { id }}) {
  const attendeeData = await getAttendeeByEventIdService(id);
  // console.log("Search Params:",searchParams)
  const eventData = await getEventById(id);
  // console.log("Data of Event:",eventData)
  // const eventData = await getAllEventsService();
  // const query = searchParams?.query || '';
  // const searchAttendee = await searchAttendeeAction(id,searchParams);
  // console.log("EventData:",eventData)
  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between px-[3px]">
        <div className="lg:w-[650px] md:w-full w-full">
          <a className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Show All Attendees in {eventData.payload.eventName} Event
          </a>
        </div>
        <SearchAttendeeComponent/>
      </div>
      <div className="w-full overflow-scroll">
        <AttendeeTableComponent  parentData={attendeeData}/>
        <div className="w-full flex justify-end mt-8">
          <Pagination/>
        </div>
      </div>
    </div>
  );
};

// eventData={id} attendeeNameOrPhone={searchParams}