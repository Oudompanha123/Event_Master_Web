"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { ChangeRoleComponent } from "./ChangeRoleComponent";
import { updateMemberAction } from "@/actions/memberAction";

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

export const MemberRoleComponent = ({
  memberId,
  memberRoles,
  userRole,
  userId,
}) => {
  console.log("userId:  ", userId);
  console.log("user role:", userRole);
  const [userInfo, setUserInfo] = useState();
  const [currentRole, setCurrentRole] = useState(memberRoles);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [confirmingRoleChange, setConfirmingRoleChange] = useState(null);
  const dropdownRefs = useRef([]);

  console.log('checking gg', confirmingRoleChange)

  const handleRoleChange = async (newRole) => {
    console.log(newRole, 'checking new role')
    if (newRole == "ROLE_ADMIN") {
      const response = await updateMemberAction(memberId, newRole);
      const adminupdate = await updateMemberAction(userId, "ROLE_SUB_ADMIN");
      console.log("user:,admin", response, adminupdate);
    }
    try {
      if (response.status === "OK") {
        setCurrentRole(newRole);
        // setCurrentRole("ROLE_SUB_ADMIN")
      } else {
        console.error("Failed to update role:", response.message);
      }
    } catch (error) {
      console.error("Error updating role:", error);
    }
    setActiveDropdown(false);
    setConfirmingRoleChange(null);
  };

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        dropdownRefs.current[0] &&
        !dropdownRefs.current[0].contains(event.target)
      ) {
        closeDropdown();
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const handleConfirmRoleChange = () => {
    handleRoleChange(confirmingRoleChange?.role);
    console.log(confirmingRoleChange?.role, "damn")
  };

  useEffect(() => {
    handleConfirmRoleChange();
  }, [currentRole]);

  return (
    <div>
      <div
        className="inline-block"
        ref={(el) => (dropdownRefs.current[0] = el)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDropdown}
          className="btn btn-sm border rounded-radiusUi w-[122px] h-8"
          style={{
            color: getRoleColor(memberRoles),
            borderColor: getRoleColor(memberRoles),
          }}
        >
          {getRoleDisplayName(memberRoles)}
          {memberRoles !== "ROLE_ADMIN" && userRole == "ROLE_ADMIN" && (
            <FaAngleDown className="right-0" />
          )}
        </div>
        {activeDropdown &&
          memberRoles !== "ROLE_ADMIN" &&
          userRole == "ROLE_ADMIN" && (
            <div
              className={`
              origin-top-right -ml-14 mt-1 absolute w-44 cursor-pointer rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            >
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
                        id: 1,
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
                        id: 2,
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
                        id: 3,
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
