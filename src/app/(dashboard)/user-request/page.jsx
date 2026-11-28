import { getAllUserRequestService } from "@/services/dashboard/userRequestService";
import { UserRequestTable } from "../_components/tables/UserRequestTable";

const Page = async ({ searchParams }) => {
  const page = searchParams?.page;
  const userRequests = await getAllUserRequestService(page);
  return (
    <>
      <div className="space-y-8 rounded-3xl p-6 bg-white">
        <h2 className="md:text-lg xl:text-xl font-semibold text-primary-text">
          Show All User Request
        </h2>
        <UserRequestTable
          data={userRequests?.payload}
          totalRecord={userRequests?.totalRecord}
        />
      </div>
    </>
  );
};

export default Page;
