import { getAllUserRequestService } from "@/entities/user-request/api/userRequestService";
import { UserRequestTable } from "@/widgets/user-request-table/ui/UserRequestTable";

const Page = async (props) => {
  const searchParams = await props.searchParams;
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
