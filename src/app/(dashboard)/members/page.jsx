"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import data from "../../../data/member.json";
import { ChangeRoleComponent } from "../_components/ChangeRoleComponent";
import { DeleteMemberComponent } from "../_components/DeleteMemberComponent";
import { Pagination } from "../_components/paginate/Pagination";

const memberData = data.data;
const getRoleColor = (role) => {
  switch (role) {
    case "ROLE_ADMIN":
      return "#7A44FF";
    case "ROLE_USER":
      return "#457EFF";
    case "ROLE_SUB_ADMIN":
      return "#088A4C";
    default:
      return "#000";
  }
};

const getRoleDisplayName = (role) => {
  switch (role) {
    case "ROLE_ADMIN":
      return "Admin";
    case "ROLE_USER":
      return "User";
    case "ROLE_SUB_ADMIN":
      return "Sub Admin";
    default:
      return "Unknown";
  }
};

const MemberPage = () => {
  const [members, setMembers] = useState(memberData);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [confirmingRoleChange, setConfirmingRoleChange] = useState(null);
  const dropdownRefs = useRef([]);

  const handleRoleChange = (id, newRole) => {
    let updatedMembers = [...members];
    const currentAdmin = updatedMembers.find(
      (member) => member.role === "ROLE_ADMIN"
    );

    if (newRole === "ROLE_ADMIN") {
      const requestingMember = updatedMembers.find(
        (member) => member.id === id
      );
      if (currentAdmin && requestingMember) {
        // Swap roles
        currentAdmin.role = requestingMember.role;
        requestingMember.role = "ROLE_ADMIN";
      }
    } else {
      updatedMembers = updatedMembers.map((member) =>
        member.id === id ? { ...member, role: newRole } : member
      );
    }

    setMembers(updatedMembers);
    setActiveDropdown(null);
    setConfirmingRoleChange(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown !== null &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const handleConfirmRoleChange = () => {
    handleRoleChange(confirmingRoleChange.id, confirmingRoleChange.role);
  };

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
            {members.map((member, index) => (
              <tr
                key={member.id}
                className={`h-14 shadow-sm rounded-radiusUi odd:bg-softwhiteUi even:bg-white text-primary-text`}
              >
                <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi border border-r-0 border-member-border sm:text-sm">
                  {index + 1}
                </td>
                <td className="flex items-center text-xs xl:text-base px-5 py-2 border border-x-0 border-member-border sm:text-sm sm:w-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={40}
                    height={40}
                    property=" "
                    className="mr-4 rounded-full"
                  />
                  {member.name}
                </td>
                <td className="px-5 py-2 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  {member.gender}
                </td>
                <td className="px-5 py-2 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  {member.email}
                </td>
                <td className="px-5 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  {member.address}
                </td>
                <td className="px-5 py-2 text-xs xl:text-base border border-x-0 border-member-border sm:text-sm">
                  <div
                    className="inline-block"
                    ref={(el) => (dropdownRefs.current[member.id] = el)}
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={() => toggleDropdown(member.id)}
                      className="btn btn-sm border rounded-radiusUi w-[122px] h-8"
                      style={{
                        color: getRoleColor(member.role),
                        borderColor: getRoleColor(member.role),
                      }}
                    >
                      {getRoleDisplayName(member.role)}
                      {member.role !== "ROLE_ADMIN" && (
                        <FaAngleDown className=" right-0" />
                      )}
                    </div>
                    {activeDropdown === member.id &&
                      member.role !== "ROLE_ADMIN" && (
                        <div className="origin-top-right -ml-14 mt-1 absolute w-44 cursor-pointer rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <ul
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <li>
                              <a
                                className="gap-5 flex px-5 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-lg"
                                role="menuitem"
                                tabIndex="-1"
                                onClick={() =>
                                  setConfirmingRoleChange({
                                    id: member.id,
                                    role: "ROLE_ADMIN",
                                  })
                                }
                              >
                                <Image
                                  src="/icons/Admin.svg"
                                  alt="Admin"
                                  height={22}
                                  width={22}
                                  property=" "
                                />
                                <p className="text-primary-text text-base font-semibold">
                                  Admin
                                </p>
                              </a>
                            </li>
                            <hr />
                            <li>
                              <a
                                className="gap-5 flex px-5 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-lg"
                                role="menuitem"
                                tabIndex="-1"
                                onClick={() =>
                                  setConfirmingRoleChange({
                                    id: member.id,
                                    role: "ROLE_USER",
                                  })
                                }
                              >
                                <Image
                                  src="/icons/User.svg"
                                  alt="User"
                                  height={22}
                                  width={22}
                                  property=" "
                                />
                                <p className="text-primary-text text-base font-semibold">
                                  User
                                </p>
                              </a>
                            </li>
                            <hr />
                            <li>
                              <a
                                className="gap-5 flex px-5 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-lg"
                                role="menuitem"
                                tabIndex="-1"
                                onClick={() =>
                                  setConfirmingRoleChange({
                                    id: member.id,
                                    role: "ROLE_SUB_ADMIN",
                                  })
                                }
                              >
                                <Image
                                  src="/icons/Sub Admin.svg"
                                  alt="Sub Admin"
                                  height={22}
                                  width={22}
                                  property=" "
                                />
                                <p className="text-primary-text text-base font-semibold">
                                  Sub Admin
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      )}
                  </div>
                </td>

                <td className="px-5 py-2 xl:text-sm rounded-r-radiusUi border border-l-0 border-member-border">
                  {member.role !== "ROLE_ADMIN" && <DeleteMemberComponent />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-end mt-8">
          <Pagination />
        </div>
      </div>
      {confirmingRoleChange && (
        <ChangeRoleComponent
          role={getRoleDisplayName(confirmingRoleChange.role)}
          onConfirm={handleConfirmRoleChange}
          onClose={() => setConfirmingRoleChange(null)}
        />
      )}
    </div>
  );
};

export default MemberPage;
