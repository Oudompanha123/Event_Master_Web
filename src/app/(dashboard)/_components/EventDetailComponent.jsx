"use client";
import React, { useEffect, useState } from "react";
import mockEventService from "../mockEventService";
// Adjust the path as necessary

export const EventDetail = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      const data = await mockEventService();
      // Assuming you want to display the first event from the payload
      setEvent(data.payload[0]);
    };

    fetchEventData();
  }, []);

  if (!event) {
    return (
      <div class="flex justify-center items-center h-screen">
        <div class="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="m-auto w-full rounded-3xl h-[50%] bg-white shadow-[#D5D4DC] shadow py-5 ">
      <div
        className="w-[96%] ml-[2%] h-68 bg-cover bg-center rounded-2xl flex justify-end p-3 mb-4"
        style={{
          backgroundImage: `url(${event.poster})`,
          height: "256px",
        }}
        alt="Event Photo"
      >
        <div className="bg-white rounded-full bg-opacity-80 right-5 w-10 h-10 items-center  flex flex-row justify-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.0378 0.720099C17.0731 -0.240546 15.5097 -0.239958 14.5457 0.721415L7.0903 8.15835C6.49401 8.75305 6.14344 9.54915 6.10796 10.3891L6.00182 12.9018C5.9535 14.046 6.87116 14.9998 8.02025 14.9999L10.4924 15C11.4 15 12.2692 14.6349 12.9029 13.9874L20.2984 6.40804C21.2425 5.44344 21.2326 3.90152 20.2761 2.94907L18.0378 0.720099ZM15.4985 1.67018C15.9366 1.23319 16.6473 1.23293 17.0858 1.66958L19.3241 3.89856C19.7588 4.33149 19.7634 5.03236 19.3342 5.47082L17.8489 6.98837L14.0046 3.16008L15.4985 1.67018ZM13.0526 4.10956L8.04304 9.10711C7.68526 9.46393 7.47492 9.9416 7.45363 10.4456L7.3475 12.9583C7.33139 13.3397 7.63728 13.6576 8.02031 13.6576L10.4924 13.6577C11.037 13.6578 11.5585 13.4387 11.9388 13.0502L16.9084 7.94931L13.0526 4.10956Z"
              fill="#344054"
            />
            <path
              d="M19 11V15C19 17.7614 16.7614 20 14 20H6C3.23858 20 1 17.7614 1 15V7C1 4.23858 3.23858 2 6 2H10"
              stroke="#344054"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-between px-5 mb-1">
        <div className="text-primary-text font-semibold text-2xl w-[100%] text-wrap">
          {event.eventName}
        </div>
        <span
          className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${
            event.isOpen
              ? "bg-blue-100 text-blue-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {event.isOpen ? "Open" : "Closed"}
        </span>
      </div>
      <div className="ml-5 text-primary-text font-light mr-28">
        {event.description}
      </div>
      <p className="text-primary-text font-light ml-5 mt-5">
        <span className="text-primary-text font-bold mr-2">Location:</span>
        {event.address}
      </p>
      <button className="px-5 py-3 rounded-full bg-blue-200 text-blueUi ml-5 mx-5  mt-5">
        {formatDate(event.startDate)}
      </button>
    </div>
  );
};
