"use client";
import React, { useState } from "react";
import Image from "next/image";

export function EventActionButton() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    const [inputList, setInputList] = useState([
      { topic: "", startTime: "", endTime: "", speaker: "", description: "" },
    ]);
  
    const handleSubmit = () => {
      // Handle form submission logic here
      console.log("Form Submitted", inputList);
      // Close the modal after submission
      document.getElementById("updateEventCard").close();
    };
  return (
    <div>
      <div className="dropdown  dropdown-end ">
        <div tabIndex={0} role="button" className=" bg-white rounded-full bg-opacity-80 right-5 w-8 h-8 items-center  flex flex-row justify-center">
        <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#101828"/>
<circle cx="9" cy="2" r="2" fill="#101828"/>
<circle cx="16" cy="2" r="2" fill="#101828"/>
</svg>

        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] bg-white menu  rounded-box w-52"
        >
          <li>
            <a
              className="gap-4 flex"
              onClick={() => document.getElementById("updateEventCard").showModal()}
            >
              <img src="icons/edit-blue.svg" alt="" />
              <p className="text-primary-text  text-base font-semibold ">
                Update
              </p>
            </a>
          </li>
          <li>
            <a className="gap-4 flex">
              <img src="icons/delete-red.svg" alt="" />{" "}
              <p className="text-primary-text  text-base font-semibold ">
                Delete
              </p>
            </a>
          </li>
        </ul>
      </div>

      <dialog id="updateEventCard" className="modal">
        <div className="modal-box px-10 max-w-2xl justity-between rounded-3xl ">
          <form method="dialog" className="justify-between flex mb-6 mt-1">
            <p className=" text-primary-text font-semibold text-xl">
              Update Event
            </p>
            <button className="justify-end flex">
              <img src="icons/cancel.svg" alt="" className="w-7 h-7" />
            </button>
          </form>
          <form>
            <div
              class="w-full relative border-2 border-gray-300 border-dashed rounded-lg p-6"
              id="dropzone"
            >
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 z-50"
              />
              <div className="text-center ">
                <div className="bg-[#F7F9FB] p-3.5 w-12 rounded-full m-auto">
                  <Image
                    src="images/picture.svg"
                    alt="Open icons"
                    className="m-auto"
                    width={22}
                    height={22}
                    priority
                    size="24"
                    color="#344054"
                    variant="Bulk"
                  />
                </div>
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  <label for="file-upload" className="relative cursor-pointer">
                    <span className=" text-purple-text"> Upload </span>
                    <span className=" text-gray-400 ">
                      or drag and drop files here
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                </h3>
              </div>
              <img
                src=""
                className="mt-4 mx-auto max-h-40 hidden"
                id="preview"
              />
            </div>
            <div className="mb-4 mt-5 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="event-name"
                  className="text-sm font-semibold text-primary-text block mb-2"
                >
                  Event Name
                </label>
                <input
                  type="text"
                  name="event-name"
                  id="event-name"
                  className="border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                  placeholder="Enter event name"
                  required=""
                />
                {/* {errors.eventname && <p className=" text-red-500">{errors.eventname}</p>} */}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  className="text-sm font-semibold text-primary-text block mb-2"
                >
                  Event Category
                </label>
                <select
                  id="category"
                  name="category"
                  className=" border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                  required
                >
                  <option value="">Choose event category</option>
                  <option value="Social Event">Social Event</option>
                  <option value="female">Conference</option>
                  <option value="other">Marathons</option>
                </select>
              </div>
            </div>
            <div className="-mx-3 mt-5 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="startDate"
                    className="text-sm font-semibold text-primary-text block mb-2 "
                  >
                    Start Date Time
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    className="border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                  />
                  {/* {errors.startdatetime && <p className=" text-red-500">{errors.startdatetime}</p>} */}
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="endDate"
                    className="text-sm font-semibold text-primary-text block mb-2 "
                  >
                    End Date Time
                  </label>
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    className="border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="duration"
                  className="text-sm font-semibold text-primary-text block mb-2"
                >
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  className=" border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="maximum-attendee"
                  className="text-sm font-semibold text-primary-text block mb-2"
                >
                  Maximum Attendee
                </label>
                <input
                  type="text"
                  name="maximum-attendee"
                  id="maximum-attendee"
                  className="border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none"
                  placeholder="Enter Maximum attendee"
                  required=""
                />
              </div>
            </div>
            <div class="col-span-6 sm:col-span-3 mt-5">
              <label
                for="address"
                className="text-sm font-semibold text-primary-text block mb-2"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className=" border text-primary-text sm:text-sm rounded-xl block w-full p-2.5 focus:outline-none "
                placeholder=""
                required=""
              />
            </div>

            <div class="mb-4 mt-4">
              <label
                for="Description"
                className="text-sm font-semibold text-primary-text block mb-2"
              >
                Description
              </label>
              <textarea
                id="Description"
                name="Description"
                class=" border p-2 w-full rounded-lg focus:outline-none sm:text-sm"
                rows="4"
                placeholder="Enter description ..."
              ></textarea>
            </div>
            <div className="flex gap-1">
              <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center text-sm font-semibold text-primary-text">
                <p className="mr-6 text-primary-text text-base font-semibold">
                  Create this event as:
                </p>
                <input
                  type="checkbox"
                  name="autoSaver"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={`slider mr-3 flex h-[22px] w-[50px] items-center rounded-full p-1 duration-200 ${
                    isChecked ? "bg-primary" : "bg-[#CCCCCE]"
                  }`}
                >
                  <span
                    className={`dot h-[17px] w-[17px] rounded-full bg-white duration-200 ${
                      isChecked ? "translate-x-6" : ""
                    }`}
                  ></span>
                </span>
                <span className="label flex items-center text-sm font-medium text-black">
                  <span className="pl-1 text-primary-text text-base font-semibold">
                    {" "}
                    {isChecked ? "Public" : "Private"}{" "}
                  </span>
                </span>
              </label>
            </div>
          </form>

          <div className="modal-action ">
            <form
              method="dialog"
              className=" flex justify-end w-full mb-4 mt-3 gap-2"
            >
              <button
                className="h-11 rounded-xl border-gray-400 border bg-white w-32 hover:border-gray-500 hover:bg-white"
                onClick={() => document.getElementById("updateEventCard")}
              >
                Cancel
              </button>
              <button
                className="h-11  rounded-xl flex items-center justify-center gap-2  border bg-green-700  w-32  hover:bg-green-800"
                onClick={handleSubmit}
              >
                <img src="icons/edit.svg" alt="" />
                <p className="text-white">Update</p>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
