import { InfiniteLoad } from "@/widgets/landing-event-list/ui/InfiteLoad";
import { EventInCategory } from "@/widgets/landing-event-list/ui/EventInCategory";
import { getEventByCategoryNameAction } from "@/entities/event/api/landingAction"
import { RedirectBackComponent } from "@/shared/ui/RedirectButtonComponent";
import { TitleComponent } from "@/shared/ui/TitleComponent";

const Page = async (props) => {
    const { name } = await props.params;
    const category = decodeURIComponent(name);
    const eventData = await getEventByCategoryNameAction({ name, page: 1 })

    return (
        <div className="container">
            <RedirectBackComponent link="/" />
            <TitleComponent title={category} />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                <EventInCategory data={eventData} />
                <InfiniteLoad name={name} />
            </div>
        </div>
    )
}

export default Page
