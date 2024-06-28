import React from "react";
import { DeleteAttendeeComponent } from "./Action/DeleteAttendeeComponent";
import Image from "next/image";

const reorderFields = (fields) => {
  const priorityFields = ["name", "fullname"];
  const priorityField = priorityFields.find((field) => fields.includes(field));
  if (priorityField) {
    return [
      priorityField,
      ...fields.filter((field) => field !== priorityField),
    ];
  }
  return fields;
};

const AttendeeTableComponent = ({
  parentData,
  userRole,
  attendeeInEvent,
  isSearch,
  header,
  page,
}) => {
  let attendees = parentData?.payload || [];
  let temp = header;

  if (attendees.length > 0) {
    temp = reorderFields(temp);
  }

  let tableHeaders = ["NO", ...temp];
  if (userRole !== "ROLE_USER") {
    tableHeaders.push("ACTION");
  }

  header = attendees.length > 0 ? Object.keys(attendees[0].data) : [];

  if (attendees.length > 0) {
    header = reorderFields(header);
  }

  const hasManyColumns = tableHeaders.length > 6;
  const isNoData =
    (isSearch && attendees.length === 0) ||
    (!isSearch && attendeeInEvent === 0);

  return (
    <div
      className={`overflow-y-auto ${isNoData ? "fixed-width" : "h-[600px]"}`}
    >
      <table
        className={`table min-w-full border-separate border-spacing-y-3 mt-5 p-1 ${
          hasManyColumns ? "w-screen table-auto" : "w-auto table-fixed"
        }`}
      >
        {(attendees.length > 0 || (isSearch && attendees.length === 0)) && (
          <thead className="h-14 shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
            <tr className="text-xs lg:text-base">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`px-5 py-2 font-medium ${
                    index === 0
                      ? "rounded-l-radiusUi"
                      : index === tableHeaders.length - 1
                      ? "rounded-r-radiusUi"
                      : ""
                  } ${hasManyColumns ? "w-auto" : "w-1/6"}`}
                >
                  {header.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {isSearch && attendees.length === 0 && (
            <tr>
              <td colSpan={tableHeaders.length}>
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
              <td colSpan={tableHeaders.length}>
                <div className="justify-center h-[595px] content-center space-y-2 pb-10 flex flex-col items-center">
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
              const reorderedAttendee = reorderFields(
                Object.keys(attendee)
              ).reduce((acc, key) => {
                acc[key] = attendee[key];
                return acc;
              }, {});

              return (
                <tr
                  key={attendeeWrapper.attendeeId}
                  className={`h-14 shadow-soft rounded-radiusUi odd:bg-softwhiteUi even:bg-white text-primary-text`}
                >
                  <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">
                    {page > 1 ? index + 1 + 8 * (page - 1) : index + 1}
                  </td>

                  {header.map((field, fieldIndex) => (
                    <td
                      key={fieldIndex}
                      className="px-5 py-2 text-xs lg:text-base"
                    >
                      {reorderedAttendee[field]}
                    </td>
                  ))}
                  {userRole !== "ROLE_USER" && (
                    <td className="px-5 py-2 text-xs lg:text-base rounded-r-radiusUi">
                      <DeleteAttendeeComponent
                        attendeeId={attendeeWrapper.attendeeId}
                        userRole={userRole}
                      />
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AttendeeTableComponent;
