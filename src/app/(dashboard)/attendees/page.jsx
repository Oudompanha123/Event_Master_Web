import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { DeleteAttendeeComponent } from "../_components/Action/DeleteAttendeeComponent";
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
  {
    id: 7,
    name: "Pok Hengly",
    gender: "Female",
    email: "hengly@gmail.com",
    address: "Banteay Meanchey",
    phone: "095367159",
  },
];

const AttendeePage = () => {
  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between mt-2 px-[3px]">
        <div className="lg:w-[650px] md:w-full">
          <a className="font-semibold md:text-lg text-primary-text">
            Show All Attendees in Sport Event
          </a>
        </div>
        <div className="w-full flex justify-end mt-6 lg:mt-0">
          <div className="w-full lg:w-[730px] ">
            <input
              type="text"
              placeholder="Search by name or phone number"
              className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
            />
            <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto px-[3px]">
        <table className="table w-full mt-5 border-separate border-spacing-y-3">
          <thead className="h-14 drop-shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
          <tr className="text-xs lg:text-base">
              <th className=" px-5 py-2 font-medium rounded-l-radiusUi">ID</th>
              <th className=" px-5 py-2 font-medium">NAME</th>
              <th className=" px-5 py-2 font-medium">GENDER</th>
              <th className=" px-5 py-2 font-medium">EMAIL</th>
              <th className=" px-5 py-2 font-medium">ADDRESS</th>
              <th className=" px-5 py-2 font-medium">PHONE NUMBER</th>
              <th className=" px-5 py-2 font-medium rounded-r-radiusUi">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {attendees.map((attendee, index) => (
              <tr key={attendee.id} className={`h-14 drop-shadow-soft rounded-radiusUi odd:bg-softwhiteUi even:bg-white`}>
                <td className=" px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">
                  {attendee.id}
                </td>
                <td className=" px-5 py-2 text-xs xl:text-base">
                  {attendee.name}
                </td>
                <td className=" px-5 py-2 text-xs xl:text-base">
                  {attendee.gender}
                </td>
                <td className=" px-5 py-2 text-xs xl:text-base">
                  {attendee.email}
                </td>
                <td className=" px-5 py-2 text-xs xl:text-base">
                  {attendee.address}
                </td>
                <td className=" px-5 py-2 text-xs xl:text-base">
                  {attendee.phone}
                </td>
                <td className=" px-5 py-2 text-xs xl:text-base rounded-r-radiusUi">
                  <DeleteAttendeeComponent />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendeePage;
