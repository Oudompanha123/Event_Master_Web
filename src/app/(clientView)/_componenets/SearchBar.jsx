'use client'

import { callingService } from "@/actions/findEventAction"
import { SelectDropdown } from "@/app/(dashboard)/_components/SelectDropdownComponent"
import { SelectStatus } from "@/app/(dashboard)/_components/SelectStatusComponent"
import Link from "next/link"
import { useState } from "react"

export const SearchBar = () => {
    const [findData, setFindData] = useState();
    const [search, setSearch] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const fetchData = async (event) => {
        event.preventDefault();
        const searchData = {
            eventName: search,
            startDateTime: `${startTime}T12:00:00`,
            endDateTime: `${endTime}T12:00:00`
        };
        console.log("trigger", searchData)
        const data = await callingService(searchData); //move to action for cors
        setFindData(data);
    };

    return (
        <div>
            <form onSubmit={fetchData}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <SelectDropdown />
                    <SelectStatus />
                    <div className="mb-5">
                        <label
                            htmlFor="start-date"
                            className="text-sm font-semibold text-primary-text block mb-2 "
                        >
                            Start Date
                        </label>
                        <input
                            onChange={(e) => setStartTime(e.target.value)}
                            type="date"
                            name="startDate"
                            id="startDate"
                            className="border text-primary-text sm:text-sm rounded-3xl block w-full p-3 focus:outline-none"
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="end-date"
                            className="text-sm font-semibold text-primary-text block mb-2 "
                        >
                            End Date
                        </label>
                        <input
                            onChange={(e) => setEndTime(e.target.value)}
                            type="date"
                            name="endDate"
                            id="endDate"
                            className="border text-primary-text sm:text-sm rounded-3xl block w-full p-3 focus:outline-none"
                        />
                    </div>
                </div>
                <div className="relative z-3 lg:mb-5 flex justify-center w-full gap-5">
                    <div className="flex grid-cols-2 w-4/5">
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            htmlFor="search"
                            className=" input input-bordered border-[1px] pl-10 text-primary-text hover:border-gray-400  rounded-full w-full h-11 "
                            id="search"
                            name="search"
                            type="text"
                            placeholder="Search..."
                        />
                        <div className="absolute left-0 inset-y-0 flex items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-3 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <button className="bg-purple-text w-1/5 rounded-full text-white h-auto">Search</button>
                </div>
            </form>

            {/* searched data  */}
            <section>
                {findData != undefined &&
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                        {findData?.payload[0]?.events?.map((x, index) => (
                            <div className="shadow-md rounded-3xl">
                                <div className="relative">
                                    <div className="relative h-[300px] w-full object-cover rounded-t-3xl">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/headway-F2KRf_QfCqw-unsplash.jpgbff2c2b3-3340-421f-b8bf-06cf683bb395?alt=media&token=19e9782d-0cca-4105-ab02-d627bd515ac" alt="event-image" className="rounded-t-3xl" />
                                    </div>
                                    {/* <Image src={img} width={500} height={300} className="rounded-t-3xl h-[300px] w-full object-cover" alt="racingImage" /> */}
                                    <div className="absolute top-0 right-0 p-6 ">
                                        <span className={`bg-white text-sm rounded-full py-2 px-4 font-semibold ${status ? 'text-blueUi' : 'text-redUi'}`}>
                                            {status ? 'Open' : 'Close'}
                                        </span>
                                    </div>
                                </div>
                                <div className="bg-white px-6 py-8 rounded-b-3xl flex flex-col justify-between h-[305.72px]">
                                    <div className="space-y-4">
                                        <div className="flex gap-3 items-center">
                                            <img className="h-10 w-10 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/headway-F2KRf_QfCqw-unsplash.jpgbff2c2b3-3340-421f-b8bf-06cf683bb395?alt=media&token=19e9782d-0cca-4105-ab02-d627bd515ac" alt="orgImage" />
                                            <p className="text-sm font-medium">{x?.orgName}</p>
                                        </div>
                                        <div className="flex text-sm justify-between font-medium">
                                            <p>{x?.address}</p>
                                            <p>{x?.startDate}</p>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <h2 className="text-lg lg:text-xl font-bold">{x?.eventName}</h2>
                                            <p className="text-sm lg:text-base line-clamp-2 font-medium">
                                                {x?.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link href={`/detail/${x.eventId}`} className="text-sm border-1px font-semibold rounded-full border-purple-text text-purple-text px-6 py-3">View Detail</Link>
                                        <Link href={'/register'} className="text-sm rounded-full font-semibold bg-purple-text text-white px-6 py-3 border-1px border-purple-text">Join Event</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </section>
        </div>
    )
}