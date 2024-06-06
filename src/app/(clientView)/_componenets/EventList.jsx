import Link from "next/link"
import { EventCardComponent } from "./EventCardComponent"
import { TitleComponent } from "./TitleComponent"

export const EventList = ({ title, data }) => {
    return (
        <div>
            <TitleComponent title={title} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                {data?.slice(0, 6).map((x, index) => (
                    <EventCardComponent
                        key={index}
                        img={x.event.image}
                        title={x.event.title}
                        description={x.event.description}
                        location={x.event.location}
                        company={x.company.name}
                        date={x.event.date}
                    />
                ))}
            </div>
            <Link href={'/sports'}>
                <button className={`${data.length > 6 ? "block" : "hidden"} mx-auto mt-8 text-sm rounded-full bg-purple-text text-white px-6 py-3 border-1px border-purple-text`}>See more</button>
            </Link>
        </div>
    )
}