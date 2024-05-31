import Link from "next/link"
import { OverviewCardComponent } from "../_components/OverviewCardComponent"
import categoryData from "../../../data/category.json"
import { BarChartComponent } from "../_components/BarChartComponent"
import statusData from "../../../data/overview.json"
import Image from "next/image"
import CreateCategoryButton from "../_components/Action/CreateCategoryButton"

const Page = () => {
    return (
        <div className="space-y-4 xl:space-y-7">
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-6">
                {statusData.payload.map((x, index) => (
                    <OverviewCardComponent key={index} title={x.title} count={x.count} logo={x.logo} />
                ))}
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
                    <div className="absolute -bottom-56 rotate-[13.5deg] right-0 h-80 w-80 bg-[#AD9CFF] rounded-radius64 z-0"></div>
                    <div className="absolute -bottom-72 rotate-[13.5deg] -right-12 h-80 w-80 bg-[#9782FF] rounded-radius64 z-0"></div>
                </div>
            </section>
            <section>
                <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                    <div className="flex justify-between items-center">
                        <h2 className="md:text-lg xl:text-xl font-semibold">Event Category</h2>
                        <CreateCategoryButton />
                    </div>
                    <div className="w-full overflow-x-auto space-y-3">
                        <div className="w-full text-xs xl:text-sm grid grid-cols-5 px-6 py-4 rounded-2xl border-1px border-[#D9D9D9]">
                            <span className="whitespace-nowrap">No</span>
                            <span className="whitespace-nowrap">Name</span>
                            <span className="whitespace-nowrap">Created At</span>
                            <span className="whitespace-nowrap">Created By</span>
                            <span className="whitespace-nowrap">Action</span>
                        </div>
                        {categoryData.payload.map((x, index) => {
                            const formatDate = dateString => new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                            const inputDate = x.created_at;
                            const formattedDate = formatDate(inputDate);
                            const formated = formattedDate;
                            return (
                                <div key={index} className={`w-full text-xs xl:text-sm grid grid-cols-5 px-6 py-4 rounded-2xl border-1px border-slate-100 even:bg-softwhiteUi odd:bg-white odd:border-borderUi/50`}>
                                    <span className="flex items-center whitespace-nowrap">{index + 1}</span>
                                    <span className="flex items-center whitespace-nowrap">{x.name}</span>
                                    <span className="flex items-center whitespace-nowrap">{formated}</span>
                                    <span className="flex items-center whitespace-nowrap">{x.created_by}</span>
                                    <span className="flex items-center space-x-4 whitespace-nowrap">
                                        <Image src="/icons/trash.svg" width={20} height={20} />
                                        <Image src="/icons/edit.svg" width={20} height={20} />
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page