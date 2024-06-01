export const SearchBar = () => {
    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="">
                    <label
                        for="category"
                        className="text-sm font-semibold text-primary-text block mb-2"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        className=" border text-primary-text sm:text-sm rounded-3xl block w-full p-3 focus:outline-none "
                        required
                    >
                        <option selected>Choose event category</option>
                        <option value="Social Event">Social Event</option>
                        <option value="conference">Conference</option>
                        <option value="Marathons">Marathons</option>
                    </select>
                </div>

                <div className="">
                    <label
                        for="category"
                        className="text-sm font-semibold text-primary-text block mb-2"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        name="status"
                        className=" border text-primary-text sm:text-sm rounded-3xl block w-full p-3 focus:outline-none"
                        required
                    >
                        <option selected>Choose status</option>
                        <option value="open Event">open</option>
                        <option value="close">closed</option>
                    </select>
                </div>

                <div class="mb-5">
                    <label
                        for="start date"
                        class="text-sm font-semibold text-primary-text block mb-2 "
                    >
                        Start Date
                    </label>
                    <input
                        type="date"
                        name="start date"
                        id="date"
                        className="border text-primary-text sm:text-sm rounded-3xl block w-full p-2.5 focus:outline-none"
                    />
                </div>

                <div className="mb-5">
                    <label
                        for="end date"
                        className="text-sm font-semibold text-primary-text block mb-2 "
                    >
                        End Date
                    </label>
                    <input
                        type="date"
                        name="end date"
                        id="end date"
                        className="border text-primary-text sm:text-sm rounded-3xl block w-full p-2.5 focus:outline-none"
                    />
                </div>
            </div>

            <div className="relative z-3 mb-5 flex justify-center w-full gap-5">
                <div className="flex grid-cols-2 w-4/5">
                    <input
                        className=" input input-bordered border-[1px] pl-10 text-primary-text hover:border-gray-400  rounded-full w-full h-11 "
                        id="username"
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>
                <button className="bg-purple-text w-1/5 rounded-full text-white h-auto">Search</button>
            </div>
        </div>
    )
}