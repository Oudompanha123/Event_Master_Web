import React from 'react'
import { DeleteAttendeeComponent } from './Action/DeleteAttendeeComponent';
// import { searchAttendeeByNameOrPhoneService } from '@/services/dashboard/attendeeService';
const AttendeeTableComponent = async({parentData}) => {
    // console.log("querySearch", querySearch);
    // const searchAttendee = await searchAttendeeByNameOrPhoneService(querySearch);
    // querySearch = "" ? parentData : searchAttendee;
  return (
    <div>
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
            {parentData?.payload.map((attendeeWrapper, index) => {
              const attendee = attendeeWrapper?.data;
            {}
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
    </div>
  )
}

export default AttendeeTableComponent
