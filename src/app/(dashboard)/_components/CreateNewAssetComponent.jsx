"use client";
import { IoIosAdd } from "react-icons/io";
// import { DeleteAssetComponent } from "./Action/DeleteAssetComponent";
export const AssetPopupComponent = () => {
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
      <dialog id="my_modal_new" className="modal mt-0 w-[820px] m-auto">
        <div className="modal-box w-11/12 max-w-5xl mt-0 ">
          <div className="modal-action mt-0">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
          <div className="content px-10 mt-4">
            <div className="title font-semibold text-2xl">Create Asset</div>
            <div className="content mt-12 flex flex-col">
              <label className="font-semibold text-base " htmlFor="">
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
            <div className="content2 grid grid-cols-2 gap-12 mt-5">
              <div className="text1 flex flex-col">
                <label className="font-semibold text-base" htmlFor="">
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
                <label className="font-semibold text-base" htmlFor="">
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

            <div className="buttons flex justify-end mt-9  gap-2 modal-action">
              <form method="dialog">
                <button className="btn btn-sm border-2 cancle px-7 h-12 rounded-2xl text-greyUi font-semibold text-sm">
                  Cancle
                </button>
              </form>
              <div className="save border rounded-2xl bg-blueUi flex justify-center items-center px-4 gap-3 ">
                <IoIosAdd size={20} className=" bg-white rounded-md w-5 h-5 " />
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
