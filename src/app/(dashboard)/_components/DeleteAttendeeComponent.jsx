"use client";
import Link from "next/link";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
export const DeleteComponent = () => {
  return (
    <div className="flex gap-3">
      <div>
        <button
          className="px-5  text-white rounded-full text-sm"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <RiDeleteBin5Line className=" w-[24px] h-[24px] text-red-400" />
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box w-[320px] h-[430px]">
            <form method="dialog">
              {/* <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
              <button>
                <RxCross2 className=" absolute right-[20px] top-[20px]  w-[32px] h-[32px]" />
              </button>
            </form>
            {/* <img className="mx-auto" src="/images/accept.svg" alt="accept-image" /> */}
            <img
              src="/images/image 231.svg"
              className=" w-174.4px] h-[197.76px] m-auto "
              alt=""
            />
            <p className="font-bold text-lg mt-[17.5px] text-center">
              {" "}
              Are you sure, you want to remove this attendee?
            </p>
            <div className="flex space-x-6 justify-center mt-[40px]">
              <Link
                className="bg-[#D72222] text-white rounded-full py-2 px-9"
                href={"#"}
              >
                Yes
              </Link>
              <Link
                className="bg-[#888888] text-white rounded-full py-2 px-9"
                href={"#"}
              >
                No
              </Link>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};