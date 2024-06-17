// "use client";
// import { SearchAttendeeByNameOrPhoneService } from "@/services/dashboard/attendeeService";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
const SearchAttendeeComponent = () => {
  
  // const handleSearch = async (attendeeNameOrPhone) => {
  //   await SearchAttendeeByNameOrPhoneService(eventId, attendeeNameOrPhone);
  // };
  return (
    <div>
      <div className="w-full flex justify-end lg:mt-0 mt-3">
        <div className="relative w-full lg:w-[450px]">
          <input
            type="text"
            id="search"
            placeholder="Search by name or phone number"
            // onChange={
            //   handleSearch
            // }
            className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
          />
          <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
        </div>
      </div>
    </div>
  );
};
export default SearchAttendeeComponent;
