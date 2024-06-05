// import { MegaImage } from "@/components/MegaImage"
import Image from "next/image"

export const CategoryCardComponent = ({ url, img, title, content }) => {
    return (
        <div className="w-full h-[350px] bg-slate-200 object-cover rounded-3xl relative">
            {/* <div className="relative h-[525px] w-[450px] object-cover">
                <MegaImage src={img} className={'object-cover rounded-3xl w-full h-full brightness-75'} />
            </div> */}
            <Image className="bg-contain object-cover rounded-3xl w-full h-full brightness-75" src={img} height={525} width={450} alt="categoryListImage" />
            <h2 className="absolute top-0 p-6 text-2xl lg:text-2xl font-bold text-white">{title}</h2>
            <div className="absolute bottom-0 p-6 space-y-4">
                <p className="text-white text-sm lg:text-base">{content}</p>
                <button className="px-6 py-3 rounded-full bg-white font-semibold text-base text-primary-text">See all event</button>
            </div>
        </div>
    )
}