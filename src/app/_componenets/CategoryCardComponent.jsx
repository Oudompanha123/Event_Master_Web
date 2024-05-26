import Image from "next/image"
import carImage from "../../../public/images/racing-car.jpg"

export const CategoryCardComponent = ({ url }) => {
    return (
        <div className="w-[525px] h-[450px] bg-slate-200 object-cover rounded-3xl relative">
            <Image className="bg-contain object-cover rounded-3xl w-full h-full brightness-75" src={carImage} height={525} width={450} />
            <h2 className="absolute top-0 p-6 text-3xl font-bold text-white">Marathons & Races</h2>
            <div className="absolute bottom-0 p-6 space-y-4">
                <p className="text-white">Join Visionaries and Industry Leaders for a Transformative Experience of Insightful Discussions, Networking, and Groundbreaking Ideas</p>
                <button className="px-6 py-4 rounded-full bg-white font-semibold text-xl text-primary-text">See all event</button>
            </div>
        </div>
    )
}