import userData from "../../../data/member.json"
import { RegisterActionComponent } from "../_components/RegisterActionComponent"

const Page = () => {
    return (
        <>
            <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                <h2 className="md:text-lg xl:text-xl font-semibold">Show All User Request</h2>
                {/* <div className="overflow-x-auto space-y-3">
                    <div className="text-xs xl:text-sm grid grid-cols-6 px-6 py-4 rounded-2xl border-1px border-borderUi">
                        <span>No</span>
                        <span>Name</span>
                        <span>Gender</span>
                        <span>Phone Number</span>
                        <span>Email</span>
                        <span>Action</span>
                    </div>
                    {userData.data.map((x, index) => (
                        <div key={index} className={`text-xs xl:text-sm grid grid-cols-6 px-6 py-4 rounded-2xl border-1px border-slate-100 even:bg-softwhiteUi odd:bg-white odd:border-borderUi`}>
                            <span className="flex items-center">{index + 1}</span>
                            <span className="flex items-center">{x.name}</span>
                            <span className="flex items-center">{x.gender}</span>
                            <span className="flex items-center">{x.tel}</span>
                            <span className="flex items-center">{x.email}</span>
                            <div>
                                <RegisterActionComponent />
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="overflow-scroll">
                    <table className="table w-full border-separate border-spacing-y-3">
                        <thead className="h-14 drop-shadow rounded-radiusUi bg-[#FFFFFF] uppercase">
                            <tr className="text-xs lg:text-base">
                                <th className="px-5 py-2 rounded-l-radiusUi">No</th>
                                <th className="px-5 py-2">Name</th>
                                <th className="px-5 py-2">Gender</th>
                                <th className="px-5 py-2">Phone Number</th>
                                <th className="px-5 py-2">Email</th>
                                <th className="px-5 py-2 rounded-r-radiusUi">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.data.map((x, index) => (
                                <tr className={`h-14 drop-shadow rounded-radiusUi even:bg-softwhiteUi odd:bg-white`}>
                                    <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">{index + 1}</td>
                                    <td className="px-5 py-2 text-xs xl:text-base">{x.name}</td>
                                    <td className="px-5 py-2 text-xs xl:text-base">{x.gender}</td>
                                    <td className="px-5 py-2 text-xs xl:text-base">{x.tel}</td>
                                    <td className="px-5 py-2 text-xs xl:text-base">{x.email}</td>
                                    <td className="rounded-r-radiusUi">
                                        <RegisterActionComponent />
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Page