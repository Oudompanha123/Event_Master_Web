"use client";
// import { IoIosAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { AddSquare } from "iconsax-react";
import { CreateNewAsset } from "./Action/CreateNewAssetButton";
import { handleAsset } from "@/app/actions/assetAction/handleAssetInput";

export const AssetPopupComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    handleAsset(e);
  };

  return (
    <div>
      <CreateNewAsset />
      <dialog id="my_modal_new" className="modal">
        <div className="modal-box w-11/12 md:w-1/2 max-w-5xl space-y-8">
          <div className="flex flex-row items-center text-primary-text">
            <h2 className="text-lg lg:text-xl font-semibold">Create Asset</h2>
            <form method="dialog">
              <button
                type="submit"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="">
                <label htmlFor="">Asset Name</label>
                <span className="text-redUi">*</span>
                <input
                  type="text"
                  id=""
                  name="assetName"
                  className="sm:w-full mt-2 shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                  placeholder="Enter asset name"
                  {...register("assetName", {
                    required: "asset name is required",
                  })}
                />
                {errors.assetName && (
                  <div className="text-red-600 text-sm">
                    {errors.assetName.message}
                  </div>
                )}
              </div>
              <div className="flex gap-6 mt-4">
                <div className="w-full">
                  <label htmlFor="">Quantity</label>
                  <span className="text-redUi">*</span>
                  <input
                    type="number"
                    id=""
                    name="qty"
                    className="shadow-sm mt-2 bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
                    placeholder="Enter quantity"
                    {...register("qty", {
                      required: "quantity is required",
                    })}
                  />
                  {errors.qty && (
                    <div className="text-red-600 text-sm">
                      {errors.qty.message}
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
                    className="shadow-sm mt-2 bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5"
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
                    document.getElementById("my_modal_new").close()
                  }
                  className="px-6 py-3 rounded-2xl border-1px border-borderUi cursor-pointer"
                >
                  Cancel
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl border-1px border-borderUi flex space-x-2 bg-purple-text text-white"
                >
                  <AddSquare size="24" color="#FFFFFF" variant="Bold" />
                  <p>Save</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};
