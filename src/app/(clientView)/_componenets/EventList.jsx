import Link from "next/link"
import { EventCardComponent } from "./EventCardComponent"
import { TitleComponent } from "./TitleComponent"

export const EventList = ({ title, data }) => {
    return (
        <div>
            <TitleComponent title={title} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                {data?.slice(0, 6)?.map((x, index) => (
                    <EventCardComponent
                        key={index}
                        img={`https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/headway-F2KRf_QfCqw-unsplash.jpgbff2c2b3-3340-421f-b8bf-06cf683bb395?alt=media&token=19e9782d-0cca-4105-ab02-d627bd515ac6`}
                        title={x?.eventName}
                        description={x?.description}
                        location={x?.address}
                        company={x?.orgName}
                        date={x?.startDate}
                        status={x?.isOpen}
                        id={x?.eventId}
                    />
                ))}
            </div>
            <Link href={`/events/${title}`}>
                <button className={`${data?.length > 6 ? "block" : "hidden"} mx-auto mt-8 text-sm rounded-full bg-purple-text text-white px-6 py-3 border-1px border-purple-text`}>See more</button>
            </Link>
        </div>
    )
}