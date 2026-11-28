"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import DeleteDialog from "./DeleteDialog";
import deleteMaterialMultiple from "@/app/actions/material/deleteMaterialMultipleAction";

const DEFAULT_AVATAR = "/images/default-profile.png";

// swap a broken/missing profile picture for the default avatar
const handleAvatarError = (e) => {
  if (!e.currentTarget.src.endsWith(DEFAULT_AVATAR)) e.currentTarget.src = DEFAULT_AVATAR;
};

// small "picture + name" chip used for the handler and each supporter
const PersonChip = ({ name, picture }) => (
  <div className="inline-flex items-center rounded-3xl bg-[#F8F2F2] pr-3 py-[2px] pl-[2px] max-w-full">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={picture || DEFAULT_AVATAR}
      onError={handleAvatarError}
      alt=""
      className="w-8 h-8 rounded-full object-cover shrink-0"
    />
    <p className="ms-2 text-sm font-bold text-gray-900 truncate max-w-36" title={name}>
      {name}
    </p>
  </div>
);

export function MaterialActionButton({ data , onEdit, userRole, handler, userId, onDeleted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const dropdownRef = useRef(null);
  const canDelete = userRole === "ROLE_ADMIN" || userRole === "ROLE_SUB_ADMIN";
  const supporters = Array.isArray(data?.supporters)
    ? data.supporters
    : data?.supporters?.data ?? [];

  const handleDelete = async () => {
    setIsDeleteOpen(false);
    try {
      await deleteMaterialMultiple([data.materialId]);
      toast.success("Delete material successfully!", { position: "top-center" });
      onDeleted?.();
    } catch (err) {
      console.error("Delete material failed:", err);
      toast.error("Can't delete this material, please try again.", { position: "top-center" });
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="inline-block pl-5" ref={dropdownRef}>
        <button
          type="button"
          // className="right-5 w-8 h-8 items-center flex flex-row justify-right z-0 "
          className=" right-0 w-8 h-8 flex items-center justify-right z-0 "
          onClick={toggleDropdown}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
              fill="#7A7A9D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              fill="#7A7A9D"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
              fill="#7A7A9D"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  className="gap-5 flex px-5 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-lg"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={() =>
                    (document.getElementById(data.materialId) as HTMLDialogElement | null)?.showModal()
                  }
                >
                  <Image
                    src="/icons/detail.svg"
                    alt="detail"
                    height={22}
                    width={22}
                  />
                  <p className="text-primary-text text-base font-semibold">
                    View detail
                  </p>
                </a>
              </li>
              <hr />
              <li>
              <span className={`${userRole === "ROLE_USER" && handler !== userId ? "hidden" : ""}`}>
                <a
                  className='user_role gap-5 flex px-5 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-lg'
                  role="menuitem"
                  tabIndex={-1}
                  onClick={onEdit}
                >
                  <Image
                    src="/icons/edit-blue.svg"
                    alt="edit"
                    height={24}
                    width={24}
                  />
                  <p className="text-primary-text text-base font-semibold">
                    Edit
                  </p>
                </a>
                </span>
              </li>
              {canDelete && (
                <>
                  <hr />
                  <li>
                    <a
                      className="gap-5 flex px-5 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 rounded-lg cursor-pointer"
                      role="menuitem"
                      tabIndex={-1}
                      onClick={() => {
                        closeDropdown();
                        setIsDeleteOpen(true);
                      }}
                    >
                      <Image
                        src="/icons/delete-red.svg"
                        alt="delete"
                        height={24}
                        width={24}
                      />
                      <p className="text-primary-text text-base font-semibold">
                        Delete
                      </p>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>

      {data && (
        <dialog id={data.materialId} className="modal">
          <div className="modal-box w-11/12 max-w-xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mt-2 mr-2">
                <Image
                  src="/icons/cancel.svg"
                  alt="cancel"
                  className="w-7 h-7"
                  width={7}
                  height={7}
                />
              </button>
            </form>

            <div>
              <h3 className="text-xl font-semibold text-primary-text mb-8">
                Material Detail
              </h3>

              <div className="">
                <div className="flex mb-3 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                    <Image
                      src="/icons/material.svg"
                      alt="headler"
                      className="h-5 w-5"
                      width={5}
                      height={5}
                    />
                    Material Name
                  </div>
                  <div className="text-large font-bold text-primary-text">
                    {data?.materialName}
                  </div>
                </div>
                <div className="flex mb-3 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                    <Image
                      src="/icons/quantity.svg"
                      alt="qty"
                      className="h-5 w-5"
                      width={5}
                      height={5}
                    />
                    Quantity
                  </div>
                  <div className="text-large font-bold text-primary-text">
                    {Number(data?.qty ?? 0).toLocaleString("en-US", { maximumFractionDigits: 2 })}
                  </div>
                </div>
                <div className="flex mb-3 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                    <Image
                      src="/icons/quantity.svg"
                      alt="unit"
                      className="h-5 w-5"
                      width={5}
                      height={5}
                    />
                    Unit
                  </div>
                  <div className="text-large font-bold text-primary-text">
                    {data?.unit || "-"}
                  </div>
                </div>
                <div className="flex mb-3 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                    <Image
                      src="/icons/assign-date.svg"
                      alt="assignDate"
                      className="h-5 w-5"
                      width={5}
                      height={5}
                    />
                    Assign Date
                  </div>
                  <div className="text-large font-bold text-primary-text">
                    {data?.assignDate}
                  </div>
                </div>
                <div className="flex mb-3 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                    <Image
                      src="/icons/due-date.svg"
                      alt="DueDate"
                      className="h-5 w-5"
                      width={5}
                      height={5}
                    />
                    Due Date
                  </div>
                  <div className="text-large font-bold text-primary-text">
                    {data?.dueDate}
                  </div>
                </div>
                <div className="flex mb-3 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%]">
                    <Image
                      src="/icons/handler.svg"
                      alt="headler"
                      className="h-5 w-5"
                      width={5}
                      height={5}
                    />
                    Handler
                  </div>
                  {data?.handlerName ? (
                    <PersonChip name={data.handlerName} picture={data?.picture} />
                  ) : (
                    <span className="text-sm text-gray-400">No handler</span>
                  )}
                </div>
                <div className="flex mb-5 gap-8">
                  <div className="flex gap-4 text-sm font-semibold text-primary-text w-[30%] shrink-0 items-center self-start pt-2">
                    <img
                      src="/icons/supporter.svg"
                      alt=""
                      className="w-5 h-5"
                    />
                    Supporter
                  </div>
                  <div className="gap-2 flex flex-wrap min-w-0">
                    {supporters.length > 0 ? (
                      <>
                        {/* show at most 2 supporters, the rest collapse into "+N more" */}
                        {supporters.slice(0, 2).map((supporter, index) => (
                          <PersonChip
                            key={supporter?.id ?? index}
                            name={supporter?.name}
                            picture={supporter?.avatar}
                          />
                        ))}
                        {supporters.length > 2 && (
                          <p
                            className="w-full text-sm font-semibold text-gray-500 pl-1"
                            title={supporters.slice(2).map((s) => s?.name).join(", ")}
                          >
                            ... +{supporters.length - 2} more
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="text-sm text-gray-400 pt-2">No supporter</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}

      <DeleteDialog
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
