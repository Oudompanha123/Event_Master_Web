"use client";


export function DeleteButton() {
  return (
    <>
      <button
        className="btn rounded-2xl bg-red-600 w-32 hover:bg-red-700"
        value="delete"
        onClick={() => document.getElementById("delete").showModal()}
      >
        <img src="/delete.svg" alt="" />
        <p className="text-white">Delete</p>
      </button>
      <dialog id="delete" className="modal">
        <div className="modal-box w-[300px] justity-center rounded-3xl ">
          <form method="dialog" className="justify-end flex">
            <button>
              <img src="./cancel.svg" alt="" className="w-7 h-7" />
            </button>
          </form>
          <div className="justify-center flex">
            <img
              src="./images/delete.jpg"
              alt="delete"
              className="w-[58%] mb-3 mt-3"
            />
          </div>
          <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center ">
            Are you sure,you want to <br /> remove this agenda?
          </p>
          <div className="modal-action ">
            <form
              method="dialog"
              className=" flex justify-around w-full mb-4 mt-3 px-3"
            >
              {/* if there is a button, it will close the modal */}
              <button
                className=" h-9 rounded-3xl bg-red-600  w-[100px] hover:bg-red-700"
                value="yes"
              >
                <p className="text-white font-semibold">yes</p>
              </button>
              <button
                className="h-9 rounded-3xl bg-[#888888] w-[100px] hover:bg-gray-500"
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

