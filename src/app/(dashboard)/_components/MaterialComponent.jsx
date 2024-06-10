"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import SelectedItem from "./SelectedItem";
import { MaterialActionButton } from "./MaterialActionButtton";
import { HiOutlineSwatch } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { AddSquare } from "iconsax-react";
import DropdownSupporter from "./DropdownSupporterComponent";

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
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  // const [isFocused, setIsFocused] = useState(false);

  // Function to update suggestions based on the input value
  // const updateSuggestions = (value) => {
  //   const countries = ["Coca", "Angkor", "Table", "Ice"];
  //   const filteredSuggestions = countries.filter((country) =>
  //     country.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setSuggestions(filteredSuggestions);
  // };

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    updateSuggestions(value);
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

 
  const [rows, setRows] = useState([
    // Example initial row
    // {
    //   id: 1,
    //   itemName: "",
    //   qty: "",
    //   unit: "",
    //   dueDate: "",
    //   handler: "",
    //   supporters: "",
    //   status: "Pending",
    //   note: "",
    //   inputValue: "", // Add input value state for each row
    //   suggestions: [], // Add suggestions state for each row
    //   isFocused: false, // Add focus state for each row
    // },
    // ... (other rows)
  ]);
  const updateSuggestionsForRow = (value, rowId) => {
    const countries = ["Coca", "Angkor", "Table", "Ice"];
    const filteredSuggestions = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, suggestions: filteredSuggestions } : row
      )
    );
  };
  // Function to handle input change for a specific rows
  const handleInputChangeForRow = (event, rowId) => {
    const value = event.target.value;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, inputValue: value } : row
      )
    );
    updateSuggestionsForRow(value, rowId);
  };
  const handleSuggestionClickForRow = (suggestion, rowId) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, inputValue: suggestion, suggestions: [] } : row
      )
    );
  };


  const [activeDropdown, setActiveDropdown] = useState(null);
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

  if ((rows ?? []).length === 0) {
    return (
      <div>
        {/* Material */}
        <div className="text-primary-text font-semibold text-2xl mb-5 mt-14 ">
          Material Management
        </div>
        <div className="grid grid-cols-1 py-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ">
          <div className="w-auto bg-white rounded-3xl drop-shadow flex px-3.5 py-1 transition duration-300 ease-in-out hover:scale-[103%]">
            <div className="flex items-center">
              <div className="bg-[#624F9D] p-2.5 rounded-full">
                <Image
                  className=""
                  src="/icons/ranking.svg"
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
                  src="/icons/clipboard.svg"
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
                  src="/icons/warning-2.svg"
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
                  src="/icons/delete.svg"
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

        <div className=" relative overflow-x-auto sm:rounded-lg px-1 h-[550px] ">
          <table className="overflow-x-auto  w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table ">
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
                <th scope="col" className=" py-3 text-primary-text px-6 ">
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
          </table>
          <div className=" justify-center w-full content-center space-y-6 py-14">
            <div className="justify-center flex items-center">
              <Image
                className=""
                src="/images/empty-amico.png"
                alt="empty image"
                width={180}
                height={180}
                priority
              />
            </div>
            <p className=" text-center text-xl font-semibold  text-primary-text">
              You don’t have any material!
            </p>
            <p className=" text-center text-xl font-medium  text-gray-500">
              Please create materail for your event!
            </p>
          </div>
        </div>
      </div>
    );
  }


  return (
    <>
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
                src="/icons/ranking.svg"
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
                src="/icons/clipboard.svg"
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
                src="/icons/warning-2.svg"
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
                src="/icons/delete.svg"
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

      <div className=" relative overflow-x-auto sm:rounded-lg px-1 h-[550px] ">
        <table className="overflow-x-auto  w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table ">
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
                {/*  */}
                <td>
                <div style={{ position: "relative", width: "150px" }}>
              <input
                type="text"
                name="asset"
                className="border text-primary-text text-base px-2 w-full h-10 rounded-xl font-normal focus:outline-none"
                placeholder=""
                value={row.inputValue}
                onChange={(e) => handleInputChangeForRow(e, row.id)}
                onFocus={() => {
                  // Update the isFocused state for the specific row
                  setRows((prevRows) =>
                    prevRows.map((r) =>
                      r.id === row.id ? { ...r, isFocused: true } : r
                    )
                  );
                }}
                onBlur={() => {
                  // Delay to allow click event on suggestion
                  setTimeout(() => {
                    setRows((prevRows) =>
                      prevRows.map((r) =>
                        r.id === row.id ? { ...r, isFocused: false } : r
                      )
                    );
                  }, 100);
                }}
              />
             {row.isFocused && row.suggestions?.length > 0 && (
                <ul
                  style={{
                    position: "absolute",
                    width: "100%",
                    backgroundColor: "white",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "0 0 10px 10px",
                    zIndex: 1000,
                  }}
                >
                  {row.suggestions.map((suggestion, idx) => (
                    <li
                      key={idx}
                      onClick={() => handleSuggestionClickForRow(suggestion, row.id)}
                      style={{ padding: "10px", cursor: "pointer" }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
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
                  <DropdownSupporter />
                </td>
                <td className="px-4 w-36">
                  <div className="relative bg-white p-[7px] border rounded-xl ">
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
                    className="border text-primary-text text-base sm:text-sm px-2 w-28 h-10 rounded-xl font-normal focus:outline-none"
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
      </>
  );
}

