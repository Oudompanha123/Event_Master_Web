'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { ChangeRoleComponent } from './ChangeRoleComponent';

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
export const MemberRoleConponent = ({ memberRole }) => {
    // console.log(memberRole);
    const [members, setMembers] = useState(memberRole);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [confirmingRoleChange, setConfirmingRoleChange] = useState(null);
    const dropdownRefs = useRef([]);

    const handleRoleChange = (id, newRole) => {
        const updatedMembers = members.role;
        console.log(updatedMembers);
        // let updatedMembers = [...members];
        // const currentAdmin = updatedMembers.find(
        //     (member) => member.role === "ROLE_ADMIN"
        // );

        // if (newRole === "ROLE_ADMIN") {
        //     const requestingMember = updatedMembers.find(
        //         (member) => member.id === id
        //     );
        //     if (currentAdmin && requestingMember) {
        //         // Swap roles
        //         currentAdmin.role = requestingMember.role;
        //         requestingMember.role = "ROLE_ADMIN";
        //     }
        // } else {
        //     updatedMembers = updatedMembers.map((member) =>
        //         member.id === id ? { ...member, role: newRole } : member
        //     );
        // }

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
        <div>
            <div
                className="inline-block"
                ref={(el) => (dropdownRefs.current[memberRole.id] = el)}
            >
                <div
                    tabIndex={0}
                    role="button"
                    onClick={() => toggleDropdown(memberRole.id)}
                    className="btn btn-sm border rounded-radiusUi w-[122px] h-8"
                    style={{
                        color: getRoleColor(memberRole.role),
                        borderColor: getRoleColor(memberRole.role),
                    }}
                >
                    {getRoleDisplayName(memberRole.role)}
                    {memberRole.role !== "ROLE_ADMIN" && <FaAngleDown className=" right-0" />}
                </div>
                {activeDropdown === memberRole.id &&
                    memberRole.role !== "ROLE_ADMIN" && (
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
                                                id: memberRole.id,
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
                                                id: memberRole.id,
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
                                                id: memberRole.id,
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
    )
}
