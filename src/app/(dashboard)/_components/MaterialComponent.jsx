"use client";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import SelectedItem from "./SelectedItem";
import { MaterialActionButton } from "./MaterialActionButtton";
import { HiOutlineSwatch } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { AddSquare } from "iconsax-react";

const options = [
  {
    label: "Nita",
    value: 1,
    icon: "https://i.pinimg.com/564x/72/c5/e9/72c5e9561b6551fe42f0716271275089.jpg",
  },
  { label: "Hengly", value: 2 },
  { label: "Phalleng", value: 3 },
  { label: "Davin", value: 4 },
  { label: "Bros", value: 5 },
  { label: "Panha", value: 6 },
  { label: "Ratha", value: 7 },
  { label: "Menglim", value: 8 },
  { label: "Chaiteth", value: 9 },
  { label: "Kim Chhun", value: 10 },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "#FBBC04";
    case "On Going":
      return "#551FFF";
    case "Done":
      return "#038446";
    case "Issue":
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
      status: "Pending",
      note: "",
    },
  ]);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selected, setSelected] = useState([]);
  const [checkedRows, setCheckedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const handleSelectAllChange = (event) => {
    setSelectAllChecked(event.target.checked);
    if (event.target.checked) {
      const allRowIds = rows.map((row) => row.id);
      setCheckedRows(allRowIds);
    } else {
      setCheckedRows([]);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const newRows = rows.map((row) =>
      row.id === id ? { ...row, status: newStatus } : row
    );
    setRows(newRows);
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const addNewRow = () => {
    const newRow = {
      id: rows.length + 1,
      itemName: "",
      qty: "",
      unit: "",
      dueDate: "",
      handler: "",
      supporters: "",
      status: "Pending",
      note: "",
    };
    setRows([...rows, newRow]);
  };

  const customValueRenderer = (selected, _options) => {
    return (
      <div className="flex gap-2">
        {selected.map((item) => (
          <SelectedItem
            key={item.value}
            item={item}
            removeItem={handleRemove}
          />
        ))}
      </div>
    );
  };

  const handleRemove = (item) => {
    setSelected(selected.filter((i) => i.value !== item.value));
  };

  const handleChange = (selectedItems) => {
    if (selectedItems.length <= 2) {
      setSelected(selectedItems);
    }
  };

  const handleCheckboxChange = (id) => {
    setCheckedRows((prevCheckedRows) =>
      prevCheckedRows.includes(id)
        ? prevCheckedRows.filter((rowId) => rowId !== id)
        : [...prevCheckedRows, id]
    );
  };

  const deleteSelectedRows = () => {
    setRows(rows.filter((row) => !checkedRows.includes(row.id)));
    setCheckedRows([]);
  };

  return (
    <div>
      {/* Material */}
      <div className="text-primary-text font-semibold text-2xl py-5">
        Material Management
      </div>
      <div className="grid grid-cols-1 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
        <div className="w-auto bg-white rounded-3xl drop-shadow flex px-3.5 py-1 transition duration-300 ease-in-out hover:scale-[103%]">
          <div className="flex items-center">
            <div className="bg-[#624F9D] p-2.5 rounded-full">
              <Image
                className=""
                src="icons/ranking.svg"
                alt="Next.js Logo"
                width={30}
                height={10}
                priority
              />
            </div>
            <div className="pl-3 ">
              <p className="text-primary-text text-xs lg:text-sm font-medium">
                Total Material
              </p>
              <p className="text-primary-text text-xs lg:text-sm font-bold">
                40
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto py-2 bg-white rounded-3xl drop-shadow flex px-3.5 transition duration-300 ease-in-out hover:scale-[103%]">
          <div className="flex items-center">
            <div className="bg-[#FBBC04] p-2.5 rounded-full ">
              <HiOutlineSwatch size="30" color="#ffffff" />
            </div>
            <div className=" pl-3">
              <p className=" text-primary-text text-xs lg:text-sm font-medium">
                Pending Material
              </p>
              <p className=" text-primary-text text-xs lg:text-sm font-bold">
                20
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto py-2 bg-white rounded-3xl drop-shadow flex px-3.5 transition duration-300 ease-in-out hover:scale-[103%]">
          <div className="flex items-center">
            <div className="bg-[#551FFF] p-2.5 rounded-full">
              <TiFlashOutline size="32" color="#ffffff" />
            </div>
            <div className="pl-3">
              <p className=" text-primary-text text-xs lg:text-sm font-medium">
                On Going Material
              </p>
              <p className=" text-primary-text text-xs lg:text-sm font-bold">
                10
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto py-2 bg-white rounded-3xl drop-shadow flex px-3.5 transition duration-300 ease-in-out hover:scale-[103%]">
          <div className="flex items-center">
            <div className=" bg-[#038446] p-2.5 rounded-full">
              <Image
                className=""
                src="icons/clipboard.svg"
                alt="Next.js Logo"
                width={30}
                height={10}
                priority
              />
            </div>
            <div className="pl-3">
              <p className=" text-primary-text text-xs lg:text-sm font-medium">
                Done Material
              </p>
              <p className=" text-primary-text text-xs lg:text-sm font-bold">
                8
              </p>
            </div>
          </div>
        </div>

        <div className="w-auto py-2 bg-white rounded-3xl drop-shadow flex px-3.5 transition duration-300 ease-in-out hover:scale-[103%]">
          <div className="flex items-center">
            <div className=" bg-[#D72222] p-2.5 rounded-full">
              <Image
                className=""
                src="icons/warning-2.svg"
                alt="Next.js Logo"
                width={32}
                height={10}
                priority
              />
            </div>
            <div className="pl-3">
              <p className=" text-primary-text text-xs lg:text-sm font-medium">
                Issue Material
              </p>
              <p className=" text-primary-text text-xs lg:text-sm font-bold">
                2
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative"> */}
      <div className="flex justify-between mt-5 h-14 w-full gap-1">
        <div className=" w-full lg:w-[730px]">
          <input
            type="text"
            placeholder="Search by name"
            className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-[52px] border rounded-3xl pl-10"
          />
          <IoSearchOutline className="w-[24px] h-[24px] -mt-9 ml-3" />
        </div>

        <div className="gap-2 flex">
          {checkedRows.length > 0 && (
            <button
              onClick={deleteSelectedRows}
              className="flex bg-red-600 hover:duration-300 transition-all text-white border w-28 h-11 rounded-2xl font-medium text-xs lg:text-base justify-center items-center gap-1"
            >
              <Image
                className=""
                src="icons/delete.svg"
                alt="Location"
                width={25}
                height={25}
                priority
              />
              Delete
            </button>
          )}

          <button
            onClick={addNewRow}
            className="hover:bg-purple-text hover:duration-300 transition-all hover:text-white border-1px border-purple-text w-[165px] h-11 justify-center text-purple-text rounded-3xl  md:py-2.5 flex items-center gap-1"
          >
            <AddSquare size="24" variant="Bold" className="" />
            <p className="text-base w-[100px]">New Material</p>
          </button>
        </div>
      </div>

      <div className=" px-1 overflow-auto ">
        <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table ">
          <thead className="uppercase dark:text-gray-400 text-sm font-normal h-10 drop-shadow text-primary-text bg-[#F0F1F3]">
            <tr className="text-[14px] font-semibold rounded-2xl">
              <th className="w-4 p-4 rounded-l-2xl">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectAllChecked}
                    onChange={handleSelectAllChange}
                    id="select-all-checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="select-all-checkbox" className="sr-only">
                    Select all
                  </label>
                </div>
              </th>
              <th scope="col" className=" py-5 text-primary-text px-0">
                NO
              </th>
              <th scope="col" className=" py-3 text-primary-text px-6">
                ITEM NAME
              </th>
              <th scope="col" className=" py-3 text-primary-text px-2">
                QTY
              </th>
              <th scope="col" className=" py-3 text-primary-text px-2">
                UNIT
              </th>
              <th scope="col" className=" py-3 text-primary-text px-2">
                DUE DATE
              </th>
              <th scope="col" className=" py-3 text-primary-text">
                HANDLER
              </th>
              <th scope="col" className=" py-3 text-primary-text">
                SUPPORTERS
              </th>
              <th scope="col" className="px-4 py-3 text-primary-text">
                STATUS
              </th>
              <th scope="col" className="px-0 py-3 text-primary-text">
                NOTE
              </th>
              <th
                scope="col"
                className="py-3 px-0 text-primary-text rounded-r-2xl"
              >
                ACTION
              </th>
            </tr>
          </thead>

          <tbody className="drop-shadow rounded-radiusUi text-sm font-normal text-primary-text bg-[#ffffff]">
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className="bg-white border-b  font-medium text-base  hover:bg-gray-50 h-8 border border-black"
              >
                <td className="w-4 p-4 rounded-l-2xl">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      checked={checkedRows.includes(row.id)}
                      onChange={() => handleCheckboxChange(row.id)}
                      id={`checkbox-table-${index + 1}`}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`checkbox-table-${index + 1}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="text-base text-primary-text pl-1">
                  {index + 1}
                </td>
                <td className="text-sm font-normal text-primary-text">
                  <input
                    type="text"
                    name="itemName"
                    className="border text-primary-text text-base px-2 w-32 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.itemName}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id
                            ? { ...r, itemName: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-2 ">
                  <input
                    type="text"
                    name="qty"
                    className="border text-primary-text text-base px-2 w-16 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.qty}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id ? { ...r, qty: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-2">
                  <input
                    type="text"
                    name="unit"
                    className="border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.unit}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id ? { ...r, unit: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="px-2">
                  <input
                    type="date"
                    name="dueDate"
                    className="border text-gray-900 sm:text-sm rounded-xl block w-22 p-2 focus:outline-none placeholder:text-opacity-50"
                    placeholder="dd/mm/yyyy"
                    value={row.dueDate}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id
                            ? { ...r, dueDate: e.target.value }
                            : r
                        )
                      )
                    }
                  />
                </td>
                <td className="">
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
                    <option value="" selected disabled hidden></option>
                    <option value="menglim">Menglim</option>
                    <option value="chhun">Kim Chhun</option>
                    <option value="Ntya">Nyta</option>
                    <option value="Bros">Bros</option>
                  </select>
                </td>
                <td>
                  <MultiSelect
                    options={options}
                    value={selected}
                    onChange={handleChange}
                    labelledBy="Select Users"
                    valueRenderer={customValueRenderer}
                    className=" text-black"
                    disableSearch={true}
                    hasSelectAll={false}
                  />
                </td>
                <td className="px-4 w-36">
                  <div className="relative  bg-white p-[7px] border rounded-xl ">
                    <div
                      className="cursor-pointer flex items-center"
                      onClick={() => toggleDropdown(row.id)}
                    >
                      <span
                        className="flex px-1 py-1 w-16 text-xs font-semibold justify-center  rounded-full"
                        style={{
                          backgroundColor: getStatusColor(row.status),
                          color: "white",
                        }}
                      >
                        {row.status}
                      </span>
                      <FaAngleDown className="ml-2" />
                    </div>
                    {activeDropdown === row.id && (
                      <div
                        className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
                        style={{ width: "150px" }} // Fixed width set here
                      >
                        {["Pending", "On Going", "Done", "Issue"].map(
                          (statusOption) => (
                            <div
                              key={statusOption}
                              className="px-4 py-3 cursor-pointer hover:bg-gray-200"
                              onClick={() =>
                                handleStatusChange(row.id, statusOption)
                              }
                            >
                              {statusOption}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </td>
                <td className="sm:text-sm font-normal px-0 text-base text-primary-text">
                  <input
                    type="text"
                    name="note"
                    className="border text-primary-text text-base sm:text-sm px-0 w-28 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.note}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id ? { ...r, note: e.target.value } : r
                        )
                      )
                    }
                  />
                </td>
                <td className="pl-5 rounded-r-2xl ">
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
