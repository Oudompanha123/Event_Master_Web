"use client";
import React from "react";
import { TbEdit } from "react-icons/tb";
export const EditAssetComponent = () => {
  return (
    <div>
      <div className="edit"  onClick={() => document.getElementById("my_modal_4").showModal()}>
        <TbEdit size={20} color="green" />
      </div>
      <dialog id="my_modal_4" className="modal w-full">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
      </dialog>
    </div>
  );
};
