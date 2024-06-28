import { getAllUserRequestService } from "@/services/dashboard/userRequestService";
import { RegisterActionComponent } from "../_components/RegisterActionComponent";
import { RPaginate } from "../_components/paginate/RPaginate";
import Image from "next/image";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page;
  const userRequests = await getAllUserRequestService(page);
  return (
    <>
      <div className="space-y-8 rounded-3xl p-6 bg-white">
        <h2 className="md:text-lg xl:text-xl font-semibold text-primary-text">
          Show All User Request
        </h2>
        <div className="overflow-scroll px-1">
          <table className="table w-full border-separate border-spacing-y-3">
            <thead className="h-14 shadow-soft rounded-radiusUi text-primary-text bg-[#FFFFFF] uppercase">
              <tr className="text-xs lg:text-base">
                <th className="px-5 py-2 font-medium rounded-l-radiusUi">No</th>
                <th className="px-5 py-2 font-medium w-64">Name</th>
                <th className="px-5 py-2 font-medium">Gender</th>
                <th className="px-5 py-2 font-medium">Phone Number</th>
                <th className="px-5 py-2 font-medium">Email</th>
                <th className="px-5 py-2 font-medium rounded-r-radiusUi text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {userRequests?.payload?.map((user, index) => (
                <tr
                  key={user.memberId}
                  className={`h-14 shadow-soft text-primary-text rounded-radiusUi odd:bg-softwhiteUi even:bg-white`}
                >
                  <td className="px-5 py-2 text-xs lg:text-base rounded-l-radiusUi">
                    {page > 1 ? index + 1 + 8 * (page - 1) : index + 1}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base w-56">
                    {user.memberName}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {user.gender ? true : "No gender"}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {user.phone}
                  </td>
                  <td className="px-5 py-2 text-xs lg:text-base">
                    {user.email}
                  </td>
                  <td className="rounded-r-radiusUi flex justify-center">
                    <RegisterActionComponent memberId={user.memberId} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {userRequests.totalRecord == 0 && (
            <div className="justify-center h-[60vh] w-full content-center space-y-2 pb-10 flex flex-col items-center">
              <Image
                className=""
                src="/images/empty-amico.png"
                alt="empty image"
                width={180}
                height={180}
                priority
              />
              <p className="text-center text-2xl font-semibold text-primary-text">
                No results found
              </p>
              <p className="text-center text-xl text-gray-500">
                Please try another search!
              </p>
            </div>
          )}

          <div
            className={`${
              userRequests.totalRecord == 0 && "hidden"
            } w-full flex justify-end mt-8`}
          >
            <RPaginate totalData={userRequests?.totalRecord} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
