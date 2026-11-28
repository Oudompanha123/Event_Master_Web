import { MemberTable } from "../_components/tables/MemberTable";
import {
  getAllMembersAction,
  searchMemberAction,
} from "@/actions/memberAction";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/lib/auth";
import { SearchMemberComponent } from "../_components/SearchMemberComponent";

const MemberPage = async (props) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = searchParams?.page;
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const userId = userInfo.memberId;
  const userRole = userInfo.role;
  const memberData = await getAllMembersAction(page);
  const search = await searchMemberAction(query);
  const data = query == "" || query == null ? memberData : search;

  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between px-[3px]">
        <div className="lg:w-[650px] md:w-full w-full">
          <a className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Show All Members
          </a>
        </div>
        <div className="w-full flex justify-end lg:mt-0 mt-3">
          <SearchMemberComponent />
        </div>
      </div>
      <MemberTable
        data={data?.payload}
        totalRecord={query ? undefined : data?.totalRecord}
        userRole={userRole}
        userId={userId}
      />
    </div>
  );
};

export default MemberPage;