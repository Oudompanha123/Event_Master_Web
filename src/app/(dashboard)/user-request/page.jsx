import userData from "../../../data/member.json"
import { Pagination } from "../_components/Pagination"
import { RegisterActionComponent } from "../_components/RegisterActionComponent"

const Page = () => {
    return (
        <>
            <div className="space-y-8 rounded-3xl p-6 bg-white">
                <h2 className="md:text-lg xl:text-xl font-semibold text-primary-text">Show All User Request</h2>
                <div className="overflow-scroll px-1">
                    <table className="table w-full border-separate border-spacing-y-3">
                        <thead className="h-14 drop-shadow-soft rounded-radiusUi text-primary-text bg-[#FFFFFF] uppercase">
                            <tr className="text-xs lg:text-base">
                                <th className="px-5 py-2 font-medium rounded-l-radiusUi">No</th>
                                <th className="px-5 py-2 font-medium">Name</th>
                                <th className="px-5 py-2 font-medium">Gender</th>
                                <th className="px-5 py-2 font-medium">Phone Number</th>
                                <th className="px-5 py-2 font-medium">Email</th>
                                <th className="px-5 py-2 font-medium rounded-r-radiusUi">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.data.map((x, index) => (
                                <tr className={`h-14 drop-shadow-soft text-primary-text rounded-radiusUi even:bg-softwhiteUi odd:bg-white`}>
                                    <td className="px-5 py-2 text-xs lg:text-base rounded-l-radiusUi">{index + 1}</td>
                                    <td className="px-5 py-2 text-xs lg:text-base">{x.name}</td>
                                    <td className="px-5 py-2 text-xs lg:text-base">{x.gender}</td>
                                    <td className="px-5 py-2 text-xs lg:text-base">{x.tel}</td>
                                    <td className="px-5 py-2 text-xs lg:text-base">{x.email}</td>
                                    <td className="rounded-r-radiusUi">
                                        <RegisterActionComponent />
                                    </td>
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                    <div className="w-full flex justify-end mt-8">
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page