"use client";
import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function UpdateAgenda({ inputList, setInputList }) {
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { topic: "", startTime: "", endTime: "", speaker: "", description: "" },
    ]);
  };

  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {inputList.map((x, i) => (
            <div key={i} className="row">
              <div className="mb-5 mt-4 px-4 pt-5 pb-5 border bottom-1 bg-white rounded-3xl ">
                <div className="form-group justify-end flex h-5">
                  {inputList.length !== 1 && (
                    <button
                      className=""
                      style={{ marginBottom: 10 }}
                      onClick={() => handleRemove(i)}
                    >
                      <IoClose color="red" size={24} />
                    </button>
                  )}
                </div>
                <div className="w-full form-group col-md-4 text-sm font-semibold text-primary-text block mb-4">
                  <label
                    htmlFor="topic"
                    className="text-sm font-semibold text-primary-text block mb-2"
                  >
                    Topic <span className="align-top text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="topic"
                    className="appearance-none input input-bordered font-medium text-sm w-full rounded-xl focus:outline-none focus:border-purple-text"
                    placeholder="Enter the Topic"
                    value={x.topic}
                    onChange={(e) => handleInputChange(e, i)}
                    required
                  />
                </div>
                <div className="flex gap-4 mb-1 sm:grid-cols-2">
                  <div className="w-full mx-auto form-group">
                    <label
                      htmlFor="start-time"
                      className="block mb-2 dark:text-white text-sm font-semibold text-primary-text"
                    >
                      Start Time
                      <span className="align-top text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                        {/* icon code */}
                      </div>
                      <input
                        type="time"
                        id="start-time"
                        name="startTime"
                        className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        min="09:00"
                        max="18:00"
                        value={x.startTime}
                        required
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                  </div>
                  <div className="w-full mx-auto form-group">
                    <label
                      htmlFor="end-time"
                      className="block mb-2 dark:text-white text-sm font-semibold text-primary-text"
                    >
                      End Time<span className="align-top text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none focus:outline-none focus:border-purple-text">
                        {/* icon */}
                      </div>
                      <input
                        type="time"
                        id="end-time"
                        name="endTime"
                        className="bg-gray-50 border leading-none border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        min="09:00"
                        max="18:00"
                        value={x.endTime}
                        required
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </div>
                  </div>
                  <div className="form-group w-full col-md-4 text-sm font-semibold text-primary-text block mb-2">
                    <label
                      htmlFor="speaker"
                      className="text-sm font-semibold text-primary-text block mb-2"
                    >
                      Speaker
                    </label>
                    <input
                      type="text"
                      name="speaker"
                      className="input input-bordered font-medium text-sm w-full rounded-xl focus:outline-none focus:border-purple-text "
                      placeholder="Enter the Speaker"
                      value={x.speaker}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                </div>
                <div className="form-group w-full col-md-4 text-sm font-semibold text-primary-text block mb-2">
                  <label
                    htmlFor="description"
                    className="text-sm font-semibold text-primary-text block mb-2"
                  >
                    Description
                  </label>

                  <textarea
                    type="text"
                    name="description"
                    className="textarea textarea-bordered font-medium text-sm w-full rounded-xl h-20 focus:outline-none focus:border-purple-text"
                    placeholder="Enter the description..."
                    value={x.description}
                    onChange={(e) => handleInputChange(e, i)}
                  ></textarea>
                </div>
              </div>
              <div className="form-group col-md-2">
                {inputList.length - 1 === i && (
                  <button
                    className="btn w-full font-medium text-sm bg-blue-100 text-blue-700 rounded-3xl justify-start hover:bg-blue-200"
                    onClick={handleAddClick}
                  >
                    <IoIosAddCircleOutline size={24} />
                    Add one more activity
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function UpdateAgendaButton() {
  const [inputList, setInputList] = useState([
    { topic: "", startTime: "", endTime: "", speaker: "", description: "" },
  ]);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form Submitted", inputList);
    // Close the modal after submission
    document.getElementById("my_modal_4").close();
  };

  return (
    <>
      <button
        className="btn  rounded-xl flex  border bg-green-700 hover:bg-green-800 w-32  "
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        <img src="icons/edit.svg" alt="" className="" />
        <p className="text-white">Edit</p>
      </button>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl rounded-3xl  bg-[#F7F9FB]">
          <UpdateAgenda inputList={inputList} setInputList={setInputList} />
          <div className="modal-action gap-2 pr-4  mb-4">
            <button
              className="h-11 rounded-xl border-gray-400 border bg-white w-32 hover:border-gray-500 hover:bg-white"
              onClick={() => document.getElementById("my_modal_4").close()}
            >
              Cancel
            </button>
            <button
              className="h-11  rounded-xl flex items-center justify-center gap-2  border bg-green-700  w-32  hover:bg-green-800"
              onClick={handleSubmit}
            >
              <img src="icons/edit.svg" alt="" className="h-5 w-5" />
              <p className="text-white">Update</p>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default UpdateAgendaButton;
