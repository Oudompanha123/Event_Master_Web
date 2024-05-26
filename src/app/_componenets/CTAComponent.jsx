import Image from "next/image"
import haloEmoji from "../../../public/images/halo-emoji.png"
import sunglassEmoji from "../../../public/images/sunglass-emoji.png"

export const CTAComponent = () => {
    return (
        <div className="relative py-10 w-full bg-purple-text rounded-3xl space-y-6 text-center text-white mt-32">
            <h2 className="font-semibold text-4xl">Get Ready To Manage Your Event</h2>
            <p className="text-xl font-semibold">Join Free Today</p>
            <button className="bg-white text-primary-text px-8 py-4 rounded-full text-lg font-semibold">Register now</button>
            <Image
                src={haloEmoji}
                className="absolute top-10 right-80"
                width={40}
                height={40}
            />
            <Image
                src={sunglassEmoji}
                className="absolute bottom-0 left-80"
                width={114}
                height={114}
            />
        </div>
    )
}