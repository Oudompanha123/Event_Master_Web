"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { ToogleBtn } from "../_components/Action/ToogleBtn";
import { RxCross2 } from "react-icons/rx";
import { SelectDropdown } from "./SelectDropdownComponent";
import { SelectModify } from "./Action/SelectModify";
import { SelectModifyV2 } from "./Action/SelectModifyV2";
// import { ToogleBtn } from "./Action/ToogleBtn";

export function EventActionButton({id}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference htmlFor dropdown
  // console.log("data of event is ",id)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const [hide, setHide] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(""); // Added state htmlFor image preview source

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("border-indigo-600");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-indigo-600");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("border-indigo-600");
    const file = e.dataTransfer.files[0];
    displayPreview(file);
    setHide(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    displayPreview(file);
    setHide(true);
  };

  const displayPreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPreviewSrc(reader.result); // Update previewSrc state
    };
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const start = watch("startDate");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          type="button"
          className=" bg-white rounded-full bg-opacity-80 right-5 w-8 h-8 items-center flex flex-row justify-center"
          onClick={toggleDropdown}
        >
          <svg
            width="18"
            height="4"
            viewBox="0 0 18 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="2" r="2" fill="#101828" />
            <circle cx="9" cy="2" r="2" fill="#101828" />
            <circle cx="16" cy="2" r="2" fill="#101828" />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-1 w-44 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  className="gap-5 flex px-5 py-3 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-xl"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() =>
                    document.getElementById("updateEventCard").showModal()
                  }
                >
                  <Image
                    src="icons/edit-blue.svg"
                    alt=""
                    height={24}
                    width={24}
                  />
                  <p className="text-primary-text text-base font-semibold ">
                    Update
                  </p>
                </a>
              </li>
              <hr />
              <li>
                <a
                  className="gap-5 flex px-5 py-3 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-xl "
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() =>
                    document.getElementById("delete-event").showModal()
                  }
                >
                  <Image
                    src="icons/delete-red.svg"
                    alt=""
                    height={24}
                    width={24}
                  />{" "}
                  <p className="text-primary-text text-base font-semibold ">
                    Delete
                  </p>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <dialog id="updateEventCard" className="modal !m-0">
        <div className="modal-box w-11/12 lg:w-1/2 lg:max-w-5xl p-8">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl">Update Event</h3>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          <div className="modal-action">
            <form
              action=""
              className="w-full space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className="w-full relative border-2 border-gray-300 border-dashed rounded-lg p-8"
                id="dropzone"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  className="absolute inset-0 w-full h-full opacity-0 z-50"
                  id="file-upload"
                  onChange={handleFileChange}
                />
                <div className={`text-center ${hide && "hidden"}`}>
                  <Image
                    src={"/icons/upload-icon.svg"}
                    className="mx-auto h-16 w-16"
                    height={48}
                    width={48}
                  />
                  <h3 className="mt-2 text-lg font-medium">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer"
                    >
                      <span className="text-purple-text">Upload</span>
                      <span className="text-[#8790A0]">
                        {" "}
                        or drag and drop files here
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                  </h3>
                </div>
                {previewSrc && ( // Conditionally render the image preview
                  <Image
                    src={previewSrc}
                    className="mt-4 mx-auto h-80 w-full object-cover"
                    id="preview"
                    alt="Preview"
                  />
                )}
              </div>

              {/* input field  */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    Event Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("name", {
                      required: "name is required",
                    })}
                    type="text"
                    name="name"
                    id="name"
                    className={`${errors.name
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="Enter event name"
                  />
                  {errors.name && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <SelectModifyV2
                    label={`!font-medium`}
                    height={`!rounded-borderUi !h-[49.82px] !rounded-2xl shadow-sm bg-white !ring-gray-300 !border-gray-300 primary-text sm:text-sm focus:outline-none !focus:border-purple-text block w-full p-3.5`}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <label
                    htmlFor="startdate"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    Start Date Time <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("startDate", {
                      required: "start date is required",
                    })}
                    type="datetime-local"
                    name="startDate"
                    id="startdate"
                    className={`${errors.startDate
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="MM/DD/YYYY 6:00 AM"
                    required=""
                  />
                  {errors.startDate && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.startDate.message}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="enddate"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    End Date Time <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("endDate", {
                      required: "end date is required",
                      validate: (v) => {
                        if (v < start) {
                          return "end date isn't valid to create event";
                        }
                      },
                    })}
                    type="datetime-local"
                    name="endDate"
                    id="enddate"
                    className={`${errors.endDate
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="MM/DD/YYYY 6:00 AM"
                    required=""
                  />
                  {errors.endDate && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.endDate.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full">
                  <label
                    htmlFor="duration"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    Duration <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("duration", {
                      required: "duration is required",
                    })}
                    type="number"
                    name="duration"
                    id="duration"
                    className={`${errors.duration
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="Enter duration"
                    required=""
                  />
                  {errors.duration && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.duration.message}
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="max"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    Maximum Attendee <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("maxAttendee", {
                      required: "maximum attendees is required",
                    })}
                    type="number"
                    name="maxAttendee"
                    id="max"
                    className={`${errors.maxAttendee
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="Enter maximum attendee"
                    required=""
                  />
                  {errors.maxAttendee && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.maxAttendee.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-full">
                  <label
                    htmlFor="address"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("address", {
                      required: "address is required",
                    })}
                    type="text"
                    name="address"
                    id="address"
                    className={`${errors.address
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="Enter address"
                    required=""
                  />
                  {errors.address && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.address.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-full">
                  <label
                    htmlFor="description"
                    className="text-sm font-medium primary-text block mb-2"
                  >
                    Description <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    {...register("description", {
                      required: "description is required",
                    })}
                    rows={5}
                    type="text"
                    name="description"
                    id="description"
                    className={`${errors.description
                      ? "border-red-700 focus:border-red-600"
                      : "border-gray-300"
                      } shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5`}
                    placeholder="Enter description..."
                    required=""
                  />
                  {errors.description && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.description.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-5">
                <p>Create this event as :</p>
                <div>
                  {/* <ToogleBtn /> */}
                  <ToogleBtn />
                </div>
              </div>

              <div className="flex justify-end space-x-3 w-full mb-4 gap-2">
                <button
                  className="py-3 px-6py-3 px-6 rounded-2xl border-1px border-borderUi  bg-white hover:border-gray-500 hover:bg-white"
                  onClick={() =>
                    document.getElementById("updateEventCard").close()
                  }
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-3 px-6 rounded-2xl border-1px border-borderUi  flex items-center justify-center gap-2  bg-green-700 hover:bg-green-800"
                  onClick={handleSubmit}
                >
                  <Image src="icons/edit.svg" alt="" height={24} width={24} />
                  <p className="text-white">Update</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="delete-event" className="modal">
        <div className="modal-box w-[310px] justity-center  ">
          <form method="dialog" className="justify-end flex">
            <button type="submit">
              <RxCross2 className="absolute right-[20px] top-[20px] w-6 h-6 " />
            </button>
          </form>
          <div className="justify-center flex">
            <img
              src="images/delete.svg"
              alt="delete"
              className="w-[58%] mb-3"
            />
          </div>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
            Are you sure,you want to
          </p>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
            remove this event?
          </p>
          <div className="modal-action ">
            <form
              method="dialog"
              className=" flex justify-around w-full mb-4 mt-3 px-3"
            >
              <button
                className="h-9 rounded-3xl bg-red-600 w-[100px] hover:bg-red-700 flex items-center justify-center"
                value="yes"
              >
                <p className="text-white font-semibold al">yes</p>
              </button>

              <button
                className="h-9 rounded-3xl bg-[#888888] w-[100px] hover:bg-gray-500 flex items-center justify-center"
                value="cancel"
              >
                <p className="text-white font-semibold al">No</p>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
