import Image from "next/image"

export const TeamCardComponent = ({ img, name, quote }) => {
    return (
        <div className="space-y-6 h-full px-16 sm:px-0">
            <Image src={img} className="h-[304px] w-fit mx-auto object-cover rounded-3xl" width={1000} height={1000} />
            <div className="space-y-3 w-[288px]">
                <h2 className="text-xl lg:text-2xl font-semibold">{name}</h2>
                <p className="text-sm lg:text-base font-light">"{quote}"</p>
            </div>
        </div>
    )
}