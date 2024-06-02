"use client";
import { IoIosAdd } from "react-icons/io";
import { useForm } from "react-hook-form";

export const AssetPopupComponent = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <button
        className="button border w-40 h-10 flex rounded-[100px] justify-center items-center"
        onClick={() => document.getElementById("my_modal_new").showModal()}
      >
        <div className="icon flex items-center cursor-pointer">
          <div className="border bg-purple-text rounded-md w-5 h-5 flex justify-center items-center">
            <IoIosAdd size={22} color="white" />
          </div>
          <div className="button text-purple-text ml-3">
            <input
              className="font-semibold text-sm py-7 cursor-pointer"
              type="button"
              value="New Asset"
            />
          </div>
        </div>
      </button>
      {/* <dialog id="my_modal_new" className="modal">
        <div className="modal-box w-[450px] lg:w-4/6 xl:w-3/5 2xl:w-3/6 m-auto">
          <div className="flex items-center">
            <h2 className="font-semibold text-2xl">Create Asset</h2>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
          <div className="modal-action !block">
            <form className="space-y-6" method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="">Asset Name</label>
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
                {errors.assetname && <div className="text-red-600 text-sm">{errors.assetname.message}</div>}
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
                      required: "quantity name is required",
                    })}
                  />
                  {errors.quantity && <div className="text-red-600 text-sm">{errors.quantity.message}</div>}
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
                      required: "unit name is required",
                    })}
                  />
                  {errors.unit && <div className="text-red-600 text-sm">{errors.unit.message}</div>}
                </div>
              </div>
              <div className="flex gap-6 w-full justify-end mt-6">
                <button className="btn">Cancel</button>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </dialog> */}
      <dialog
        id="my_modal_new"
        className="modal mt-0 w-[450px] lg:w-4/6 xl:w-3/5 2xl:w-3/6 m-auto"
      >
        <div className="modal-box w-11/12 max-w-5xl mt-0">
          <div className="title font-semibold text-2xl px-10">Create Asset</div>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form method="dialog w-full" onSubmit={handleSubmit(onSubmit)}>

            <div className="content px-10 mt-4">
              <div className="my-6">
                <label htmlFor="">Asset Name</label>
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
                {errors.assetname && <div className="text-red-600 text-sm">{errors.assetname.message}</div>}
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
                  {errors.quantity && <div className="text-red-600 text-sm">{errors.quantity.message}</div>}
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
                  {errors.unit && <div className="text-red-600 text-sm">{errors.unit.message}</div>}
                </div>
              </div>
              <div className="flex justify-end mt-9 gap-2 modal-action">
                <button className="btn btn-sm border-2 cancle px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm">
                  Cancle
                </button>
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
