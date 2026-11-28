import { getAllUserRequestService } from "@/entities/user-request/api/userRequestService";
import { UserRequestTable } from "@/widgets/user-request-table/ui/UserRequestTable";
import { PageSection } from "@/shared/ui/page-section";

const Page = async (props) => {
  const searchParams = await props.searchParams;
  const userRequests = await getAllUserRequestService(searchParams?.page);
  return (
    <PageSection title="User Requests" description="People who signed up with your organization code and are waiting for approval.">
      <UserRequestTable data={userRequests?.payload} totalRecord={userRequests?.totalRecord} />
    </PageSection>
  );
};

export default Page;
