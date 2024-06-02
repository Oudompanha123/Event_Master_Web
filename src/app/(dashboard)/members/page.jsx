"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { DeleteMemberComponent } from "../_components/DeleteMemberComponent";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const memberData = [
  {
    id: 1,
    name: "Morng Many",
    gender: "Female",
    email: "many@gmail.com",
    address: "Phnom Penh",
    role: "admin",
    image: "images/Avatar.png",
  },
  {
    id: 2,
    name: "Ly Nita",
    gender: "Female",
    email: "nita@gmail.com",
    address: "Prey Veng",
    role: "user",
    image: "images/member profile9.svg",
  },
  {
    id: 3,
    name: "Ra Dalin",
    gender: "Female",
    email: "dalin@gmail.com",
    address: "Prey Veng",
    role: "sub admin",
    image: "images/member profile2.svg",
  },
  {
    id: 4,
    name: "Ny Daro",
    gender: "Male",
    email: "daro@gmail.com",
    address: "Kampot",
    role: "user",
    image: "images/member profile7.svg",
  },
  {
    id: 5,
    name: "Sok Bora",
    gender: "Male",
    email: "bora@gmail.com",
    address: "Siem Reap",
    role: "user",
    image: "images/member profile11.svg",
  },
  {
    id: 6,
    name: "Pheak Nary",
    gender: "Female",
    email: "nary@gmail.com",
    address: "Phnom Penh",
    role: "sub admin",
    image: "images/member profile5.svg",
  },
  {
    id: 7,
    name: "Pok Hengly",
    gender: "Female",
    email: "hengly@gmail.com",
    address: "Banteay Meanchey",
    role: "user",
    image: "images/member profile8.svg",
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
  }
};
const MemberPage = () => {
  const [members, setMembers] = useState(memberData);

  const handleRoleChange = (id, newRole) => {
    const updateMember = members.map((member) =>
      member.id === id ? { ...member, role: newRole } : member
    );
    setMembers(updateMember);
  };
  return (
    <div className="main bg-white h-auto p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row w-full justify-between mt-2">
        <div className="lg:w-[650px]">
          <a className="font-semibold md:text-lg xl:text-xl">Show All Members</a>
        </div>
        <div className="w-full flex justify-end mt-6 lg:mt-0">
          <div className="w-full lg:w-fit">
            <input
              type="text"
              placeholder="Search by name"
              className="font-medium text-base focus:outline-none focus:border-purple-text w-full lg:w-[680px] h-11 border rounded-3xl pl-10"
            />
            <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll px-1">
        <table className="table w-full mt-5 border-separate border-spacing-y-3">
          <thead className="text-primary-text h-14 drop-shadow-soft rounded-radiusUi bg-[#FFFFFF]">
            <tr className="text-xs lg:text-base">
              <th className="px-5 py-2 font-medium rounded-l-radiusUi">ID</th>
              <th className="px-5 py-2 font-medium">NAME</th>
              <th className="px-5 py-2 font-medium">GENDER</th>
              <th className="px-5 py-2 font-medium">EMAIL</th>
              <th className="px-5 py-2 font-medium">ADDRESS</th>
              <th className="px-5 py-2 font-medium">ROLE</th>
              <th className="px-5 py-2 font-medium rounded-r-radiusUi">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr
                key={member.id}
                className={`text-primary-text odd:bg-softwhiteUi even:bg-white h-12 drop-shadow-soft rounded-radiusUi "
                  }`}
              >
                <td className="px-5 py-2 text-xs xl:text-base rounded-l-radiusUi">
                  {member.id}
                </td>
                <td className="text-xs xl:text-base flex items-center px-5 py-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" mr-4  rounded-full w-10 h-10"
                  />
                  {member.name}
                </td>
                <td className="px-5 py-2 text-xs xl:text-base">{member.gender}</td>
                <td className="px-5 py-2 text-xs xl:text-base">{member.email}</td>
                <td className="px-5 py-2 text-xs xl:text-base">{member.address}</td>
                <td className="px-5 py-2 text-xs xl:text-base">
                  <select
                    value={member.role}
                    onChange={(e) => handleRoleChange(member.id, e.target.value)}
                    className="select select-sm h-9 font-medium w-[125px] pl-4 border rounded-radiusUi drop-shadow focus:outline-none"
                    style={{
                      color: getRoleColor(member.role),
                      borderColor: getRoleColor(member.role),
                    }}
                  >
                    <option value="admin" className=" text-primary-text">
                      Admin
                    </option>
                    <option value="user" className=" text-primary-text">
                      User
                    </option>
                    <option value="sub admin" className=" text-primary-text">
                      Sub Admin
                    </option>
                  </select>
                </td>
                <td className="px-5 py-2 text-xs xl:text-sm rounded-r-radiusUi">
                  {member.role !== "admin" && <DeleteMemberComponent />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberPage;
