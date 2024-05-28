'use client'
import { IoAddSharp } from "react-icons/io5";
export const AssetPopupComponent = () => {
  return (
    <div>
      {" "}
      {/* <div className="button border w-[192px] h-[57px] flex rounded-md">
        <div className="icon flex items-center ml-[18px] ">
          <div className="border bg-purple-text rounded-md w-7 h-7 flex justify-center items-center">
            <IoAddSharp size={28} color="white" />
          </div>
          <div className="button text-purple-text ml-3">
            <input
              className="font-semibold text-sm py-7"
              type="button"
              value="New Asset"
            />
          </div>
        </div>
      </div> */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};
