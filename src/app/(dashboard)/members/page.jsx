'use server'
import { IoSearchOutline } from "react-icons/io5";
import { Pagination } from "../_components/paginate/Pagination";
import { MemberComponent } from "../_components/MemberProfileComponent";
import { DeleteMemberbutton } from "../_components/DeleteMemberbutton";
import { getAllMemberService } from "@/services/dashboard/memberService";
import { MemberRoleComponent } from "../_components/MemberRoleComponent";

const MemberPage = async () => {
  const memberData = await getAllMemberService();
  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between px-[3px]">
        <div className="lg:w-[650px] md:w-full w-full">
          <a className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Show All Members
          </a>
        </div>
        <div className="w-full flex justify-end lg:mt-0 mt-3">
          <div className="relative w-full lg:w-[450px]">
            <input
              type="text"
              placeholder="Search by name"
              className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
            />
            <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
          </div>
        </div>
      </div>
      <div className="w-full overflow-scroll">
        <table className="table w-full px-1 border-separate border-spacing-y-3 mt-5">
          <thead className="h-14 text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
            <tr className="w-full overflow-auto text-xs lg:text-base">
              <th className="px-5 py-2 font-medium rounded-l-radiusUi border border-r-0 border-member-border">
                NO
              </th>
              <th className="px-5 py-2 font-medium border border-x-0 border-member-border sm:text-sm sm:w-48 sm:mr-5">
                NAME
              </th>
              <th className="px-5 py-2 font-medium border border-x-0 border-member-border sm:text-sm">
                GENDER
              </th>
              <th className="px-5 py-2 font-medium border border-x-0 border-member-border sm:text-sm">
                EMAIL
              </th>
              <th className="px-5 py-2 font-medium border border-x-0 border-member-border sm:text-sm">
                ADDRESS
              </th>
              <th className="px-5 py-2 font-medium border border-x-0 border-member-border sm:text-sm">
                ROLE
              </th>
              <th className="px-5 py-2 font-medium rounded-r-radiusUi border border-l-0 border-member-border sm:text-sm">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {memberData?.payload?.map((member, index) => (
              <tr
                key={member.id}
                className={`h-14 shadow-sm rounded-radiusUi odd:bg-softwhiteUi even:bg-white text-primary-text`}
              >
                <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi border border-r-0 border-member-border sm:text-sm">
                  {index + 1}
                </td>
                <td className="text-xs xl:text-base sm:text-sm ">
                  <MemberComponent memberInfo={member} />
                </td>
                <td className="px-5 py-2 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  {member.gender ? member.gender : "No gender"}
                </td>
                <td className="px-5 py-2 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  {member.email}
                </td>
                <td className="px-5 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  {member.address}
                </td>
                <td className="px-5 py-2 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  <MemberRoleComponent memberId={member.memberId} memberRoles={member.role} />
                </td>
                <td className="px-5 py-2 xl:text-sm rounded-r-radiusUi border border-l-0 border-member-border">
                  <DeleteMemberbutton member={member} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end mt-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default MemberPage;
