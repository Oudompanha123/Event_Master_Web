import Image from "next/image"
import demoImage from "../../../../public/images/ski.jpg"

export const TeamCardComponent = () => {
    return (
        <div className="space-y-6 h-auto px-16 sm:px-0">
            <Image src={demoImage} className="h-[304px] object-cover rounded-3xl" />
            <div className="space-y-3">
                <h2 className="text-xl lg:text-2xl font-semibold">Sry Kimchhun</h2>
                <p className="text-sm lg:text-base font-light">"Day one or one day you decide."</p>
            </div>
        </div>
    )
}