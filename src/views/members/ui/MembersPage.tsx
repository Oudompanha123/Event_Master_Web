import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { MemberTable } from "@/widgets/member-table/ui/MemberTable";
import { getAllMembersAction, searchMemberAction } from "@/entities/member/api/memberAction";
import { SearchMemberComponent } from "@/features/member/search/ui/SearchMemberComponent";
import { authOption } from "@/shared/config/auth";
import { PageSection } from "@/shared/ui/page-section";

const MemberPage = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = searchParams?.page;
  const session = await getServerSession(authOption);
  const userInfo = jwtDecode(session?.user?.token);
  const data = query ? await searchMemberAction(query) : await getAllMembersAction(page);

  return (
    <PageSection title="All Members" actions={<SearchMemberComponent className="lg:max-w-md" />}>
      <MemberTable
        data={data?.payload}
        totalRecord={query ? undefined : data?.totalRecord}
        userRole={userInfo.role}
        userId={userInfo.memberId}
      />
    </PageSection>
  );
};

export default MemberPage;
