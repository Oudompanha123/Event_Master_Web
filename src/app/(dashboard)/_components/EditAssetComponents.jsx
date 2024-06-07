"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { AddSquare } from "iconsax-react";
// import { TbEdit } from "react-icons/tb";
// import { colors } from "react-select/dist/declarations/src/theme";
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
        src={"/icons/edit-blue.svg"}
        width={20}
        height={20}
        onClick={() =>
          document.getElementById("my_modal_updateasset").showModal()
        }
      />
      <dialog id="my_modal_updateasset" className="modal">
        <div className="modal-box w-11/12 md:w-1/2 max-w-5xl space-y-8">
          <div className="flex flex-row items-center text-primary-text">
            <h2 className="text-lg lg:text-xl font-semibold">Create Asset</h2>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          {/* <div className="w-11/12 md:w-1/2 max-w-5xl space-y-8"> */}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className=" ">
              <div className="text-center  flex flex-col justify-start items-start">
                <label htmlFor="">
                  Asset Name <span className="text-redUi">*</span>
                </label>

                <input
                  type="text"
                  id=""
                  name="assetname"
                  className=" sm:w-full shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
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
              <div className="flex gap-6 mt-4 items-start text-start justify-start ">
                <div className="w-full">
                  <label htmlFor="">Quantity</label>
                  <span className="text-redUi">*</span>
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
                <div className="w-full">
                  <label htmlFor="">Unit</label>
                  <span className="text-redUi">*</span>
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
              <div className="flex justify-end space-x-3 bg mt-8">
                <div
                  onClick={() =>
                    document.getElementById("my_modal_updateasset").close()
                  }
                  className="px-6 py-3 rounded-2xl border-1px border-borderUi cursor-pointer"
                >
                  Cancel
                </div>
                <button
                  type="submit"
                  className="save border rounded-2xl bg-greenUi text-white flex justify-center text-center items-center px-4 gap-3 "
                >
                  <Image src={"/icons/edit.svg"} width={20} height={20} />

                  <span className=" cancle h-12 text-white font-semibold text-sm flex justify-center items-center">
                    Update
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      {/* <dialog
        id="my_modal_edit"
        className="modal mt-0 w-[450px] lg:w-4/6 xl:w-3/5 2xl:w-3/6 m-auto"
      >
        <div className="modal-box w-11/12 max-w-5xl mt-0">
          <div className="font-semibold text-2xl text-start lg:px-10">
            Update Asset
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <div className="content lg:px-10 mt-4 text-left">
              <div className="content mt-12 flex flex-col">
                <label className="" htmlFor="">
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
              <div className="content2 grid grid-cols-2 gap-6 mt-5">
                <div className="text1 flex flex-col">
                  <label className="" htmlFor="">
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
                  <label className="" htmlFor="">
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
                <div
                  onClick={() =>
                    document.getElementById("my_modal_edit").close()
                  }
                  className="btn btn-sm border-2 cancle px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm"
                >
                  Cancle
                </div>
                <button
                  type="submit"
                  className="save border rounded-2xl bg-greenUi text-white flex justify-center text-center items-center px-4 gap-3 "
                >
                    <Image
                      src={"/icons/edit.svg"}
                      width={20}
                      height={20}
                    
                    />
               
                  <span className=" cancle h-12 text-white font-semibold text-sm flex justify-center items-center">
                    Update
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog> */}
    </div>
  );
};
