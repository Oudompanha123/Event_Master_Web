
"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { MaterialActionButton } from "./MaterialActionButtton";

const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "#FBBC04";
    case "on-going":
      return "#551FFF";
    case "done":
      return "#038446";
    case "issue":
      return "#D72222";
    default:
      return "#000000";
  }
};

export default function MaterialComponent() {
  const [rows, setRows] = useState([
    {
      id: 1,
      itemName: "",
      qty: "",
      unit: "",
      dueDate: "",
      handler: "menglim",
      supporters: "nyta",
      status: "pending",
      note: "",
    },
    {
      id: 2,
      itemName: "",
      qty: "",
      unit: "",
      dueDate: "",
      handler: "menglim",
      supporters: "nyta",
      status: "done",
      note: "",
    },
    {
      id: 3,
      itemName: "",
      qty: "",
      unit: "",
      dueDate: "",
      handler: "menglim",
      supporters: "nyta",
      status: "pending",
      note: "",
    },
  ]);

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,
      itemName: "",
      qty: "",
      unit: "",
      dueDate: "",
      handler: "",
      supporters: "",
      status: "pending",
      note: "",
    };
    setRows([...rows, newRow]);
  };

  const handleStatusChange = (index, newStatus) => {
    const newRows = [...rows];
    newRows[index].status = newStatus;
    setRows(newRows);
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div>
      <div className="text-primary-text md:text-lg font-semibold text-2xl mt-8">
        Material Management
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {/* Existing Cards */}
      </div>
      <div className="relative">
        <div className="flex justify-between mt-10">
          <input
            className="border-[1px] pl-10 text-primary-text rounded-full w-[50%] input input-bordered hover:border-gray-400"
            id="username"
            type="text"
            placeholder="Search..."
          />
          <div className="absolute left-0 inset-y-0 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div
            className="flex border border-[#8C59FE] w-[165px] gap-3 p-2.5 rounded-full cursor-pointer"
            onClick={addNewRow}
          >
            <img src="/create-new.svg" alt="" />
            <p className="text-purple-text">New Material</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto px-1">
        <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table mt-3">
          <thead className="uppercase dark:bg-gray-700 dark:text-gray-400 text-sm font-normal h-10 drop-shadow text-primary-text bg-[#F0F1F3]">
            <tr className="text-[14px] font-semibold rounded-2xl">
              <th scope="col" className="p-4 rounded-l-2xl">
                <div className="flex items-center">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-5 text-primary-text">
                NO
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                ITEM NAME
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                QTY
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                UNIT
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                DUE DATE
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                HANDLER
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                SUPPORTERS
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                STATUS
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                NOTE
              </th>
              <th scope="col" className="py-3 text-primary-text rounded-r-2xl">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="drop-shadow rounded-radiusUi text-sm font-normal text-primary-text bg-[#ffffff]">
            {rows.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 font-medium text-base dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 h-8 border border-black"
              >
                <td className="w-4 p-4 rounded-l-2xl">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-${index + 1}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-${index + 1}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th className="text-base px-6 text-primary-text">
                  {index + 1}
                </th>
                <td className="text-sm font-normal text-primary-text">
                  <input
                    type="text"
                    name="itemName"
                    className="border text-primary-text text-base px-2 w-36 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.itemName}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].itemName = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-1">
                  <input
                    type="text"
                    name="qty"
                    className="border text-primary-text text-base px-1 w-20 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.qty}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].qty = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-1">
                  <input
                    type="text"
                    name="unit"
                    className="border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.unit}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].unit = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-1">
                  <input
                    type="date"
                    name="dueDate"
                    className="border text-primary-text sm:text-sm rounded-xl block w-26 p-2.5 focus:outline-none"
                    value={row.dueDate}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].dueDate = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="px-1">
                  <select
                    id="handler"
                    name="handler"
                    className="border text-black text-base sm:text-sm rounded-xl block w-28 p-2.5 focus:outline-none"
                    value={row.handler}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].handler = e.target.value;
                      setRows(newRows);
                    }}
                  >
                    <option value="" disabled hidden></option>
                    <option value="menglim">Menglim</option>
                    <option value="chhun">Kim Chhun</option>
                    <option value="Ntya">Nyta</option>
                    <option value="Bros">Bros</option>
                  </select>
                </td>
                <td className="px-1">
                  <select
                    id="supporters"
                    name="supporters"
                    className="border text-black text-base sm:text-sm rounded-xl block w-28 p-2.5 focus:outline-none"
                    value={row.supporters}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].supporters = e.target.value;
                      setRows(newRows);
                    }}
                  >
                    <option value="" disabled hidden></option>
                    <option value="menglim">Menglim</option>
                    <option value="chhun">Kim Chhun</option>
                    <option value="Ntya">Nyta</option>
                    <option value="Bros">Bros</option>
                  </select>
                </td>
                <td className="px-1">
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={() => toggleDropdown(row.id)}
                      className="btn btn-sm border rounded-radiusUi w-[120px] h-8 flex justify-between items-center"
                      style={{
                        color: getStatusColor(row.status),
                        borderColor: getStatusColor(row.status),
                      }}
                    >
                      {row.status}
                      <FaAngleDown />
                    </div>
                    {activeDropdown === row.id && (
                      <ul
                        tabIndex={0}
                        className="dropdown-content text-base menu shadow bg-base-100 rounded-radiusUi w-44 z-20"
                      >
                        <li>
                          <a
                            href="#"
                            onClick={() => handleStatusChange(index, "pending")}
                            className="hover:text-[#FBBC04]"
                          >
                            pending
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleStatusChange(index, "on-going")}
                            className="hover:text-[#7A44FF]"
                          >
                            on-going
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleStatusChange(index, "done")}
                            className="hover:text-[#038446]"
                          >
                            done
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() => handleStatusChange(index, "issue")}
                            className="hover:text-[#D72222]"
                          >
                            issue
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </td>
                <td className="sm:text-sm font-normal text-base text-primary-text">
                  <input
                    type="text"
                    name="note"
                    className="border text-primary-text text-base sm:text-sm px-2 w-36 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.note}
                    onChange={(e) => {
                      const newRows = [...rows];
                      newRows[index].note = e.target.value;
                      setRows(newRows);
                    }}
                  />
                </td>
                <td className="pl-12 rounded-r-2xl">
                  <MaterialActionButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
