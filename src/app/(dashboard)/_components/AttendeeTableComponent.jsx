import React from "react";
import { DeleteAttendeeComponent } from "./Action/DeleteAttendeeComponent";
import Image from "next/image";

const AttendeeTableComponent = ({
  parentData,
  userRole,
  attendeeInEvent,
  isSearch,
}) => {
  const attendees = parentData?.payload || [];

  return (
    <div>
      <table className="table w-full px-1 border-separate border-spacing-y-3 mt-5">
        <thead className="h-14 shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
          <tr className="text-xs lg:text-base">
            <th className="px-5 py-2 font-medium rounded-l-radiusUi">NO</th>
            <th className="px-5 py-2 font-medium">NAME</th>
            <th className="px-5 py-2 font-medium">GENDER</th>
            <th className="px-5 py-2 font-medium">EMAIL</th>
            <th className="px-5 py-2 font-medium">PHONE NUMBER</th>
            <th className="px-5 py-2 font-medium rounded-r-radiusUi">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {isSearch && attendees.length === 0 && (
            <tr>
              <td colSpan="6">
                <div className="justify-center w-full h-[595px] content-center space-y-2 pb-10 flex flex-col items-center">
                  <Image
                    src="/images/Search.gif"
                    alt="empty image"
                    width={180}
                    height={180}
                    priority
                  />
                  <p className="text-center text-2xl font-semibold text-primary-text">
                    No results found
                  </p>
                  <p className="text-center text-xl text-gray-500">
                    Please try another search!
                  </p>
                </div>
              </td>
            </tr>
          )}
          {!isSearch && attendeeInEvent === 0 && (
            <tr>
              <td colSpan="6">
                <div className="justify-center w-full h-[595px] content-center space-y-2 pb-10 flex flex-col items-center">
                  <Image
                    src="/images/Search.gif"
                    alt="empty image"
                    width={180}
                    height={180}
                    priority
                  />
                  <p className="text-center text-2xl font-semibold text-primary-text">
                    No attendees found for this event
                  </p>
                </div>
              </td>
            </tr>
          )}
          {attendees.length > 0 &&
            attendees.map((attendeeWrapper, index) => {
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
                    {attendee.phone}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base rounded-r-radiusUi">
                    <DeleteAttendeeComponent
                      attendeeId={attendeeWrapper.attendeeId}
                      userRole={userRole}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AttendeeTableComponent;
