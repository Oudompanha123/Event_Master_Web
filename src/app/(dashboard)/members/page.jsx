"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { DeleteMemberComponent } from "../_components/DeleteMemberComponent";
import { Pagination } from "../_components/Pagination";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

const memberData = [
  {
    id: 1,
    name: "Morng Many",
    gender: "Female",
    email: "many@gmail.com",
    address: "Phnom Penh",
    role: "admin",
    image: "/images/Avatar.png",
  },
  {
    id: 2,
    name: "Ly Nita",
    gender: "Female",
    email: "nita@gmail.com",
    address: "Prey Veng",
    role: "user",
    image: "/images/member profile9.svg",
  },
  {
    id: 3,
    name: "Ra Dalin",
    gender: "Female",
    email: "dalin@gmail.com",
    address: "Prey Veng",
    role: "sub admin",
    image: "/images/member profile2.svg",
  },
  {
    id: 4,
    name: "Ny Daro",
    gender: "Male",
    email: "daro@gmail.com",
    address: "Kampot",
    role: "user",
    image: "/images/member profile7.svg",
  },
  {
    id: 5,
    name: "Sok Bora",
    gender: "Male",
    email: "bora@gmail.com",
    address: "Siem Reap",
    role: "user",
    image: "/images/member profile11.svg",
  },
  {
    id: 6,
    name: "Pheak Nary",
    gender: "Female",
    email: "nary@gmail.com",
    address: "Phnom Penh",
    role: "sub admin",
    image: "/images/member profile5.svg",
  },
  {
    id: 7,
    name: "Pok Hengly",
    gender: "Female",
    email: "hengly@gmail.com",
    address: "Banteay Meanchey",
    role: "user",
    image: "/images/member profile8.svg",
  },
];

const getRoleColor = (role) => {
  switch (role) {
    case "admin":
      return "#7A44FF";
    case "user":
      return "#457EFF";
    case "sub admin":
      return "#088A4C";
    default:
      return "#000";
  }
};

const MemberPage = () => {
  const [members, setMembers] = useState(memberData);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleRoleChange = (id, newRole) => {
    const updateMember = members.map((member) =>
      member.id === id ? { ...member, role: newRole } : member
    );
    setMembers(updateMember);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between px-[3px]">
        <div className="lg:w-[650px] md:w-full w-full">
          <a className="font-semibold md:text-lg xl:text-xl text-primary-text block py-3 lg:py-0">
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
            <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto px-[3px]">
        <table className="table w-full px-1 border-separate border-spacing-y-3 mt-5">
          <thead className="h-14 drop-shadow-soft text-primary-text rounded-radiusUi bg-[#FFFFFF] uppercase">
            <tr className="text-xs lg:text-base">
              <th className="px-5 py-2 font-medium rounded-l-radiusUi">ID</th>
              <th className="px-5 py-2 font-medium">NAME</th>
              <th className="px-5 py-2 font-medium">GENDER</th>
              <th className="px-5 py-2 font-medium">EMAIL</th>
              <th className="px-5 py-2 font-medium">ADDRESS</th>
              <th className="px-5 py-2 font-medium">ROLE</th>
              <th className="px-5 py-2 font-medium rounded-r-radiusUi">
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
                <td className="px-5 py-2 text-xs lg:text-base rounded-l-radiusUi border border-r-0 border-member-border">
                  {member.id}
                </td>
                <td className="flex items-center text-xs lg:text-base px-5 py-2 border border-x-0 border-member-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="mr-4 rounded-full"
                  />
                  {member.name}
                </td>
                <td className="px-5 py-2 text-xs lg:text-base border border-x-0 border-member-border">
                  {member.gender}
                </td>
                <td className="px-5 py-2 text-xs lg:text-base border border-x-0 border-member-border">
                  {member.email}
                </td>
                <td className="px-5 py-2 text-xs lg:text-base border border-x-0 border-member-border">
                  {member.address}
                </td>
                <td className="px-5 py-2 text-xs lg:text-base border border-x-0 border-member-border">
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={() => toggleDropdown(member.id)}
                      className="btn btn-sm border rounded-radiusUi w-[120px] h-8"
                      style={{
                        color: getRoleColor(member.role),
                        borderColor: getRoleColor(member.role),
                      }}
                    >
                      {member.role}
                      <FaAngleDown />
                    </div>
                    {activeDropdown === member.id && (
                      <ul
                        tabIndex={0}
                        className="overflow-hidden dropdown-content menu bg-base-100 lg:text-primary-text lg:text-base rounded-radiusUi w-48 z-50 order-5"
                      >
                        <li>
                          <a
                            href="#"
                            onClick={() => handleRoleChange(member.id, "admin")}
                            className=" hover:text-[#7A44FF]"
                          >
                            <Image
                              src="/icons/admin.svg"
                              alt="Admin"
                              width={20}
                              height={20}
                              className="inline mr-3"
                            />
                            Admin
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleRoleChange(member.id, "user")}
                            className=" hover:text-[#457EFF]"
                          >
                            <Image
                              src="/icons/user.svg"
                              alt="User"
                              width={20}
                              height={20}
                              className="inline mr-3"
                            />
                            User
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() =>
                              handleRoleChange(member.id, "sub admin")
                            }
                            className="hover:text-[#088A4C]"
                          >
                            <Image
                              src="/icons/sub admin.svg"
                              alt="Sub Admin"
                              width={20}
                              height={20}
                              className="inline mr-3 "
                            />
                            Sub Admin
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </td>
                <td className="px-5 py-2 xl:text-sm rounded-r-radiusUi border border-l-0 border-member-border">
                  {member.role !== "admin" && <DeleteMemberComponent />}
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
