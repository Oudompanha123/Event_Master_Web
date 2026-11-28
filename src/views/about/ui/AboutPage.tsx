import Image from "next/image"
import arrowLeftImage from "../../../../public/images/arrow-left.png"
import arrowRightImage from "../../../../public/images/arrow-right.png"
import { AboutCardComponent } from "@/widgets/about/ui/AboutCardComponent";
import { TeamCardComponent } from "@/widgets/about/ui/TeamCardComponent";
import featureData from "@/shared/mocks/feature.json"
import teamData from "@/shared/mocks/team.json"

const Page = () => (
    <div className="container overflow-hidden">
        <section className="relative bg-pattern bg-cover pt-12 pb-16 text-center lg:pt-24 lg:pb-48">
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">About Event Master</h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-muted-foreground sm:text-base lg:mt-10 lg:text-xl">
                Created by KPS students with expert mentors, our Event Management System simplifies managing events like
                weddings, sports, and conferences. Users can join events without an account, while admins efficiently handle
                event creation, materials, and task delegation.
            </p>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 hidden justify-between px-[8%] lg:flex">
                <Image src={arrowLeftImage} alt="" width={208} height={249} />
                <Image src={arrowRightImage} alt="" width={208} height={249} />
            </div>
        </section>

        <section className="relative lg:-mt-24">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl lg:text-6xl">Our Features</h2>
            <div className="relative mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 lg:px-16">
                {featureData.payload.map((x) => (
                    <AboutCardComponent key={x.title} title={x.title} detail={x.detail} logo={x.logo} />
                ))}
                <div aria-hidden="true" className="absolute top-1/4 left-1/3 z-10 hidden size-96 rounded-full bg-purple-text/35 blur-3xl lg:block" />
            </div>
        </section>

        <section className="mt-20 lg:mt-28">
            <div className="space-y-4 text-center lg:space-y-6">
                <h2 className="text-3xl font-semibold sm:text-4xl lg:text-6xl">Meet Our Core Teams</h2>
                <p className="mx-auto max-w-2xl text-sm text-muted-foreground lg:text-base">
                    Young and talented developers, shaping the future of event management with their exceptional skills and
                    innovative ideas.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 justify-items-center gap-x-4 gap-y-10 sm:gap-x-8 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-y-16">
                {teamData.payload.map((x) => (
                    <TeamCardComponent key={x.name} img={x.image} name={x.name} quote={x.quote} />
                ))}
            </div>
        </section>
    </div>
)

export default Page
