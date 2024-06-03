"use client";

import { AddSquare } from "iconsax-react"
import Image from "next/image";
import { ToogleBtn } from "./ToogleBtn";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const CreateEventButton = () => {
  const [hide, setHide] = useState(false);

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
      const preview = document.getElementById("preview");
      preview.src = reader.result;
      preview.classList.remove("hidden");
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
        <>
            <div onClick={() => document.getElementById('my_modal_event').showModal()} className="cursor-pointer lg:flex items-center bg-[#F7F9FB] gap-2 py-3 px-3 lg:px-6 rounded-full">
                <AddSquare size="24" color="#344054" variant="Bold" />
                <p className="text-sm hidden lg:block">New Event</p>
            </div>
            <dialog id="my_modal_event" className="modal !m-0">
                <div className="modal-box w-11/12 lg:w-1/2 lg:max-w-5xl p-8">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-xl">Create Event</h3>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form action="" className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full relative border-2 border-gray-300 border-dashed rounded-lg p-8" id="dropzone"
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}>
                                <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" id="file-upload" onChange={handleFileChange} />
                                <div className={`text-center ${hide && 'hidden'}`}>
                                    <Image src={'/icons/upload-icon.svg'} className="mx-auto h-16 w-16" height={48} width={48} />
                                    <h3 className="mt-2 text-lg font-medium">
                                        <label htmlFor="file-upload" className="relative cursor-pointer">
                                            <span className="text-purple-text">Upload</span>
                                            <span className="text-[#8790A0]"> or drag and drop files here</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                    </h3>
                                </div>
                                <img src="" className="mt-4 mx-auto h-80 w-full hidden object-cover" id="preview" alt="Preview" />
                            </div>

                            {/* input field  */}
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Event Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("name", {
                                            required: "name is require",
                                        })}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="Enter event name"
                                    />
                                    {errors.name && <div className="text-red-600 text-sm">{errors.name.message}</div>}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Event Category <span className="text-red-600">*</span>
                                    </label>
                                    <select
                                        name="cars" id="cars"
                                        className="classic shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                    >
                                        <option value="volvo">Choose event category</option>
                                        <option value="saab">Conference</option>
                                        <option value="mercedes">Social Event</option>
                                        <option value="audi">Sport</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Start Date Time <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("startDate", {
                                            required: "start date is require",
                                        })}
                                        type="datetime-local"
                                        name="startDate"
                                        id="startdate"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="MM/DD/YYYY 6:00 AM"
                                        required=""
                                    />
                                    {errors.startDate && <div className="text-red-600 text-sm">{errors.startDate.message}</div>}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        End Date Time <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("endDate", {
                                            required: "end date is require",
                                            validate: (v) => {
                                                if (v < start) {
                                                    return "end date isn't valid to create event";
                                                }
                                            }
                                        })}
                                        type="datetime-local"
                                        name="endDate"
                                        id="enddate"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="MM/DD/YYYY 6:00 AM"
                                        required=""
                                    />
                                    {errors.endDate && <div className="text-red-600 text-sm">{errors.endDate.message}</div>}
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Duration <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("duration", {
                                            required: "duration is require",
                                        })}
                                        type="number"
                                        name="duration"
                                        id="duration"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="Enter duration"
                                        required=""
                                    />
                                    {errors.duration && <div className="text-red-600 text-sm">{errors.duration.message}</div>}
                                </div>
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Maximum Attendee <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("maxAttendee", {
                                            required: "maximum attendees is require",
                                        })}
                                        type="number"
                                        name="maxAttendee"
                                        id="max"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="Enter maximum attendee"
                                        required=""
                                    />
                                    {errors.maxAttendee && <div className="text-red-600 text-sm">{errors.maxAttendee.message}</div>}
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Address <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        {...register("address", {
                                            required: "address is require",
                                        })}
                                        type="test"
                                        name="address"
                                        id="address"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="Enter address"
                                        required=""
                                    />
                                    {errors.address && <div className="text-red-600 text-sm">{errors.address.message}</div>}
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="w-full">
                                    <label htmlFor="password" className="text-sm font-medium primary-text block mb-2">
                                        Description <span className="text-red-600">*</span>
                                    </label>
                                    <textarea
                                        {...register("description", {
                                            required: "description is require",
                                        })}
                                        rows={5}
                                        type="text"
                                        name="description"
                                        id="description"
                                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                                        placeholder="Enter description..."
                                        required=""
                                    />
                                    {errors.description && <div className="text-red-600 text-sm">{errors.description.message}</div>}
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <p>Create this event as :</p>
                                <div>
                                    <ToogleBtn />
                                </div>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button className="px-6 py-3 rounded-2xl border-1px border-borderUi">Cancel</button>
                                <button type="submit" className="px-6 py-3 rounded-2xl border-1px border-borderUi flex space-x-2 bg-purple-text text-white">
                                    <AddSquare size="24" color="#FFFFFF" variant="Bold" />
                                    <p>Create</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}