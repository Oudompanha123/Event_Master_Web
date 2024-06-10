const Page = () => {
  return (
    <>
      <div className="bg-red-500 w-full h-10"></div>

      {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg"> */}
      <div class="w-full  overflow-x-scroll text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <div className="flex grid-col-6 justify-between ">
          <div scope="col" class="p-4 px-6">
            <div class="flex items-center px-2 min-w-3 w-10 h-10">
              {/* <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all" class="sr-only">checkbox</label> */}
            </div>
          </div>
          <div scope="col" class="px-6 py-4 w-full min-w-32 ">
            name
          </div>
          <div scope="col" class="px-6 py-4 w-full  min-w-32">
          name
          </div>
          <div scope="col" class="px-6 py-4 w-full  min-w-32">
          name
          </div>
          <div scope="col" class="px-6 py-4 w-full  min-w-32">
          name
          </div>
          <div class="px-6 py-4">   
              Edit
          </div>
        </div>

        <div class="flex grid-cols-6 justify-between bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <div  class="p-4 px-6 ">
            <input
              type="text"
              name="qty"
              className="border text-primary-text text-base px-2 min-w-3 w-10 h-10 rounded-xl font-normal focus:outline-none"
            />
          </div>
          <div
            scope="row"
            class="px-6 py-4 font-medium w-full text-gray-900 whitespace-nowrap dark:text-white"
          >
            <input
              type="text"
              name="qty"
              className="border text-primary-text text-base px-2 min-w-20 w-full h-10 rounded-xl font-normal focus:outline-none"
            />
          </div>
          <div class="px-6 py-4 w-full">
            <input
              type="text"
              name="qty"
              className="border text-primary-text text-base px-2 min-w-20 w-full h-10 rounded-xl font-normal focus:outline-none"
            />
          </div>
          <div class="px-6 py-4 w-full">
            <input
              type="text"
              name="qty"
              className="border text-primary-text text-base px-2 min-w-20 w-full h-10 rounded-xl font-normal focus:outline-none"
            />
          </div>
          <div class="px-6 py-4 w-full">
            <input
              type="text"
              name="qty"
              className="border text-primary-text text-base px-2 min-w-20 w-full h-10 rounded-xl font-normal focus:outline-none"
            />
          </div>
          <div class="px-6 py-4">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Page;
