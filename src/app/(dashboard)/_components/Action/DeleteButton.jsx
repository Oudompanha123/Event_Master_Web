"use client";
import { RiDeleteBinLine } from "react-icons/ri";


export function DeleteButton() {
  return (
    <>
      <button
        className="btn rounded-2xl bg-red-600 w-32 hover:bg-red-700"
        value="delete"
        onClick={() => document.getElementById("delete").showModal()}
      >
        <RiDeleteBinLine size={24} color="white" />
        <p className="text-white">Delete</p>
      </button>
      <dialog id="delete" className="modal">
        <div className="modal-box w-[310px] justity-center  ">
          <form method="dialog" className="justify-end flex">
            {/* if there is a button, it will close the modal */}
            <button>
              <img src="./cancel.svg" alt="" />
            </button>
          </form>
          <div className="justify-center flex">
            <img
              src="./images/delete.jpg"
              alt="delete"
              className="w-[58%] mb-3 "
            />
          </div>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
            Are you sure,you want to
          </p>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
            remove this agenda?
          </p>
          <div className="modal-action ">
            <form
              method="dialog"
              className=" flex justify-around w-full mb-4 mt-3"
            >
              {/* if there is a button, it will close the modal */}
              <button
                className=" h-10 rounded-3xl bg-red-600  w-[115px] hover:bg-red-700"
                value="yes"
              >
                <p className="text-white font-semibold">yes</p>
              </button>
              <button
                className="h-10 rounded-3xl bg-[#888888] w-[115px] hover:bg-gray-500"
                value="cancel"
              >
                <p className="text-white font-semibold">No</p>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export function UpdateButton() {
    return (
      <>
        <button
          className="btn rounded-2xl bg-red-600 w-32 hover:bg-red-700"
          value="delete"
          onClick={() => document.getElementById("update").showModal()}
        >
          <RiDeleteBinLine size={24} color="white" />
          <p className="text-white">Delete</p>
        </button>
        <dialog id="update" className="modal">
          <div className="modal-box w-[310px] justity-center  ">
            <form method="dialog" className="justify-end flex">
              {/* if there is a button, it will close the modal */}
              <button>
                <img src="./cancel.svg" alt="" />
              </button>
            </form>
            <div className="justify-center flex">
              <img
                src="./images/delete.jpg"
                alt="delete"
                className="w-[58%] mb-3 "
              />
            </div>
            <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
              Are you sure,you want to
            </p>
            <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
              remove this agenda?
            </p>
            <div className="modal-action ">
              <form
                method="dialog"
                className=" flex justify-around w-full mb-4 mt-3"
              >
                {/* if there is a button, it will close the modal */}
                <button
                  className=" h-10 rounded-3xl bg-red-600  w-[115px] hover:bg-red-700"
                  value="yes"
                >
                  <p className="text-white font-semibold">yes</p>
                </button>
                <button
                  className="h-10 rounded-3xl bg-[#888888] w-[115px] hover:bg-gray-500"
                  value="cancel"
                >
                  <p className="text-white font-semibold">No</p>
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
  }
