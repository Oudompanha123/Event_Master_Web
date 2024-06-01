"use client";
import Image from "next/image";
import React from "react";
import { TbEdit } from "react-icons/tb";
export const EditAssetComponents = () => {
  return (
    <div>
      <Image
        src={"/icons/edit.svg"}
        width={20}
        height={20}
        onClick={() => document.getElementById("my_modal_edit").showModal()}
      />
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
              <label className="font-semibold text-base" htmlFor="">
                Asset Name
              </label>
              <input
                className="border h-14 mt-2 rounded-lg p-3 w-full"
                type="text"
                name=""
                id=""
                placeholder="Enter asset name"
              />
            </div>
            <div className="content2 grid grid-cols-2 gap-12 mt-5 text-start">
              <div className="text1 flex flex-col">
                <label
                  className="font-semibold text-base items-start"
                  htmlFor=""
                >
                  Quantity
                </label>
                <input
                  className="border h-14 mt-2 rounded-lg p-3"
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter asset name"
                />
              </div>
              <div className="text1 flex flex-col ">
                <label className="font-semibold text-base" htmlFor="">
                  Unit
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
            <div className="buttons flex justify-end mt-9  gap-2 ">
              <div className="modal-action mt-0">
                <form method="dialog">
                  <button className="btn btn-sm  border px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm cursor-pointer">
                    Cancle
                  </button>
                </form>
              </div>
              <div className="save border rounded-2xl bg-greenUi flex justify-center items-center px-4 gap-3 cursor-pointer">
                <TbEdit size={20} color="white" className="" />
                <input
                  className=" cancle h-12 text-white font-semibold text-sm cursor-pointer"
                  type="button"
                  value="Update"
                />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
