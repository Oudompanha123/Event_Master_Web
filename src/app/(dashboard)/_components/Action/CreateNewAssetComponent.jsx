"use client";
import { IoIosAdd } from "react-icons/io";
export const AssetPopupComponent = () => {
  return (
    <div>
      <div
        className="button border w-40 h-10 flex rounded-[100px] justify-center items-center"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="icon flex items-center ">
          <div className="border bg-purple-text rounded-md w-5 h-5 flex justify-center items-center">
            <IoIosAdd size={22} color="white" />
          </div>
          <div className="button text-purple-text ml-3">
            <input
              className="font-semibold text-sm py-7"
              type="button"
              value="New Asset"
            />
          </div>
        </div>
      </div>
      <dialog id="my_modal_3" className="modal w-[820px] h-[452px] m-auto">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="content">
            <div className="title font-semibold text-2xl">Create Asset</div>
            <div className="content mt-12 flex flex-col">
              <label className="font-semibold text-base" htmlFor="">
                Asset Name <span className=" text-redUi">*</span>
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
            <div className="buttons flex justify-end mt-11  gap-3">
              <input
                className="border cancle w-36 h-12 rounded-2xl text-greyUi font-semibold text-sm"
                type="button"
                value="Cancle"
              />
              <div className="save bg-blueUi flex justify-center items-center p-2">
                <IoIosAdd size={28} className=" bg-white" />
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
    </div>
  );
};
