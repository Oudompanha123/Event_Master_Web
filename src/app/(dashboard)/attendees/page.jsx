import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { DeleteComponent } from "../_components/DeleteAttendeeComponent";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const attendees = [
  {
    id: 1,
    name: "Morng Many",
    gender: "Female",
    email: "many@gmail.com",
    address: "Phnom Penh",
    phone: "0968672198",
  },
  {
    id: 2,
    name: "Ly Nita",
    gender: "Female",
    email: "nita@gmail.com",
    address: "Prey Veng",
    phone: "0889789176",
  },
  {
    id: 3,
    name: "Ra Dalin",
    gender: "Female",
    email: "dalin@gmail.com",
    address: "Prey Veng",
    phone: "0987898123",
  },
  {
    id: 4,
    name: " Ny Daro",
    gender: "Male",
    email: "daro@gmail.com",
    address: "Kampot",
    phone: "0921893589",
  },
  {
    id: 5,
    name: "Sok Bora",
    gender: "Male",
    email: "bora@gmail.com",
    address: "Siem Reap",
    phone: "0869827145",
  },
  {
    id: 6,
    name: "Pheak Nary",
    gender: "Female",
    email: "nary@gmail.com",
    address: "Phnom Penh",
    phone: "0123065987",
  },
];

const AttendeePage = () => {
  return (
    <div className="border w-[100%] h-[600px] rounded-radiusUi">
      <div className=" flex justify-between m-5">
        <div className="w-[650px] ">
          <a className="font-semibold text-2xl">
            Show All Attendees in Sport Event
          </a>
        </div>
        <div className="w-full flex justify-end">
          <div>
            <input
              type="text"
              placeholder="Search by name"
              className="font-medium text-lg w-[440px] h-10 border rounded-3xl pl-10"
            />
            <FiSearch className="w-[24px] h-[24px] -mt-8 ml-2" />
          </div>
        </div>
      </div>
      <div className="table ">
        <div className="head w-[97%] h-[62px] m-auto bg-[#FFFFFF] border grid grid-cols-7 rounded-2xl gap-4 p-5">
          <span className="font-semibold text-base">ID</span>
          <span className="font-semibold text-base">NAME</span>
          <span className="font-semibold text-base">GENDER</span>
          <span className="font-semibold text-base">EMAIL</span>
          <span className="font-semibold text-base">ADDRESS</span>
          <span className="font-semibold text-base">PHONE NUMBER</span>
          <span className="font-semibold text-base">ACTION</span>
        </div>
        {attendees.map((attendee, index) => (
          <div
            key={attendee.id}
            className={`body w-[97%] h-[62px] m-auto border grid grid-cols-7 rounded-lg gap-4 p-5 mt-3 ${
              index % 2 === 0 ? "bg-[#F4F4F4]" : "bg-[#FFFFFF]"
            }`}
          >
            <span className="font-medium text-base">{attendee.id}</span>
            <span className="font-medium text-base">{attendee.name}</span>
            <span className="font-medium text-base">{attendee.gender}</span>
            <span className="font-medium text-base">{attendee.email}</span>
            <span className="font-medium text-base">{attendee.address}</span>
            <span className="font-medium text-base">{attendee.phone}</span>
            <span className="font-medium text-base">
              <DeleteComponent />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AttendeePage;
