import { InfiniteLoad } from "@/widgets/landing-event-list/ui/InfiteLoad";
import { EventInCategory } from "@/widgets/landing-event-list/ui/EventInCategory";
import { getEventByCategoryNameAction } from "@/entities/event/api/landingAction"
import { RedirectBackComponent } from "@/shared/ui/RedirectButtonComponent";

const Page = async (props) => {
  const { name } = await props.params;
    let page = 1;
    const eventData = await getEventByCategoryNameAction({ name, page })

    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                <EventInCategory data={eventData} />
                <InfiniteLoad name={name} />
            </div>
        </div>
    )
}

export default Page