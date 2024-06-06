"use client";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
export function DeleteMemberComponent() {
  return (
    <>
      <button
        className=" rounded-2xl "
        value="delete"
        onClick={() => document.getElementById("delete").showModal()}
      >
        <Image
          src="icons/deleteicon.svg"
          alt="delete icon"
          className="  w-8 h-8 ml-3 mt-1"
          property=" "
          width={0}
          height={0}
        />
      </button>
      <dialog id="delete" className="modal">
        <div className="modal-box w-[310px] justity-center  ">
          <form method="dialog" className="justify-end flex">
            <button type="submit">
              <RxCross2 className="absolute right-[20px] top-[20px] w-6 h-6 " />
            </button>
          </form>
          <div className="justify-center flex">
            <img src="images/delete.svg" alt="delete" className="w-[58%] mb-3" />
          </div>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
            Are you sure,you want to
          </p>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
            remove this category?
          </p>
          <div className="modal-action ">
            <form method="dialog" className=" flex justify-around w-full mb-4 mt-3 px-3">
              <button className=" h-9 rounded-3xl bg-red-600  w-[100px] hover:bg-red-700" value="yes">
                <p className="text-white font-semibold">yes</p>
              </button>
              <button className="h-9 rounded-3xl bg-[#888888] w-[100px] hover:bg-gray-500" value="cancel">
                <p className="text-white font-semibold">No</p>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
