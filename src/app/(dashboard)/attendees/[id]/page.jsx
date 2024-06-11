import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { DeleteAttendeeComponent } from "../../_components/Action/DeleteAttendeeComponent";
import { getAttendeeByEventIdService } from "@/services/dashboard/attendee.service";
import { Pagination } from "../../_components/Pagination";

const AttendeePage = async ({ params: { id } }) => {
  const attendeeData = await getAttendeeByEventIdService(id);
  // const eventData = await getEventById(id);
  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between px-[3px]">
        <div className="lg:w-[650px] md:w-full w-full">
          <a className="md:text-lg xl:text-xl font-semibold text-primary-text">
            {/* Show All Attendees in {eventData.eventName} */}
            Show All Attendees in Sport Event
          </a>
        </div>
        <div className="w-full flex justify-end lg:mt-0 mt-3">
          <div className="relative w-full lg:w-[450px]">
            <input
              type="text"
              placeholder="Search by name or phone number"
              className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
            />
            <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
          </div>
        </div>
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
            {attendeeData.payload.map((attendeeWrapper, index) => {
              const attendee = attendeeWrapper.data;
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
                    <DeleteAttendeeComponent />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex justify-end mt-8">
         <Pagination/>
        </div>
      </div>
    </div>
  );
};

export default AttendeePage;
