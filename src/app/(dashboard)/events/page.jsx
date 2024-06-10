import CardEventComponent from "../_components/CardEventComponent";
import { IoSearchOutline } from "react-icons/io5";
import { SelectDropdown } from "../_components/SelectDropdownComponent";
import { SelectStatus } from "../_components/SelectStatusComponent";
import { getAllEventService } from "@/services/event.service";

export default async function Event() {
  // const allEvent = await getAllEventService();
  const allEvent = await getAllEventService();
  return (
    <main>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <SelectDropdown />
        <SelectStatus />

        <form>
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
              className="border text-primary-text sm:text-sm rounded-3xl block w-full p-3 focus:outline-none"
            />
          </div>
        </form>

        <form>
          <div class="mb-5">
            <label
              for="end date"
              class="text-sm font-semibold text-primary-text block mb-2 "
            >
              End Date
            </label>
            <input
              type="date"
              name="end date"
              id="date"
              className="border text-primary-text sm:text-sm rounded-3xl block w-full p-3 focus:outline-none"
            />
          </div>
        </form>
      </div>

      <div className="relative z-3 mb-8">
        <div className=" w-full ">
          <input
            type="text"
            placeholder="Search by name"
            className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-12 border rounded-3xl pl-10"
          />
          <IoSearchOutline className="w-[24px] h-[24px] -mt-9 ml-3" />
        </div>
      </div>

      <CardEventComponent eventData={allEvent.payload}/>
    </main>
  );
}
