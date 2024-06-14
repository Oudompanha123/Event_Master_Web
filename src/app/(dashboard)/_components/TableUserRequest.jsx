import { getAllUserRequestService } from "@/services/dashboard/userRequestService";
import { Pagination } from "./Pagination";
import { RegisterActionComponent } from "./RegisterActionComponent";

const TableUserRequest = async ({ userRequest }) => {
    // const userRequest = await getAllUserRequestService();
    return (
           <div className="overflow-scroll px-1">
            <table className="table w-full border-separate border-spacing-y-3">
                <thead className="h-14 shadow-soft rounded-radiusUi text-primary-text bg-[#FFFFFF] uppercase">
                    <tr className="text-xs lg:text-base">
                        <th className="px-5 py-2 font-medium rounded-l-radiusUi">No</th>
                        <th className="px-5 py-2 font-medium w-64">Name</th>
                        <th className="px-5 py-2 font-medium">Gender</th>
                        <th className="px-5 py-2 font-medium">Phone Number</th>
                        <th className="px-5 py-2 font-medium">Email</th>
                        <th className="px-5 py-2 font-medium rounded-r-radiusUi text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userRequest?.payload?.map((user, index) => (
                        <tr key={user.memberId} className={`h-14 shadow-soft text-primary-text rounded-radiusUi odd:bg-softwhiteUi even:bg-white`}>
                            <td className="px-5 py-2 text-xs lg:text-base rounded-l-radiusUi">{index + 1}</td>
                            <td className="px-5 py-2 text-xs lg:text-base w-56">{user.memberName}</td>
                            <td className="px-5 py-2 text-xs lg:text-base">{user.gender ? true : "No gender"}</td>
                            <td className="px-5 py-2 text-xs lg:text-base">{user.phone}</td>
                            <td className="px-5 py-2 text-xs lg:text-base">{user.email}</td>
                            <td className="rounded-r-radiusUi flex justify-center">
                                <RegisterActionComponent memberId={user.memberId} />
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
    );
}
export default TableUserRequest;