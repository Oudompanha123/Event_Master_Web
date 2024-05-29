import userData from "../../../data/member.json"
import { RegisterActionComponent } from "../_components/RegisterActionComponent"

const Page = () => {
    return (
        <>
            <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                <h2 className="md:text-lg xl:text-xl font-semibold">Show All User Request</h2>
                <div className="overflow-x-auto space-y-3">
                    <div className="text-xs xl:text-sm grid grid-cols-6 px-6 py-4 rounded-2xl border-2 border-slate-50 uppercase font-semibold">
                        <span>No</span>
                        <span>Name</span>
                        <span>Gender</span>
                        <span>Phone Number</span>
                        <span>Email</span>
                        <span>Action</span>
                    </div>
                    {userData.data.map((x, index) => (
                        <div key={index} className={`text-xs xl:text-sm grid grid-cols-6 px-6 py-4 rounded-2xl border-2 border-slate-50 even:bg-softwhiteUi odd:bg-white`}>
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
                </div>
            </div>
        </>
    )
}

export default Page