import Image from "next/image"
import Link from "next/link"
import image from "../../../../public/images/event-master-logo.png"
import racing from "../../../../public/images/racing-car.jpg"

export const EventCardComponent = () => {
    return (
        <div className="shadow-md rounded-3xl">
            <div className="relative">
                <Image src={racing} className="rounded-t-3xl" alt="racingImage" />
                <div className="absolute top-0 right-0 p-6 ">
                    <span className="bg-white text-sm lg:text-base rounded-full py-2 px-4 font-bold text-blueUi">Open</span>
                </div>
            </div>
            <div className="bg-white px-6 py-8 rounded-b-3xl space-y-4 h-auto">
                <div className="flex gap-3 items-center">
                    <Image src={image} height={40} width={40} alt="orgImage" />
                    <p className="text-sm lg:text-base">Daisy Corp</p>
                </div>
                <div className="flex text-sm lg:text-base justify-between">
                    <p>Chamkar Mon</p>
                    <p>Nov 1, 2024</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl lg:text-2xl font-bold">Academic</h2>
                    <p className="text-sm lg:text-lg font-light line-clamp-2">specialized gatherings where scholars,
                        researchers, and professionals ...
                    </p>
                </div>
                <div className="flex justify-between">
                    <Link href={'/detail/1'} className="text-sm lg:text-base border-1px rounded-full border-purple-text text-purple-text px-6 py-3">View Detail</Link>
                    <Link href={'/register'} className="text-sm lg:text-base rounded-full bg-purple-text text-white px-6 py-3 border-1px border-purple-text">Join Event</Link>
                </div>
            </div>
        </div>
    )
}