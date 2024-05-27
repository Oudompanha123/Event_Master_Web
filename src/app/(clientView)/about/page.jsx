import Image from "next/image"
import arrowLeftImage from "../../../../public/images/arrow-left.png"
import arrowRightImage from "../../../../public/images/arrow-right.png"
import { AboutCardComponent } from "../_componenets/AboutCardComponent"
import { TeamCardComponent } from "../_componenets/TeamCardComponent"

const Page = () => {
    return (
        <div className="container">
            <section className="bg-pattern bg-cover text-center mt-24">
                <h1 className="text-4xl lg:text-6xl font-semibold">About Event Master</h1>
                <p className="text-sm lg:text-xl font-light mt-10 w-full lg:w-1/2 mx-auto">Created by KPS students with expert mentors,
                    our Event Management System simplifies managing
                    events like weddings, sports, and conferences. Users
                    can join events without an account, while admins
                    efficiently handle event creation, materials, and
                    task delegation.
                </p>
                <div className="hidden lg:flex justify-center gap-[712px]">
                    <Image src={arrowLeftImage} width={208} height={249} />
                    <Image src={arrowRightImage} width={208} height={249} />
                </div>
                <div className="h-20"></div>
            </section>
            <section className="relative lg:-top-40">
                <h2 className="text-4xl lg:text-6xl font-semibold text-center">Our Feature</h2>
                <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mt-6 relative">
                    <AboutCardComponent />
                    <AboutCardComponent />
                    <AboutCardComponent />
                    <AboutCardComponent />
                    <div className="h-96 w-96 hidden lg:block bg-purple-text/50 rounded-full blur-3xl absolute left-1/3 top-1/4 z-10"></div>
                </div>
            </section>
            <section>
                <div className="text-center space-y-6 mt-12 lg:mt-0">
                    <h2 className="text-4xl lg:text-6xl font-semibold">Meet Our Core Teams</h2>
                    <p className="font-light text-sm lg:text-base w-full lg:w-1/2 mx-auto">Young and talented developers, shaping the
                        future of event management with their exceptional
                        skills and innovative ideas.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-16">
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                    <TeamCardComponent />
                </div>
            </section>
        </div>
    )
}

export default Page