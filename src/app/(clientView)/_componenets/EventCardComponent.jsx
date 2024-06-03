import Image from "next/image"
import Link from "next/link"
import image from "../../../../public/images/event-master-logo.png"

export const EventCardComponent = ({ img, title, location, description, company, date }) => {
    const formatDate = dateString => new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const inputDate = date;
    const formattedDate = formatDate(inputDate);
    const formated = formattedDate;
    return (
        <div className="shadow-md rounded-3xl">
            <div className="relative">
                <Image src={img} width={500} height={300} className="rounded-t-3xl h-[300px] w-full object-cover" alt="racingImage" />
                <div className="absolute top-0 right-0 p-6 ">
                    <span className="bg-white text-sm rounded-full py-2 px-4 font-semibold text-blueUi">Open</span>
                </div>
            </div>
            <div className="bg-white px-6 py-8 rounded-b-3xl space-y-4 h-auto">
                <div className="flex gap-3 items-center">
                    <Image src={image} height={40} width={40} alt="orgImage" />
                    <p className="text-sm font-medium">{company}</p>
                </div>
                <div className="flex text-sm justify-between font-medium">
                    <p>{location}</p>
                    <p>{formated}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
                    <p className="text-sm lg:text-base line-clamp-2 font-medium">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between">
                    <Link href={'/detail/1'} className="text-sm border-1px rounded-full border-purple-text text-purple-text px-6 py-3">View Detail</Link>
                    <Link href={'/register'} className="text-sm rounded-full bg-purple-text text-white px-6 py-3 border-1px border-purple-text">Join Event</Link>
                </div>
            </div>
        </div>
    )
}