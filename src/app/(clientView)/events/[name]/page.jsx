import { getEventByCateName } from "@/services/clientPage/landingService"
import { RedirectBackComponent } from "../../_componenets/RedirectButtonComponent"
import { EventCardComponent } from "../../_componenets/EventCardComponent"

const Page = async ({ params: { name } }) => {
    const eventData = await getEventByCateName(name)

    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                {eventData?.payload?.map((x, index) => (
                    <EventCardComponent
                        key={index}
                        img={`https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/paolo-feser-d6UCfbY3zMc-unsplash.jpg?alt=media&token=9624e26d-387d-4aa2-a802-f4065464745f`}
                        title={x?.eventName}
                        description={x?.description}
                        location={x?.location}
                        company={x?.orgName}
                        date={x?.startDate}
                        status={x?.isOpen}
                        id={x?.eventId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Page