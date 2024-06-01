"use client";
import React from "react";
import { HiOutlineSwatch } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { AddSquare, Notification } from "iconsax-react";
import Image from "next/image";
import { IoAddCircleOutline } from "react-icons/io5";
import DinamicFormComponent from "./DinamicFormComponent";
import { MaterialActionButton } from "./MaterialActionButtton";

export default function MaterialComponent() {
  return (
    <div>
      {/* Registration form */}
      <div className="flex justify-between mt-10">
        <div className="text-primary-text md:text-lg lg:text-2xl font-semibold">
          Registration Form
        </div>
      </div>
      <div className="py-5 w-full rounded-2xl h-[33%] bg-white shadow-[#D5D4DC] shadow mt-10">
        <div className="flex ml-5 ">
          <img
            className="h-4"
            src="https://em-content.zobj.net/source/microsoft-teams/337/card-index_1f4c7.png"
            alt="Location"
            priority
          />
          <p className="text-primary-text md:text-lg lg:text-xl font-semibold ml-3">
            Contact Information
          </p>
        </div>
        <div className="grid grid-cols-6 gap-10 m-5">
        
          <div class="col-span-6 sm:col-span-3">
            <label
              for="full-name"
              className=" text-sm font-semibold text-primary-text block mb-2"
            >
              Full Name <span className=" text-red-600">*</span>
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              class="border focus:outline-none text-sm rounded-2xl p-3.5 block w-full"
              placeholder="Enter full name"
              required=""
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label
              for="full-name"
              className=" text-sm font-semibold text-primary-text block mb-2"
            >
              Phone Number <span className=" text-red-600">*</span>
            </label>
            <input
              type="phone"
              name="phone-number"
              id="phone-number"
              class="border focus:outline-none text-sm rounded-2xl block w-full p-3.5"
              placeholder="Enter phone number"
              required=""
            />
          </div>
        </div>
        <div className="p-3.5 bg-blue-100 m-5 rounded-3xl flex gap-4">
          <IoAddCircleOutline size={24} color="#457EFF" />
          <button
            className=" text-blue-600 text-sm font-normal "
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Add One more activity
          </button>
        </div>
        <div>
          <DinamicFormComponent />
        </div>
      </div>

      {/* Material */}
      <div className="text-primary-text md:text-lg font-semibold text-2xl mt-10">
        Material Management
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        <div className="w-full] p-10 bg-white px-2 py-2 rounded-3xl shadow mt-5 flex">
          <div className=" bg-[#624F9D] p-2 rounded-full">
            <Image
              className=""
              src="/ranking.svg"
              alt="Next.js Logo"
              width={30}
              height={10}
              priority
            />
          </div>
          <div className=" ml-5">
            <p className=" text-primary-text font-medium">Total Material</p>
            <p className=" text-primary-text font-bold">40</p>
          </div>
        </div>
        <div className="w-full p-10 bg-white px-2 py-2 rounded-3xl shadow mt-5 flex">
          <div className="bg-[#FBBC04] p-2 rounded-full ">
            <HiOutlineSwatch size="30" color="#ffffff" />
          </div>
          <div className=" ml-5">
            <p className=" text-primary-text font-medium">Pending Material</p>
            <p className=" text-primary-text font-bold">20</p>
          </div>
        </div>
        <div className="w-full p-10 bg-white px-2 py-2 rounded-3xl shadow mt-5 flex">
          <div className="bg-[#551FFF] p-2 rounded-full">
            <TiFlashOutline size="32" color="#ffffff" />
          </div>
          <div className="ml-5">
            <p className=" text-primary-text font-medium">On Going Material</p>
            <p className=" text-primary-text font-bold">10</p>
          </div>
        </div>
        <div className="w-full p-10 bg-white px-2 py-2 rounded-3xl shadow mt-5 flex">
          <div className=" bg-[#038446] p-2 rounded-full">
            <Image
              className=""
              src="/clipboard.svg"
              alt="Next.js Logo"
              width={30}
              height={10}
              priority
            />
          </div>
          <div className=" ml-5">
            <p className=" text-primary-text font-medium">Done Material</p>
            <p className=" text-primary-text font-bold">8</p>
          </div>
        </div>
        <div className="w-full p-10 bg-white px-2 py-2 rounded-3xl shadow mt-5 flex">
          <div className=" bg-[#D72222] p-2 rounded-full">
            <Image
              className=""
              src="/warning-2.svg"
              alt="Next.js Logo"
              width={32}
              height={10}
              priority
            />
          </div>
          <div className=" ml-5">
            <p className=" text-primary-text font-medium">Issue Material</p>
            <p className=" text-primary-text font-bold">2</p>
          </div>
        </div>
      </div>
      <div class="relative">
        <div className="flex justify-between mt-10">
          <input
            class=" border-[1px] pl-10 text-primary-text rounded-full w-[50%] "
            id="username"
            type="text"
            placeholder="Search..."
          />
          <div class="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 ml-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex border border-[#8C59FE] w-[165px] gap-3 p-2.5 rounded-full ">
            <img src="/create-new.svg" alt="" />
            <p className=" text-purple-text">New Material </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div className="main bg-white h-auto rounded-3xl">
          <table className="table w-full mt-3 border-separate border-spacing-y-3">
            <thead className="text-sm font-normal h-10 drop-shadow text-primary-text bg-[#F0F1F3]">
              <tr className="">
                <th className=" py-5 rounded-l-2xl">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  NO
                </th>
                <th className=" px-10 py-3 text-start font-medium text-primary-text uppercase">
                  ITEM NAME
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  QTY
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  UNIT
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  DUE DATE
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  HANDLER
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  SUPPORTERS
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  STATUS
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text">
                  NOTE
                </th>
                <th className=" px-2 py-3 text-start font-medium text-primary-text rounded-r-2xl">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" drop-shadow rounded-md text-sm font-normal text-primary-text bg-[#ffffff]">
                <th className="rounded-l-2xl">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th className="text-sm font-normal text-primary-text">1</th>
                <th className="text-sm font-normal text-primary-text">
                  <div className="w-full">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="border text-primary-text text-sm px-2 w-32 h-12 rounded-xl font-normal focus:outline-none"
                    />
                  </div>
                </th>
                <th className="text-sm font-normal text-primary-text">
                  <div class="">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="border text-primary-text text-sm px-6 w-16 h-12 rounded-xl font-normal focus:outline-none"
                    />
                  </div>
                </th>
                <th className="text-sm font-normal text-primary-text">
                  <div class="">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="border text-primary-text text-sm px-2 w-20 h-12 rounded-xl font-normal focus:outline-none"
                    />
                  </div>
                </th>
                <th className="text-xs xl:text-sm">
                  <div class="w-full">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="border text-primary-text  w-36 h-12 font-normal rounded-xl block focus:outline-none"
                    />
                  </div>
                </th>
                <th className="text-sm font-normal text-primary-text">
                  <div className="relative w-full">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      className="border text-primary-text text-sm px-2 w-32 h-12 rounded-xl font-normal focus:outline-none pr-8"
                    />
                    <Image
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      src="/icon.svg"
                      alt="Icon"
                      width={13}
                      height={10}
                      priority
                    />
                  </div>
                </th>
                <th className="text-sm font-normal text-primary-text  ">
                  <div className="text-start bg-white border rounded-2xl w-40 h-12 text-primary-text flex space-x-24">
                    <div className="flex space-x-6 items-center ml-4">
                      <Image
                        className=" absolute "
                        src="/woman.svg"
                        alt="Handler Icon"
                        width={30}
                        height={10}
                        priority
                      />
                      <Image
                        className=" absolute"
                        src="/man.svg"
                        alt="Handler Icon"
                        width={30}
                        height={10}
                        priority
                      />
                    </div>
                    <Image
                      className=""
                      src="/icon.svg"
                      alt="Icon"
                      width={13}
                      height={10}
                      priority
                    />
                  </div>
                </th>
                <th className="h-12 mt-3 bg-white border rounded-2xl flex items-center justify-center text-sm space-x-4">
                  <div className="w-30 h-8 px-2 rounded-2xl bg-[#FBBC04] flex items-center justify-center">
                    <p className="text-white text-sm font-normal">Pending</p>
                  </div>
                  <Image
                    className=""
                    src="/icon.svg"
                    alt="Icon"
                    width={13}
                    height={10}
                    priority
                  />
                </th>

                <th className=" text-xs xl:text-sm">
                  <div class="w-full">
                    <input
                      type="text"
                      name="text"
                      id="text"
                      class="border text-primary-text sm:text-sm rounded-xl block w-16 h-12 font-normal focus:outline-none"
                    />
                  </div>
                </th>
                <div>
                  <MaterialActionButton />
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
