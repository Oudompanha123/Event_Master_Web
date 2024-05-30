import React from "react";
import { FaRankingStar, FaRegEdit } from "react-icons/fa";
import { HiOutlineSwatch } from "react-icons/hi";
import { TiFlashOutline } from "react-icons/ti";
import { LuClipboardCheck } from "react-icons/lu";
import { FiAlertOctagon } from "react-icons/fi";
import { AddSquare } from "iconsax-react";
import { MdDateRange, MdMoreVert } from "react-icons/md";
import {
  RiArrowDropDownLine,
  RiDeleteBinLine,
  RiContactsBookLine,
} from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import Image from "next/image";
import AgendaComponent from "../_components/AgendaComponet";

const Page = async ({ params: { id } }) => {
  return (
    <main>
      <div className="absolute w-[74%] rounded-2xl bg-white shadow-md ">
        <div className="mt-7 m-auto w-[97%] rounded-2xl h-[53%] bg-white shadow-[#D5D4DC] shadow">
          <div className="relative bg-cover">
            <img
              className="w-full rounded-lg px-5 py-5 h-72"
              src="https://images.bzyjr9ji.ext.evbdomains.com/marketing/landingpages/assets/2023/organizer/a_organizer_event--creator-eventbrite-.webp"
              alt=""
            />
            <div className=" bg-slate-100 p-2 rounded-full absolute top-5 right-5 m-3">
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
