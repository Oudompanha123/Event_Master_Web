import Image from "next/image"
import Link from "next/link"
import image from "../../../public/images/event-master-logo.png"
import racing from "../../../public/images/racing-car.jpg"

export const EventCardComponent = () => {
    return (
        <div className="shadow-md rounded-3xl">
            <div className="relative">
                <Image src={racing} className="rounded-t-3xl" />
                <div className="absolute top-0 right-0 p-6 ">
                    <span className="bg-white rounded-full py-2 px-4 font-bold text-blueUi">Open</span>
                </div>
            </div>
            <div className="bg-white px-6 py-8 rounded-b-3xl space-y-6">
                <div className="flex gap-3 items-center">
                    <Image src={image} height={40} width={40} />
                    <p>Daisy Corp</p>
                </div>
                <div className="flex justify-between">
                    <p>Chamkar Mon</p>
                    <p>Nov 1, 2024</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">Academic</h2>
                    <p className="text-lg font-light">specialized gatherings where scholars,
                        researchers, and professionals ...
                    </p>
                </div>
                <div className="flex justify-between">
                    <Link href={'/'} className="border-1px rounded-full border-purple-text text-purple-text px-6 py-3">View Detail</Link>
                    <Link href={'/'} className="rounded-full bg-purple-text text-white px-6 py-3 border-1px border-purple-text">Join Event</Link>
                </div>
            </div>
        </div>
    )
}