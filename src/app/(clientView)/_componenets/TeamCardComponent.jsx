import Image from "next/image"
import demoImage from "../../../../public/images/ski.jpg"

export const TeamCardComponent = ({ img, name, quote }) => {
    return (
        <div className="space-y-6 h-auto px-16 sm:px-0">
            <Image src={img} className="h-[304px] w-full object-cover rounded-3xl" width={1000} height={1000} />
            <div className="space-y-3">
                <h2 className="text-xl lg:text-2xl font-semibold">{name}</h2>
                <p className="text-sm lg:text-base font-light">"{quote}"</p>
            </div>
        </div>
    )
}