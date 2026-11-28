import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Global, Location, Lock1 } from "@/components/icons";
import { EventActionButton } from "./EventActionButton";
// import { ChangeStatusComponent } from "./ChangeStatusComponent";
import { RxCross2 } from "react-icons/rx";
import { handleChangeStatusAction } from "@/app/actions/eventAction";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
  return { day, month };
};

export default function CardEventComponent({ eventData, userRole }) {
  const handleChangeEventStatus = async (id, status) => {
    console.log("ID : ", id);
    console.log("Status : ", status);
    const tempStatus = status ? "close" : "open"
    const response = await handleChangeStatusAction(id, tempStatus)
    console.log("Response : ", response);
  };
  console.log(eventData);
  return (
    <div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4 lg:gap-5 2xl:gap-6">
        {eventData.map((data, index) => {
          const { day, month } = formatDate(data.startDate);
          return (
            <div key={index} className="min-w-0">
              <div className="h-full flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white">
                <div
                  className="w-full h-48 sm:h-52 xl:h-56 2xl:h-[250px] bg-cover bg-center"
                  style={{
                    backgroundImage: data.poster
                      ? `url(${data.poster})`
                      : `url(https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg)`,
                  }}
                >
                  <div className="w-full flex justify-between pt-3 pl-3 pr-3">
                    <div className="text-sm bg-white text-primary-text rounded-xl h-11 w-10 py-2 flex flex-col items-center justify-center">
                      <span className="font-semibold">{day}</span>
                      <small className="text-red-500 font-semibold">
                        {month}
                      </small>
                    </div>
                    <EventActionButton userRole={userRole} poster={data.poster} eventName={data.eventName} category={data.category} startDate={data.startDate} endDate={data.endDate}
                      duration={data.duration} maxAttendee={data.maxAttendee} address={data.address} description={data.description} isPost={data.isPost} eventId={data.eventId} />
                  </div>
                </div>
                {/* <ChangeStatusComponent /> */}
                <div className="px-3 w-full">
                  <div className="flex gap-3 justify-between mt-5">
                    <div className="font-bold primary-text flex-1 min-w-0 line-clamp-1">
                      {data.eventName}
                    </div>
                    <span
                      className={`inline-block shrink-0 rounded-full w-16 text-center py-1 text-sm font-semibold ${data.isOpen ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"
                        }`}
                    >
                      <button
                        className="rounded-2xl"
                        value="status"
                        onClick={() => {
                          (document.getElementById(`status_action_${data?.eventId}`) as HTMLDialogElement | null)?.showModal();
                        }}
                      >
                        {data.isOpen ? "Open" : "Closed"}
                      </button>
                      <dialog id={`status_action_${data?.eventId}`} className="modal">
                        <div className="modal-box w-[310px] justify-center">
                          <form method="dialog" className="justify-end flex">
                            <button type="submit">
                              <RxCross2 className="absolute right-[20px] top-[20px] w-6 h-6" />
                            </button>
                          </form>
                          <div className="justify-center flex">
                            <Image
                              src={`/images/question.svg`}
                              alt={`question image`}
                              className="w-[58%] mb-3"
                              width={32}
                              height={32}
                            />
                          </div>
                          <p className="justify-center w-full flex text-primary-text font-bold text-lg text-center">
                            Do you want to change Status?
                          </p>
                          <div className="modal-action">
                            <form method="dialog" className="flex justify-around w-full mb-4 mt-3 px-3">
                              <button onClick={() => handleChangeEventStatus(data?.eventId, data?.isOpen)} className="h-9 rounded-3xl bg-[#038446] w-[100px] hover:bg-green-700" value="yes">
                                <p className="text-white font-semibold">Yes</p>
                              </button>
                              <button className="h-9 rounded-3xl bg-redUi w-[100px] hover:bg-red-700" value="cancel">
                                <p className="text-white font-semibold">No</p>
                              </button>
                            </form>
                          </div>
                        </div>
                      </dialog>

                    </span>
                  </div>
                  <div className="flex justify-between gap-3 text-sm items-center mt-3">
                    <p className="text-gray-700 flex items-center gap-2 min-w-0">
                      <Location size="20" color="#7A44FF" variant="Bold" className="shrink-0" />
                      <span className="line-clamp-1">{data.address}</span>
                    </p>
                    <div className="shrink-0">
                      {data.isPost ? (
                        <div className="flex gap-2">
                          <Global
                            size="20"
                            color="#344054"
                          />
                          <p>Public</p>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          <Lock1
                            size="20"
                            color="#344054"
                          />
                          <p>Private</p>
                        </div>

                      )}
                    </div>
                  </div>

                </div>
                <div className="flex flex-wrap gap-3 px-3 pt-4 pb-5 mt-auto">
                  <Link
                    href={`/attendees/${data.eventId}`}
                    className="flex-1 flex items-center justify-center rounded-full border border-purple-text text-purple-text antialiased h-10 px-3 text-sm font-medium whitespace-nowrap transition duration-300 ease-in-out hover:bg-purple-50 active:scale-[98%]"
                  >
                    View all attendees
                  </Link>
                  <Link
                    href={`/event-detail/${data.eventId}`}
                    className="flex-1 flex items-center justify-center rounded-full bg-[#7939EF] text-white antialiased h-10 px-3 text-sm font-medium whitespace-nowrap transition duration-300 ease-in-out hover:bg-violet-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-500 active:scale-[98%]"
                  >
                    View event detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
