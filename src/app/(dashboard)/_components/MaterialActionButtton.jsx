"use client";

export function MaterialActionButton() {
  return (
    <div>
      <div className="dropdown dropdown-top dropdown-end">
        <div tabIndex={0} role="button" className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
              fill="#7A7A9D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              fill="#7A7A9D"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
              fill="#7A7A9D"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] bg-white menu  rounded-box w-52"
        >
          <li>
            <a className="gap-4 flex">
              <img src="/delete-red.svg" alt="" />{" "}
              <p className="text-primary-text  text-base font-semibold ">
                Delete
              </p>
            </a>
          </li>
          <li>
            <a
              className="gap-4 flex"
              onClick={() => document.getElementById("detail").showModal()}
            >
              {" "}
              <img src="/detail.svg" alt="" className="h-5 w-5" />{" "}
              <p className="text-primary-text  text-base font-semibold ">
                View Detail
              </p>{" "}
            </a>
          </li>
        </ul>
      </div>
      
      <dialog id="detail" className="modal">
        <div className="modal-box w-11/12 max-w-xl  ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-2 mr-2">
              <img src="/cancel.svg" alt="" className="w-7 h-7" />
            </button>
          </form>
          <div>
            <h3 className=" text-xl font-semibold text-primary-text mb-8">
              Material Detail
            </h3>

            <div className="">
              <div className="flex mb-3 gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                  <img src="/material.svg" alt="" className="h-5 w-5" />
                  Material Name
                </div>
                <div className="text-larg font-bold text-primary-text">
                  Mail tea
                </div>
              </div>
              <div className="flex mb-3  gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                  <img src="/quantity.svg" alt="" className="h-5 w-5" />
                  Quantity
                </div>
                <div className="text-larg font-bold text-primary-text">
                  8 Bottle
                </div>
              </div>
              <div className="flex mb-3  gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                  <img src="/assign-date.svg" alt="" className="h-5 w-5" />
                  Assign Date
                </div>
                <div className="text-larg font-bold text-primary-text">
                  May,19,2024
                </div>
              </div>
              <div className="flex mb-[2px]  gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                  <img src="/due-date.svg" alt="" className="h-5 w-5" />
                  Due Date
                </div>
                <div className="text-larg font-bold text-primary-text">
                  May,20,2024
                </div>
              </div>
              <div className="flex mb-1   gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text  items-end w-[30%]">
                  <img src="/handler.svg" alt="" className="h-5 w-5" />
                  Handler
                </div>
                <div class="inline-flex items-center content-center rounded-3xl bg-[#F8F2F2] pr-2 pt-[1px] pl-[2px]">
                  <img
                    src="/images/sok.png"
                    alt="Neil image"
                    className="w-8 h-8 rounded-full"
                  />
                  <div class="ms-1">
                    <p class="text-sm font-bold text-gray-900 truncate dark:text-white max-w-36	">
                      Neil Sims
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mb-5 gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%] items-end">
                  <img src="/supporter.svg" alt="" className="w-5 h-5" />
                  Supporter
                </div>

                <div className="gap-2 flex">
                  <div class="inline-flex items-center content-center rounded-3xl bg-[#F8F2F2] pr-2 pt-[1px] pl-[2px]">
                    <img
                      src="/images/sok.png"
                      alt="Neil image"
                      className="w-8 h-8 rounded-full"
                    />
                    <div class="ms-1">
                      <p class="text-sm font-bold text-gray-900 truncate dark:text-white max-w-36	">
                        Neil Sims
                      </p>
                    </div>
                  </div>

                  <div class="inline-flex items-center content-center rounded-3xl bg-[#F8F2F2] pr-2 pt-[1px] pl-[2px]">
                    <img
                      src="/images/sok.png"
                      alt="Neil image"
                      className="w-8 h-8 rounded-full"
                    />
                    <div class="ms-1">
                      <p class="text-sm font-bold text-gray-900 truncate dark:text-white max-w-36	">
                        Neil Sims
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex  gap-8">
                <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                  <img src="/note.svg" alt="" className="h-5 w-5" />
                  Noted
                </div>
                <div className="text-larg font-bold text-primary-text">
                  if Mail tea is empty .pls buy it quickly
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>    
    
  );
}
