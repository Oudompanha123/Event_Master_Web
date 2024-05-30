import { RedirectBackComponent } from "@/app/(clientView)/_componenets/RedirectButtonComponent"
import Image from "next/image"
import demoImage from "../../../../../public/images/sea-chill.jpg"
import { AgendaComponent } from "@/app/(clientView)/_componenets/AgendaComponent"
import Link from "next/link"

const Page = () => {
    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <section className="p-6 rounded-3xl border-2 border-slate-100 shadow-sm">
                <Image src={demoImage} className="h-[350px] lg:h-[650px] object-cover rounded-2xl" alt="blog-image" />
                <div className="space-y-6 mt-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl lg:text-2xl font-semibold">Design Skill & Tech Session</h2>
                        <button className="text-sm lg:text-base bg-blue-200 text-blue-800 px-6 py-2 lg:py-4 rounded-full">Open</button>
                    </div>
                    <p className="text-sm lg:text-base w-full lg:w-2/3 font-light">
                        Join us for an engaging and insightful session where creativity meets technology! Our Design Skill & Tech Session is tailored for professionals and enthusiasts looking to enhance their design capabilities with cutting-edge technological tools.
                    </p>
                    <p>
                        <span className="text-sm lg:text-base font-semibold">Location:</span>   Street 128, Toul Kok, Phnom Penh
                    </p>
                    <button className="bg-blue-200 text-blue-800 text-sm lg:text-base px-6 py-2 lg:py-4 rounded-full">02 August 2023</button>
                </div>
            </section>
            <section className="py-8 space-y-6">
                <h2 className="text-xl lg:text-2xl font-semibold">Agenda Management</h2>
                <AgendaComponent />
                <div className="w-full text-end pt-8">
                    <Link href={'/register'} className="text-sm lg:text-base px-9 font-bold py-4 rounded-full bg-purple-text text-white">Join Event</Link>
                </div>
            </section>
        </div>
    )
}

export default Page