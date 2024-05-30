import React from "react";
import { FaRegEdit } from "react-icons/fa";
import AgendaComponent from "../_components/AgendaComponet";

const Page = async ({ params: { id } }) => {
  return (
    <main>
      <div className=" rounded-2xl bg-white shadow-md z-0 pt-[2%] px-[2%]">
        <div className=" m-auto w-full rounded-2xl h-[50%] bg-white shadow-[#D5D4DC] shadow  pt-4 ">
          <div
            className="w-[96%] ml-[2%] h-68 bg-cover bg-center rounded-3xl flex justify-end p-3 mb-2 "
            style={{
              backgroundImage:
                `url(https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/a_organizer_event--creator-eventbrite-.webp)`,
              height: "256px",
            }}
            alt="Event Photo"
           >
            <div className=" bg-white rounded-full bg-opacity-80	 right-5 w-10 h-10 items-center pl-1	flex flex-row justify-center">
              <FaRegEdit size="20" color="#344054" />
            </div>
          </div>

          <div className="flex justify-between px-5">
            <div className="text-primary-text font-semibold text-2xl">
              Design Skill & Tech Session{" "}
            </div>
            <span class="inline-block bg-blue-200 rounded-full px-5 py-1 text-lg font-normal text-blueUi">
              Open
            </span>
          </div>
          <div className="ml-5 text-primary-text font-light mr-28">
            Join us for an engaging and insightful session where creativity
            meets technology! Our Design Skill & Tech Session is tailored for
            professionals and enthusiasts looking to enhance their design
            capabilities with cutting-edge technological tools.
          </div>
          <p className="text-primary-text font-light ml-5 mt-5">
            <span className="text-primary-text font-bold mr-2">Location: </span>
            Street 128, Toul Kok, Phnom Penh
          </p>
          <button className="px-5 py-3 rounded-full bg-blue-200 text-blueUi ml-5 m-5">
            02 August 2023
          </button>   
        </div>
        <AgendaComponent />
      </div>
    </main>
  );
};

export default Page;
