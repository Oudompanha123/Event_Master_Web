import { RedirectBackComponent } from "@/app/(clientView)/_componenets/RedirectButtonComponent"
import Image from "next/image"
import demoImage from "../../../../../public/images/sea-chill.jpg"
import { AgendaComponent } from "@/app/(clientView)/_componenets/AgendaComponent"
import Link from "next/link"
import { getEventById } from "@/services/clientPage/landingService"

const Page = async ({params: {id}}) => {
    const data = await getEventById(id);
    const formatDate = dateString => new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const inputDate = data.payload.startDateTime;
    const formattedDate = formatDate(inputDate);
    const formated = formattedDate;

    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <section className="p-6 rounded-3xl border-2 border-slate-100 drop-shadow-sm bg-white">
                <Image src={demoImage} placeholder="blur" className="h-[350px] lg:h-[450px] object-cover rounded-2xl" alt="blog-image" />
                <div className="space-y-6 mt-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl lg:text-2xl font-semibold">{data.payload.eventName}</h2>
                        <button className={`text-sm lg:text-base ${data.payload.isOpen ? 'bg-blue-200 text-blue-800' : 'bg-red-200 text-red-800'} px-6 py-1.5 rounded-full`}>
                            {data.payload.isOpen ? 'Open' : 'Close'}
                        </button>
                    </div>
                    <p className="text-sm lg:text-base w-full lg:w-2/3 font-light">
                       {data.payload.description}
                    </p>
                    <p>
                        <span className="text-sm lg:text-base font-semibold">Location:</span>   {data.payload.location}
                    </p>
                    <button className="bg-blue-200 text-blue-800 text-sm lg:text-base px-6 py-3 rounded-full">{formated}</button>
                </div>
            </section>
            <section className="py-8 space-y-6">
                <h2 className="text-xl lg:text-2xl font-semibold">Agenda Management</h2>
                {/* {data?.payload?.map((x, index) => (
                    <AgendaComponent
                        key={index}
                        no={index + 1}
                        time={x?.time}
                        title={x?.title}
                        description={x?.description}
                        speaker={x?.speaker}
                    />
                ))} */}
                <div className="w-full text-end pt-8">
                    <Link href={'/register'} className="text-sm lg:text-base px-9 font-bold py-4 rounded-full bg-purple-text text-white">Join Event</Link>
                </div>
            </section>
        </div>
    )
}

export default Page