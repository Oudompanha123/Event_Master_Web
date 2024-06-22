import CardEventComponent from "../_components/CardEventComponent";
import { SelectDropdown } from "../_components/SelectDropdownComponent";
import { SelectStatus } from "../_components/SelectStatusComponent";
import { getAllCategory, getAllEventCategory, getAllEventsService, getCategoryName} from "@/services/dashboard/eventService";
import SearchComponent from "../_components/SearchComponent";
import FilterComponent from "../_components/FilterComponent";
import { EventList } from "@/app/(clientView)/_componenets/EventList";
import { EventCardComponent } from "@/app/(clientView)/_componenets/EventCardComponent";
import { Suspense } from "react";

export default async function Page({ searchParams }) {
  const eventData = await getAllEventsService();
  const allCategory = await getCategoryName();
      // console.log('Event Data:', eventData);
      console.log('All Categories:', allCategory);

  return (
    <main>
      <FilterComponent/>
      <section id="content" className={`space-y-16 ${searchParams.search ? 'hidden' : 'block'}`}>
        {allCategory?.payload?.map(async (x, index) => (
          <Suspense >
            {/* <EventList key={index} title={x} /> */}
          </Suspense>
        ))}
      </section>
      <SearchComponent eventData={eventData.payload} />
    </main>
  );
}
