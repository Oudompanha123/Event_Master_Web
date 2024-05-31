"use client";
import React from "react";
import { TbEdit } from "react-icons/tb";
// import { EditAssetComponent } from "./EditAssetComponent";
export const EditAssetComponent = () => {
  return (
    <div>
      <div
        className="edit cursor-pointer"
        onClick={() => document.getElementById("my_modal_edit").showModal()}
      >
        <TbEdit size={20} color="green" />
      </div>
      <dialog id="my_modal_edit" className="modal mt-0 w-[820px] m-auto">
        <div className="modal-box w-11/12 max-w-5xl mt-0 ">
          <div className="modal-action mt-0">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          <div className="content px-10 mt-4">
            <div className="titles font-semibold text-2xl text-left">
              Update Asset
            </div>
            <div className="content mt-12 flex flex-col items-start">
              <label
                className="font-semibold text-base cursor-pointer "
                htmlFor=""
              >
                Quantity <span className=" text-redUi">*</span>
              </label>
              <input
                className="border h-14 mt-2 rounded-lg p-3 w-full"
                type="text"
                name=""
                id=""
                placeholder="Enter asset name"
              />
            </div>
            <div className="content2 grid grid-cols-2 gap-12 mt-5">
              <div className="text1 flex flex-col">
                <label
                  className="font-semibold text-base cursor-pointer"
                  htmlFor=""
                >
                  Quantity <span className=" text-redUi">*</span>
                </label>
                <input
                  className="border h-14 mt-2 rounded-lg p-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter asset name"
                />
              </div>
              <div className="text1 flex flex-col">
                <label
                  className="font-semibold text-base cursor-pointer"
                  htmlFor=""
                >
                  Unit <span className=" text-redUi">*</span>
                </label>
                <input
                  className="border h-14 mt-2 rounded-lg p-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter asset name"
                />
              </div>
            </div>

            <div className="buttons flex justify-end mt-9  gap-2">
              <input
                className="border cancle px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm"
                type="button"
                value="Cancle"
              />
              <div className="save border rounded-2xl bg-blueUi flex justify-center items-center px-4 gap-3">
                {/* <EditAssetComponent /> */}
                {/* <IoIosAdd size={20} className=" bg-white rounded-md w-5 h-5 " /> */}
                <input
                  className=" cancle h-12 text-white font-semibold text-sm"
                  type="button"
                  value="Save"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
      {/* <dialog id="my_modal_4" className="modal w-full">
        <div className="modal-box">
          <form method="dialog"> */}
      {/* if there is a button in form, it will close the modal */}
      {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="content">
            <div className="title font-semibold text-2xl">Update Asset</div>
            <div className="content mt-12 flex flex-col">
              <label className="font-semibold text-base" htmlFor="">
                Asset Name
              </label>
              <input
                className="border h-14 mt-2 rounded-lg p-3"
                type="text"
                name=""
                id=""
                placeholder="Enter asset name"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text1">
                <label className="font-semibold text-base" htmlFor="">
                  Quantity
                </label>
                <input
                  className="border h-14 mt-2 rounded-lg p-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter quantity"
                />
              </div>
              <div className="text2">
                <label className="font-semibold text-base" htmlFor="">
                  Unit
                </label>
                <input
                  className="border h-14 mt-2 rounded-lg p-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter unit"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog> */}
    </div>
  );
};
