import { getEventByCateName } from "@/services/clientPage/landingService"
import { RedirectBackComponent } from "../../_componenets/RedirectButtonComponent"
import { EventCardComponent } from "../../_componenets/EventCardComponent"

const Page = async ({params: {name}}) => {
    const eventData = await getEventByCateName(name)

    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
                {eventData?.payload?.map((x, index) => (
                    <EventCardComponent
                        key={index}
                        img={`https://firebasestorage.googleapis.com/v0/b/cloud-storage-next-8e2cc.appspot.com/o/headway-F2KRf_QfCqw-unsplash.jpgbff2c2b3-3340-421f-b8bf-06cf683bb395?alt=media&token=19e9782d-0cca-4105-ab02-d627bd515ac6`}
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