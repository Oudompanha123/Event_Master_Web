// "use client"
import React from "react";
import { DeleteAttendeeComponent } from "../../_components/Action/DeleteAttendeeComponent";
import { getAttendeeByEventIdService } from "@/services/dashboard/attendeeService";
// import { Pagination } from "../../_components/Pagination";
import { getEventById } from "@/services/clientPage/landingService";
import SearchAttendeeComponent from "../../_components/SearchAttendeeComponent";
import { Pagination } from "../../_components/paginate/Pagination";
// import { AttendeePageComponent } from "../../_components/AttendeePageComponent";

const AttendeePage = async ({ params: { id } }) => {
  // const [currentPage,setCurrentPage]=useState(1);
  // const recordPersPage = 7;
  // const lastIndex = currentPage*recordPersPage;
  // const firstIndex= lastIndex - recordPersPage;
  // const records= attendeeData.slice(firstIndex,lastIndex);
  // const npage = Math.ceil(attendeeData.length/recordPersPage);
  // const numbers = [...Array(npage+1).keys].slice(1);
  let attendeeData = await getAttendeeByEventIdService(id);
  const eventData = await getEventById(id);

  // function searchAttendee(attendeeFromSearch){
  //   attendeeData = attendeeFromSearch;
  // }

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
        <table className="table w-full px-1 border-separate border-spacing-y-3 mt-5">
          <thead className="h-14 shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
            <tr className="text-xs lg:text-base">
              <th className=" px-5 py-2 font-medium rounded-l-radiusUi">NO</th>
              <th className=" px-5 py-2 font-medium">NAME</th>
              <th className=" px-5 py-2 font-medium">GENDER</th>
              <th className=" px-5 py-2 font-medium">EMAIL</th>
              <th className=" px-5 py-2 font-medium">ADDRESS</th>
              <th className=" px-5 py-2 font-medium">PHONE NUMBER</th>
              <th className=" px-5 py-2 font-medium rounded-r-radiusUi">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {attendeeData?.payload.map((attendeeWrapper, index) => {
              const attendee = attendeeWrapper?.data;
            
              return (
                <tr
                  key={attendeeWrapper.attendeeId}
                  className={`h-14 shadow-soft rounded-radiusUi odd:bg-softwhiteUi even:bg-white text-primary-text`}
                >
                  <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">
                    {index + 1}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {attendee.name}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {attendee.gender}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {attendee.email}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {attendee.Address}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {attendee.Phone}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base rounded-r-radiusUi">
                    <DeleteAttendeeComponent
                      attendeeId={attendeeWrapper.attendeeId}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex justify-end mt-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default AttendeePage;
