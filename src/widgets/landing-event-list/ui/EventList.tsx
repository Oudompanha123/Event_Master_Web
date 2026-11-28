import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { EventCardComponent } from "@/entities/event/ui/EventCardComponent";
import { TitleComponent } from "@/shared/ui/TitleComponent"
import { Button } from "@/shared/ui/kit/button"

/** One category on the landing page: its first six events and a "See more" link. */
export const EventList = ({ title, data }) => {
    const events = data?.payload
    if (!events?.length) return null

    return (
        <div>
            <TitleComponent title={title} />
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                {events.slice(0, 6).map((x) => (
                    <EventCardComponent
                        key={x?.eventId}
                        id={x?.eventId}
                        poster={x?.poster}
                        title={x?.eventName}
                        description={x?.description}
                        location={x?.address}
                        company={x?.orgName}
                        date={x?.startDate}
                        status={x?.isOpen}
                    />
                ))}
            </div>
            {events.length >= 6 && (
                <div className="mt-8 flex justify-center">
                    <Button asChild className="rounded-full px-6">
                        <Link href={`/events/${encodeURIComponent(title)}`}>
                            See more <ArrowRight aria-hidden="true" />
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    )
}
