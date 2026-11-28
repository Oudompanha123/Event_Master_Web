import { EventCard } from "@/entities/event/ui/EventCard";

/** Cards for a page of a category's events (category page + infinite scroll). */
export const EventInCategory = ({ data }) => {
    if (!Array.isArray(data)) return null
    return (
        <>
            {data.map((x) => (
                <EventCard
                    key={x?.eventId}
                    id={x?.eventId}
                    poster={x?.poster}
                    title={x?.eventName}
                    description={x?.description}
                    location={x?.location}
                    company={x?.orgName}
                    date={x?.startDate}
                    status={x?.isOpen}
                />
            ))}
        </>
    )
}
