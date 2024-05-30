import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { DeleteComponent } from "../_components/DeleteAttendeeComponent";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const AttendeePage = () => {
  return (
    <div className=" border w-[100%] h-[550px] rounded-radiusUi">
      <div className="navbar w-[98%] m-auto">
        <div className="flex-1">
          <a className=" font-semibold text-[24px]">Show All Attendees in Sport Event</a>
        </div>
        <div className=" flex items-center gap-[8px] border border-1 w-80 h-10 rounded-3xl justify-between">
          <FiSearch className=" ml-4 w-[24px] h-[24px]" />
          <div className=" w-[510px]">
            <label htmlFor="search"></label>
            <input
              type="text"
              placeholder="Search by name"
              className=" font-medium text-[18px] "
            />
          </div>
        </div>
      </div>
      <div>
        {/* <table className=" table border rounded-radiusUi  border-spacing-20 w-[97%] m-auto text-sm text-left rtl:text-right dark:text-gray-400 ">
          <thead>
            <tr>
              <th>NO</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>PHONE NUMBER</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Pok Hengly</td>
              <td>Female</td>
              <td>hengly@gmail.com</td>
              <td>Phnom Penh</td>
              <td>0968623156</td>

              <button
                className=""
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <td>
                  <RiDeleteBin5Line className=" w-[24px] h-[24px] text-center text-red-400" />
                </td>
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-[320px] h-[430px]">
                  <form method="dialog">
                    <button>
                      <RxCross2 className=" absolute right-[24px] top-[24px]  w-[32px] h-[32px]" />
                    </button>
                    <img
                      src="/images/photo_2024-05-28_10-00-33.jpg"
                      className=" w-174.4px] h-[197.76px] m-auto "
                      alt=""
                    />
                  </form>
                  <h3 className="font-medium text-lg mt-[17.5px] text-center">
                    Are you sure, you want to remove this attendee?
                  </h3>
                  <div className=" flex m-auto ">
                    <button className=" border w-[112px] h-[37.53px] rounded-[100px] mt-[40px] text-white bg-[#D72222] ">
                      Yes
                    </button>
                    <button className="border w-[112px] h-[37.53px] rounded-[100px] mt-[40px] text-white bg-[#888888]">
                      No
                    </button>
                  </div>
                </div>
              </dialog>
            </tr>
          </tbody>
        </table> */}
        <div className="table">
          <div className="head w-[97%] m-auto bg-[#FFFFFF] border grid grid-cols-7 rounded-lg gap-10 p-5 ">
            <span className=" font-semibold text-[16px] ">NO</span>
            <span className=" font-semibold text-[16px] ">NAME</span>
            <span className=" font-semibold text-[16px] ">GENDER</span>
            <span className=" font-semibold text-[16px] ">EMAIL</span>
            <span className=" font-semibold text-[16px] ">ADDRESS</span>
            <span className=" font-semibold text-[16px] ">PHONE NUMBER</span>
            <span className=" font-semibold text-[16px] ">ACTION</span>
          </div>
          <div className="body w-[97%] m-auto bg-[#F4F4F4] border grid grid-cols-7 rounded-lg gap-10 p-5  mt-3">
            <span className=" font-medium text-[16px]">1</span>
            <span className=" font-medium text-[16px] ">Pok Hengly</span>
            <span className=" font-medium text-[16px] ">Female</span>
            <span className=" font-medium text-[16px] ">
              hengly@gmail.com
            </span>
            <span className=" font-medium text-[16px] ">Phnom Penh</span>
            <span className=" font-medium text-[16px] ">0968672198</span>
            <span className=" font-medium text-[16px] ">
              <DeleteComponent/>
            </span>
          </div>
          <div className="body w-[97%] m-auto bg-[#FFFFFF] border grid grid-cols-7 rounded-lg gap-10 p-5  mt-3">
            <span className=" font-medium text-[16px]">2</span>
            <span className=" font-medium text-[16px] ">Ly Nita</span>
            <span className=" font-medium text-[16px] ">Female</span>
            <span className=" font-medium text-[16px] ">
              nita@gmail.com
            </span>
            <span className=" font-medium text-[16px] ">Prey Veng</span>
            <span className=" font-medium text-[16px] ">0889789176</span>
            <span className=" font-medium text-[16px] ">
              <DeleteComponent/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AttendeePage;
