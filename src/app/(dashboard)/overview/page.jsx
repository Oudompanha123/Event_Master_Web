import Link from "next/link"
import { OverviewCardComponent } from "../_components/OverviewCardComponent"
import categoryData from "../../../data/category.json"
import { BarChartComponent } from "../_components/BarChartComponent"
import statusData from "../../../data/overview.json"
import CreateCategoryButton from "../_components/Action/CreateCategoryButton"
import { CategoryDeleteAction } from "../_components/Action/CategoryDeleteAction"
import { CategoryEditAction } from "../_components/Action/CategoryEditAction"
import { Pagination } from "../_components/Pagination"

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
                    <h2 className="md:text-lg xl:text-xl font-semibold text-primary-text">Total Event By Category</h2>
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
            <section className="w-full">
                <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                    <div className="flex justify-between items-center">
                        <h2 className="md:text-lg xl:text-xl font-semibold text-primary-text">Event Category</h2>
                        <CreateCategoryButton />
                    </div>
                    <div className="w-full overflow-scroll">
                        <table className="table w-full px-1 border-separate border-spacing-y-3">
                            <thead className="h-14 drop-shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
                                <tr className="text-xs lg:text-base">
                                    <th className="px-5 py-2 font-medium rounded-l-radiusUi">No</th>
                                    <th className="px-5 py-2 font-medium">Name</th>
                                    <th className="px-5 py-2 font-medium">Created At</th>
                                    <th className="px-5 py-2 font-medium">Created By</th>
                                    <th className="px-5 py-2 font-medium rounded-r-radiusUi">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryData.payload.map((x, index) => {
                                    const formatDate = dateString => new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
                                    const inputDate = x.created_at;
                                    const formattedDate = formatDate(inputDate);
                                    const formated = formattedDate;
                                    return (
                                        <tr className={`h-14 drop-shadow-soft rounded-radiusUi odd:bg-softwhiteUi even:bg-white`}>
                                            <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">{index + 1}</td>
                                            <td className="px-5 py-2 text-xs xl:text-base">{x.name}</td>
                                            <td className="px-5 py-2 text-xs xl:text-base">{formated}</td>
                                            <td className="px-5 py-2 text-xs xl:text-base">{x.created_by}</td>
                                            <td className="px-5 py-2 text-xs xl:text-base rounded-r-radiusUi">
                                                <div className="flex items-center  gap-2 lg:gap-4">
                                                    <CategoryDeleteAction />
                                                    <CategoryEditAction />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="w-full flex justify-end mt-8">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page