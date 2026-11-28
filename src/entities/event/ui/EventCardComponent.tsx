import { getFormAction } from "@/entities/event/api/landingAction";
import { EventCard, type EventCardProps } from "./EventCard";

/** Server wrapper: looks up whether the event's attendee limit is reached, then renders the card. */
export const EventCardComponent = async (props: Omit<EventCardProps, "full">) => {
    const form = await getFormAction(props.id);
    return <EventCard {...props} full={form?.status == 400} />;
};
