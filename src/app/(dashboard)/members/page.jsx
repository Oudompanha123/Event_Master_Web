import Image from "next/image"
import userData from "../../../data/member.json"
import ski from "../../../../public/images/ski.jpg"
import { MemberActionBtn } from "../_components/MemberActionBtn"
import { MemberDeleteBtn } from "../_components/MemberDeleteBtn"

const Page = () => {
    return (
        <>
            <div className="space-y-8 rounded-3xl p-6 border-2 border-slate-100 bg-white">
                <h2 className="md:text-lg xl:text-xl font-semibold">Show All User Request</h2>
                <div className="space-y-3">
                    <div className="text-xs xl:text-sm grid grid-cols-7 px-6 py-4 rounded-2xl border-1px border-borderUi">
                        <span>No</span>
                        <span>Name</span>
                        <span>Gender</span>
                        <span>Email</span>
                        <span>Address</span>
                        <span>Role</span>
                        <span>Action</span>
                    </div>
                    {userData.data.map((x, index) => (
                        <div key={index} className={`text-xs xl:text-sm grid grid-cols-7 px-6 py-4 rounded-2xl border-1px border-slate-100 even:bg-softwhiteUi odd:bg-white odd:border-borderUi`}>
                            <span className="flex items-center">{index + 1}</span>
                            <span className="flex items-center space-x-3">
                                <Image
                                    src={ski}
                                    width={48}
                                    height={48}
                                    className="h-12 rounded-full object-cover"
                                />
                                <p>{x.name}</p>
                            </span>
                            <span className="flex items-center">{x.gender}</span>
                            <span className="flex items-center">{x.gender}</span>
                            <span className="flex items-center">{x.tel}</span>
                            <span className="flex items-center">
                                <MemberActionBtn />
                            </span>
                            <div className="flex items-center">
                                <MemberDeleteBtn />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page