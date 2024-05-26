import { RedirectBackComponent } from "@/app/_componenets/RedirectButtonComponent"
import Image from "next/image"
import demoImage from "../../../../public/images/sea-chill.jpg"
import { AgendaComponent } from "@/app/_componenets/AgendaComponent"
import Link from "next/link"

const Page = () => {
    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <section className="p-6 rounded-3xl border-2 border-slate-50">
                <Image src={demoImage} className="h-[650px] object-cover rounded-2xl" />
                <div className="space-y-6 mt-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">Design Skill & Tech Session</h2>
                        <button className="bg-blue-200 text-blue-800 px-6 py-4 rounded-full">Open</button>
                    </div>
                    <p className="w-2/3 font-light">
                        Join us for an engaging and insightful session where creativity meets technology! Our Design Skill & Tech Session is tailored for professionals and enthusiasts looking to enhance their design capabilities with cutting-edge technological tools.
                    </p>
                    <p>
                        <span className="font-semibold">Location:</span>   Street 128, Toul Kok, Phnom Penh
                    </p>
                    <button className="bg-blue-200 text-blue-800 px-6 py-4 rounded-full">02 August 2023</button>
                </div>
            </section>
            <section className="py-8 space-y-6">
                <h2 className="text-2xl font-semibold">Agenda Management</h2>
                <AgendaComponent />
                <div className="w-full text-end pt-8">
                    <Link href={'/register'} className="px-9 font-bold py-4 rounded-full bg-purple-text text-white">Join Event</Link>
                </div>
            </section>
        </div>
    )
}

export default Page