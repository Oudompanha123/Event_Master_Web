"use client";
import { useEffect, useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";


import Image from "next/image";
import mockEventService from "../mockEventService";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  return { day, month };
};

export default function CardEventComponent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { payload: eventData } = await mockEventService();
      setEvents(eventData);
    };

    fetchEvents();
  }, []);

  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((data, index) => {
        const { day, month } = formatDate(data.startDate);

        return (
          <div key={index} >
            <div className="flex px-1 py-4 ">
              <div className=" rounded-3xl overflow-hidden shadow-lg">
                <div className="relative">
                  <img
                    className="w-96 h-64 "
                    src={
                      data.poster ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBGllWt0n1yYrdtFMm8fqhRj0qLgefOQ7o03nqyMr-SQG4Z6AvPgn8y2_svqIGGKEBVQ&usqp=CAU"
                    }
                    alt="Event Photo"
                  />
                  <div className="text-sm absolute top-0 bg-white text-primary-text rounded-xl h-11 w-10 flex flex-col items-center justify-center mt-3 ml-3">
                    <span className="font-semibold">{day}</span>
                    <small className="text-red-500 font-semibold">
                      {month}
                    </small>
                  </div>

                  <div className="dropdown dropdown-end absolute top-3 right-3 rounded-full bg-white w-8 h-8 text-center align-middle">
                    <div tabIndex={0} role="button">
                      <IoEllipsisHorizontal className="m-auto w-4 h-8" />
                    </div>

                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-1 mt-1 shadow bg-base-100 rounded-box w-40"
                    >
                      <li>
                        <a>
                          <FaRegEdit size={17} color="green" className="mr-2" />
                          <p>Update</p>
                        </a>
                      </li>
                      <hr />
                      <li>
                        <a>
                          <RiDeleteBinLine
                            size={17}
                            color="red"
                            className="mr-2"
                          />
                          <p>Delete</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="px-3 w-full">
                  <div className="flex gap-3 justify-between mt-5">
                    <div className="font-bold primary-text w-[70%] line-clamp-1 ">
                      {data.eventName}
                    </div>

                    <span
                      className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${
                        data.isOpen
                          ? "bg-blue-100 text-blue-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {data.isOpen ? "Open" : "Closed"}
                    </span>
                  </div>

                  <p className="text-gray-700 text-sm px-1 mt-3 flex gap-2">
                    <Image
                      className="relative"
                      src="/location.svg"
                      alt="Location"
                      width={17}
                      height={10}
                      priority
                    />
                    <span className="mt-2">{data.address}</span>
                  </p>
                </div>
                <div className="flex gap-4 px-5 pt-5 pb-7 mt-6">
                  <button className="flex-1 rounded-full border-purple-text border-[1px] text-purple-text antialiased py-1 text-sm">
                    View all attendees
                  </button>
                  <button className="flex-1 rounded-full bg-purple-text text-white py-2 text-sm">
                    View event detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
