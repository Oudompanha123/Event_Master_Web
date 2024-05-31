import Link from "next/link"
import { OverviewCardComponent } from "../_components/OverviewCardComponent"
import userData from "../../../data/member.json"
import { AddSquare } from "iconsax-react"
import { BarChartComponent } from "../_components/BarChartComponent"

const Page = () => {
    return (
        <div className="space-y-4 xl:space-y-7">
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-6">
                <OverviewCardComponent />
                <OverviewCardComponent />
                <OverviewCardComponent />
                <OverviewCardComponent />
            </section>
            {/* second row */}
            <section className="flex flex-col xl:flex-row gap-4 xl:gap-8 w-full">
                <div className=" bg-white w-full xl:w-1/2 h-auto p-6 rounded-3xl space-y-6">
                    <h2 className="md:text-lg xl:text-xl font-semibold">Total Event By Category</h2>
                    <div className="rounded-3xl w-full">
                        <BarChartComponent />
                    </div>
                </div>
                <div className="w-full xl:w-1/2 rounded-3xl relative bg-[#7B61FF] space-y-8 p-8 overflow-hidden">
                    <h2 className="text-white text-2xl font-bold w-4/5">Let's manage your event with us</h2>
                    <p className="text-xs lg:text-sm text-white w-4/5 absolute z-20">
                        Forge a Strategic Alliance with Our Esteemed Team,
                        Renowned for Its Meticulous Approach to Event Planning,
                        Impeccable Execution, and the Ability to Craft Timeless
                        Experiences That Will Resonate Long After the Occasion.
                    </p>
                    <p className="text-xs lg:text-sm text-white w-4/5 opacity-0">
                        Forge a Strategic Alliance with Our Esteemed Team,
                        Renowned for Its Meticulous Approach to Event Planning,
                        Impeccable Execution, and the Ability to Craft Timeless
                        Experiences That Will Resonate Long After the Occasion.
                    </p>
                    <Link href={'#'}>
                        <button className="bg-white rounded-full px-8 py-3 font-bold mt-4 lg:mt-8 text-sm absolute z-20">Get Start</button>
                    </Link>
                    <button className="bg-white rounded-full px-8 py-3 font-bold mt-4 lg:mt-8 text-sm opacity-0">Get Start</button>
                    <div className="absolute -bottom-32 rotate-[13.5deg] right-0 h-80 w-80 bg-[#AD9CFF] rounded-radius64 z-0"></div>
                    <div className="absolute -bottom-48 rotate-[13.5deg] -right-24 h-80 w-80 bg-[#9782FF] rounded-radius64 z-0"></div>
                </div>
            </section>
            <section>
                <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                    <div className="flex justify-between items-center">
                        <h2 className="md:text-lg xl:text-xl font-semibold">Event Category</h2>
                        <Link href={'#'}>
                            <button className="border-1px border-purple-text text-purple-text rounded-full px-4 py-2.5 flex items-center space-x-3">
                                <AddSquare size="20" color="#8C59FE" variant="Bold" />
                                <p className="text-xs">New Category</p>
                            </button>
                        </Link>
                    </div>
                    <div className="overflow-x-auto space-y-3">
                        <div className="text-xs xl:text-sm grid grid-cols-5 px-6 py-4 rounded-2xl border-1px border-[#D9D9D9]">
                            <span>No</span>
                            <span>Name</span>
                            <span>Created At</span>
                            <span>Created By</span>
                            <span>Action</span>
                        </div>
                        {userData.data.map((x, index) => (
                            <div key={index} className={`text-xs xl:text-sm grid grid-cols-5 px-6 py-4 rounded-2xl border-1px border-slate-100 even:bg-softwhiteUi odd:bg-white odd:border-borderUi`}>
                                <span className="flex items-center">{index + 1}</span>
                                <span className="flex items-center">{x.name}</span>
                                <span className="flex items-center min-w-28">{x.gender}</span>
                                <span className="flex items-center min-w-28">{x.tel}</span>
                                <span className="flex items-center min-w-28">{x.email}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page