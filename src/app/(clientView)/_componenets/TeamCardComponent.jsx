import Image from "next/image"
import demoImage from "../../../../public/images/ski.jpg"

export const TeamCardComponent = () => {
    return (
        <div className="space-y-6 h-auto">
            <Image src={demoImage} className="h-[304px] object-cover rounded-3xl" />
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold">Sry Kimchhun</h2>
                <p className="font-light">"Day one or one day you decide."</p>
            </div>
        </div>
    )
}