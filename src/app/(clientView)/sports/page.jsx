import data from "../../../data/event.json"
import { EventCardComponent } from "../_componenets/EventCardComponent"
import { RedirectBackComponent } from "../_componenets/RedirectButtonComponent"

const Page = () => {
    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8">
                {data?.sport.map((x, index) => (
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
        </div>
    )
}

export default Page