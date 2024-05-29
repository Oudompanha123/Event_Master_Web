import Link from "next/link"
import { OverviewCardComponent } from "../_components/OverviewCardComponent"
import userData from "../../../data/member.json"
import { AddSquare } from "iconsax-react"
import { BarChartComponent } from "../_components/BarChartComponent"

const Page = () => {
    return (
        <div className="space-y-7">
            <section className="grid grid-cols-4 gap-6">
                <OverviewCardComponent />
                <OverviewCardComponent />
                <OverviewCardComponent />
                <OverviewCardComponent />
            </section>
            {/* second row */}
            <section className="flex gap-8 w-full">
                <div className=" bg-white w-1/2 h-auto p-6 rounded-3xl space-y-6">
                    <h2 className="text-xl font-semibold">Total Event By Category</h2>
                    <div className="p-6 border-2 border-[#E2E8F0] rounded-3xl">
                        <BarChartComponent />
                    </div>
                </div>
                <div className="w-1/2 rounded-3xl relative bg-[#7B61FF] space-y-8 p-8 overflow-hidden">
                    <h2 className="text-white text-3xl font-bold w-4/5">Let's manage your event with us</h2>
                    <p className="font-medium text-white w-4/5">
                        Create fast, manage fast.Create fast,
                        manage fast.Create fast, manage
                        fast.Create fast, manage fast
                        .Create fast, manage fast.
                    </p>
                    <Link href={'#'}>
                        <button className="bg-white rounded-full px-8 py-3 font-bold mt-8">Get Start</button>
                    </Link>
                    <div className="absolute -bottom-32 rotate-[13.5deg] right-0 h-80 w-80 bg-[#AD9CFF] rounded-radius64 z-0"></div>
                    <div className="absolute -bottom-48 rotate-[13.5deg] -right-24 h-80 w-80 bg-[#9782FF] rounded-radius64 z-0"></div>
                </div>
            </section>
            <section>
                <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Event Category</h2>
                        <Link href={'#'}>
                            <button className="border-1px border-purple-text text-purple-text rounded-full px-5 py-3 flex items-center space-x-3">
                                <AddSquare size="20" color="#8C59FE" variant="Bold" />
                                <p className="text-sm">New Category</p>
                            </button>
                        </Link>
                    </div>
                    <div className="overflow-x-auto space-y-3">
                        <div className="lg:text-xs xl:text-sm grid grid-cols-5 px-6 py-7 rounded-2xl border-2 border-slate-50 uppercase font-semibold">
                            <span>No</span>
                            <span>Name</span>
                            <span>Created at</span>
                            <span>created by</span>
                            <span>Action</span>
                        </div>
                        {userData.data.map((x, index) => (
                            <div key={index} className={`lg:text-xs xl:text-sm grid grid-cols-5 px-6 py-5 rounded-2xl border-2 border-slate-50 even:bg-softwhiteUi odd:bg-white`}>
                                <span className="flex items-center">{index + 1}</span>
                                <span className="flex items-center">{x.name}</span>
                                <span className="flex items-center">{x.gender}</span>
                                <span className="flex items-center">{x.tel}</span>
                                <span className="flex items-center">{x.email}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page