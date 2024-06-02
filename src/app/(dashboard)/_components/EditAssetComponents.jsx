"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
export const EditAssetComponents = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Image
        src={"/icons/edit.svg"}
        width={20}
        height={20}
        onClick={() => document.getElementById("my_modal_edit").showModal()}
      />
      <dialog
        id="my_modal_edit"  
        className="modal mt-0 w-[450px] lg:w-4/6 xl:w-3/5 2xl:w-3/6 m-auto"
      >
        <div className="modal-box w-11/12 max-w-5xl mt-0">
         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
           
            <div className="content px-10 mt-4 text-left">
              <div className="title font-semibold text-2xl">Create Asset</div>
              <div className="content mt-12 flex flex-col">
                <label className="font-semibold text-base " htmlFor="">
                  Asset Name
                </label>
                <input
                  type="text"
                  id=""
                  name="assetname"
                  className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                  placeholder="Enter asset name"
                  {...register("assetname", {
                    required: "asset name is required",
                  })}
                />
                {errors.assetname && (
                  <div className="text-red-600 text-sm">
                    {errors.assetname.message}
                  </div>
                )}
              </div>
              <div className="content2 grid grid-cols-2 gap-12 mt-5">
                <div className="text1 flex flex-col">
                  <label className="font-semibold text-base" htmlFor="">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id=""
                    name="quantity"
                    className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                    placeholder="Enter quantity"
                    {...register("quantity", {
                      required: "quantity is required",
                    })}
                  />
                  {errors.quantity && (
                    <div className="text-red-600 text-sm">
                      {errors.quantity.message}
                    </div>
                  )}
                </div>
                <div className="text1 flex flex-col">
                  <label className="font-semibold text-base" htmlFor="">
                    Unit
                  </label>
                  <input
                    type="text"
                    id=""
                    name="unit"
                    className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                    placeholder="Enter unit"
                    {...register("unit", {
                      required: "unit is required",
                    })}
                  />
                  {errors.unit && (
                    <div className="text-red-600 text-sm">
                      {errors.unit.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="buttons flex justify-end mt-9  gap-2 modal-action">
                <button className="btn btn-sm border-2 cancle px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm">
                  Cancle
                </button>
                <button
                  type="submit"
                  className="save border rounded-2xl bg-greenUi flex justify-center text-center items-center px-4 gap-3 "
                >
                  <TbEdit size={20} color="white" className="" />
                  <span className=" cancle h-12 text-white font-semibold text-sm flex justify-center items-center">
                    Update
                  </span>
                </button>
              </div>
            </div>
          </form>
          {/* <div className="titles font-semibold text-2xl text-left">
              Update Asset
            </div>
            <div className="content mt-12 flex flex-col items-start">
              <label className="font-semibold text-base" htmlFor="">
                Asset Name
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
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
                  type="text"
                  id="email"
                  className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                  placeholder="Enter quantity"
                />
              </div>
              <div className="text1 flex flex-col ">
                <label className="font-semibold text-base" htmlFor="">
                  
                </label>
                <input
                  type="text"
                  id="email"
                  className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                  placeholder="Enter unit"
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
            </div> */}
          {/* </div> */}
        </div>
      </dialog>
    </div>
  );
};
