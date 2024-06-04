"use client";
import { IoIosAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { AddSquare } from "iconsax-react";
export const AssetPopupComponent = () => {
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
      <button
        onClick={() => document.getElementById("my_modal_new").showModal()}
        className="hover:bg-purple-text hover:duration-300 transition-all hover:text-white border-1px border-purple-text h-11 w-11 justify-center text-purple-text rounded-3xl md:px-4 md:py-2.5 flex items-center space-x-3 md:w-40"
      >
        <AddSquare size="20" variant="Bold" className="" />
        <p className="text-xs lg:text-base hidden md:block">New Assset</p>
      </button>
      <dialog
        id="my_modal_new"
        className="modal mt-0 w-[450px] lg:w-4/6 xl:w-3/5 2xl:w-3/6 m-auto"
      >
        <div className="modal-box w-11/12 max-w-5xl mt-0 ">
          <div className="title font-semibold text-2xl  lg:px-10 ">
            Create Asset
          </div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form method="dialog w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="content lg:px-10 mt-4  w-full">
              <div className="py-5 lg:py-6  w-full">
                <label htmlFor="">Asset Name</label>
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
              <div className="flex gap-6">
                <div className="w-full">
                  <label htmlFor="">Quantity</label>
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
              <div className="flex justify-end mt-9 gap-2 modal-action">
                <div
                  onClick={() =>
                    document.getElementById("my_modal_new").close()
                  }
                  className="btn btn-sm border-2 cancle px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm"
                >
                  Cancle
                </div>

                <button
                  type="submit"
                  className="save border rounded-2xl bg-blueUi flex justify-center text-center items-center px-4 gap-3 "
                >
                  <IoIosAdd
                    size={20}
                    className=" bg-white rounded-md w-5 h-5 "
                  />
                  <span className=" cancle h-12 text-white font-semibold text-sm flex justify-center items-center">
                    Save
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
