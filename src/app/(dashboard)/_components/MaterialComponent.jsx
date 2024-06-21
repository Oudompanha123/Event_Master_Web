"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";
import { MaterialActionButton } from "./MaterialActionButtton";
import { IoSearchOutline } from "react-icons/io5";
import { AddSquare } from "iconsax-react";
import DropdownSupporter from "./DropdownSupporterComponent";
import fetchMaterialData from "@/app/actions/material/fetchMaterialAction";
import CreateMultipleMaterial from "@/app/actions/material/createMaterialMultipleAction";
import { getAllMemberService } from "@/services/dashboard/memberService";
import deleteMaterialMultiple from "@/app/actions/material/deleteMaterialMultipleAction";
import fetchMaterialCount from "@/app/actions/material/fetchCountMaterialAction";
import { CountMaterialComponent } from "./CountMaterailComponent";
import { getAllAssetServiceNoPage } from "@/services/assetService/assetService";
import { getAllAssetNoPageAction } from "@/app/actions/assetAction/handleAssetInput";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "#FBBC04";
    case "OnGoing":
      return "#551FFF";
    case "Done":
      return "#038446";
    case "Issue":
      return "#D72222";
    default:
      return "#000000";
  }
};

export default function MaterialComponent({ id }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState(null);
  const [dataCount, setDataCount] = useState();
  const [asset, setDataAsset] = useState();
  const [rows, setRows] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [checkedRows, setCheckedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [memberData, setMemberData] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const fetchMaterial = async () => {
    const res = await fetchMaterialData(id);
    setData(res?.payload);
  };

  useEffect(() => {
    fetchMaterial();
  }, [id]);

  const fatchAsset = async () => {
    const res = await getAllAssetNoPageAction();
    setDataAsset(res?.payload);
  };

  useEffect(() => {
    fatchAsset();
  }, []);

  const fetchCountMaterial = async () => {
    const res = await fetchMaterialCount(id);
    setDataCount(res?.payload);
  };

  useEffect(() => {
    fetchCountMaterial();
  }, [id]);

  const fetchData = async () => {
    const res = await getAllMemberService();
    setMemberData(res.payload);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    updateSuggestions(value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const updateSuggestionsForRow = (value, rowId) => {
    const filteredSuggestions = asset
      ?.filter((assetItem) =>
        assetItem.assetName.toLowerCase().includes(value.toLowerCase())
      )
      .map((assetItem) => assetItem.assetName);

    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId ? { ...row, suggestions: filteredSuggestions } : row
      )
    );
  };

  const handleInputChangeForRow = (event, rowId) => {
    const value = event.target.value;
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? { ...row, inputValue: value, materialName: value }
          : row
      )
    );
    updateSuggestionsForRow(value, rowId);
  };

  const handleSuggestionClickForRow = (suggestion, rowId) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === rowId
          ? {
              ...row,
              inputValue: suggestion,
              materialName: suggestion,
              suggestions: [],
            }
          : row
      )
    );
  };

  // const handleSelectAllChange = (event) => {
  //   setSelectAllChecked(event.target.checked);
  //   if (event.target.checked) {
  //     const allRowIds = [...data, ...rows].map(
  //       (row) => row.id || row.materialId
  //     );
  //     setCheckedRows(allRowIds);
  //   } else {
  //     setCheckedRows([]);
  //   }
  // };
  const handleSelectAllChange = (event) => {
    setSelectAllChecked(event.target.checked);

    if (event.target.checked) {
      // Combine rows and data only if they are defined
      const allRowIds = [
        ...(data || []), // Use empty array if data is null or undefined
        ...(rows || []), // Use empty array if rows is null or undefined
      ].map((row) => row.id || row.materialId);

      setCheckedRows(allRowIds);
    } else {
      setCheckedRows([]);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, status: newStatus } : row
      )
    );
    setActiveDropdown(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const addNewRow = () => {
    const newRow = {
      id: `new_${rows.length + 1}`,
      materialName: "",
      qty: "",
      unit: "",
      toGet: "",
      dueDate: "",
      handler: "",
      supporters: "",
      status: "Pending",
      inputValue: "",
      suggestions: [],
      isFocused: false,
    };
    setRows([...rows, newRow]);
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

  const deleteSelectedRows = async () => {
    const idsToDelete = checkedRows.filter(
      (id) => !id.toString().startsWith("new_")
    );
    const newIds = checkedRows.filter((id) => id.toString().startsWith("new_"));

    try {
      if (idsToDelete.length > 0) {
        await deleteMaterialMultiple(idsToDelete);
      }
      // Filter out deleted IDs from data, if data exists
      if (data) {
        setData(data.filter((row) => !idsToDelete.includes(row.materialId)));
      }
      // Filter out new rows with 'new_' prefix from rows
      setRows(rows.filter((row) => !newIds.includes(row.id)));
      setCheckedRows([]);
      // alert("Selected materials deleted successfully!");
    } catch (error) {
      console.error("Error deleting materials:", error);
      // alert("Failed to delete materials.");
    }
  };

  //handler save create new material in multiple in save button
  const handleSave = async () => {
    const materials = rows.map((row) => ({
      materialName: row.materialName,
      qty: row.qty,
      // toGet: row.toGet,
      toGet: 20,
      unit: row.unit,
      status: row.status,
      assignDate: new Date().toISOString().split("T")[0],
      dueDate: row.dueDate,
      handlerId: row.handler,
      eventId: id,
      supporters: {},
    }));
    //console.log("the data to post is ", materials);
    // Validation to ensure materialName is not null or empty
    const invalidRows = materials.filter((material) => !material.materialName);
    if (invalidRows.length > 0) {
      // alert("Material name cannot be null or empty");
      return;
    }

    try {
      await CreateMultipleMaterial(materials);
      success("Create Materail succussfully!");
      setSaveSuccess(true);
      setRows([]);
    } catch (error) {
      error("Unsuccussfully! input data is invalid!");
      console.log(error);
    }
  };

  // function error(message) {
  //   toast.error(message, {
  //     position: "top-center",
  //   });
  // }

  function success(message) {
    toast.success(message, {
      position: "top-center",
    });
  }

  //find the length of material data to create the no index of new material
  const dataLength = data ? data.length : 0;

  const renderTableHead = () => {
    return (
      <>
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
            <th scope="col" className="py-5 text-primary-text px-0">
              NO
            </th>
            <th scope="col" className="py-3 text-primary-text px-6">
              ITEM NAME
            </th>
            <th scope="col" className="py-3 text-primary-text px-2">
              QTY
            </th>
            <th scope="col" className="py-3 text-primary-text px-2">
              UNIT
            </th>
            {/* <th scope="col" className="px-2 py-3 text-primary-text">
              To Get
            </th> */}
            <th scope="col" className="py-3 text-primary-text px-2">
              DUE DATE
            </th>
            <th scope="col" className="py-3 text-primary-text">
              HANDLER
            </th>
            <th scope="col" className="py-3 text-primary-text">
              SUPPORTERS
            </th>
            <th scope="col" className="px-2 py-3 text-primary-text">
              STATUS
            </th>
            <th
              scope="col"
              className="py-3 pr-2 pl-0 text-primary-text rounded-r-2xl"
            >
              ACTION
            </th>
          </tr>
        </thead>
      </>
    );
  };
  //Render the material in api created
  const renderRows = () => {
    if (!data) return null;
    return data.map((data, index) => (
      <tr
        key={data.materialId}
        className="bg-white border-b hover:bg-gray-50 border border-black"
      >
        <td className="w-4 p-4 rounded-l-2xl">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={checkedRows.includes(data.materialId)}
              onChange={() => handleCheckboxChange(data.materialId)}
              id={`checkbox-table-${index + 1}`}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={`checkbox-table-${index + 1}`} className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <td className="text-base text-primary-text pl-1">{index + 1}</td>
        <td className="text-sm font-normal text-primary-text px-2">
          <input
            type="text"
            name={`materialName-${index}`}
            className="border text-primary-text text-base px-2 w-32 h-10 rounded-xl font-normal focus:outline-none"
            value={data.materialName}
            readOnly
          />
        </td>
        <td className="text-sm font-normal text-primary-text px-2">
          <input
            type="text"
            name={`qty-${index}`}
            className="border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
            value={data.qty}
            readOnly
          />
        </td>
        <td className="text-sm font-normal text-primary-text px-2">
          <input
            type="text"
            name={`unit-${index}`}
            className="border text-primary-text text-base px-2 w-24 h-10 rounded-xl font-normal focus:outline-none"
            value={data.unit}
            readOnly
          />
        </td>
        {/* <td className="sm:text-sm font-normal px-2 text-base text-primary-text">
          <input
            type="text"
            name={`toGet-${index}`}
            className="border text-primary-text text-base sm:text-sm px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
            value={data.toGet}
            readOnly
          />
        </td> */}
        <td className="px-2">
          <input
            type="date"
            name={`dueDate-${index}`}
            className="border text-gray-900 sm:text-sm rounded-xl block w-22 p-2 focus:outline-none placeholder:text-opacity-50"
            placeholder="dd/mm/yyyy"
            value={data.dueDate}
            readOnly
          />
        </td>
        <td className="px-2">
          <select
            name={`handler-${index}`}
            className="border text-black text-base sm:text-sm rounded-xl block w-28 p-2.5 focus:outline-none"
            value={data.handlerId}
            readOnly
          >
            <option value="">Select handler</option>
            {memberData?.map((data, idx) => (
              <option key={idx} value={data.memberId}>
                {data?.memberName}
              </option>
            ))}
          </select>
        </td>
        <td className="px-2">
          <DropdownSupporter />
        </td>
        <td className="px-2 w-36">
          <div className="bg-white p-[7px] border rounded-xl">
            <div className="cursor-pointer flex items-center">
              <span
                className="flex px-1 py-1 w-16 text-xs font-semibold justify-center rounded-full"
                style={{
                  backgroundColor: getStatusColor(data.status),
                  color: "white",
                }}
              >
                {data.status}
              </span>
              <FaAngleDown className="ml-2" />
            </div>
          </div>
        </td>
        <td className=" rounded-r-2xl">
          <MaterialActionButton data={data} />
        </td>
      </tr>
    ));
  };
  // show the ui empty material when there have no material
  if ((rows ?? []).length === 0 && dataLength === 0) {
    return (
      <div>
        <div className="text-primary-text font-semibold text-2xl mb-5 mt-10 ">
          Material Management
        </div>
        <CountMaterialComponent id={id} />
        <div className="flex justify-between mt-5 h-14 w-full gap-1">
          <div className="w-full lg:w-[730px]">
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

        <div className="relative overflow-x-auto sm:rounded-lg px-1 h-[550px]">
          <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table">
            {renderTableHead()}
            <tbody className="drop-shadow rounded-radiusUi text-sm font-normal text-primary-text bg-[#ffffff] invisible ">
              <tr className="bg-white border-b  font-medium text-base  hover:bg-gray-50 h-8 border border-black">
                <td className="w-4 p-4 rounded-l-2xl">
                  <div className="flex items-center ">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="sr-only">checkbox</label>
                  </div>
                </td>
                <td className="text-base text-primary-text pl-1">1</td>
                <td className="text-sm font-normal text-primary-text px-2 ">
                  <input
                    type="text"
                    name="materialName"
                    className="border text-primary-text text-base px-2 w-32 h-10 rounded-xl font-normal focus:outline-none"
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-2 ">
                  <input
                    type="text"
                    name="qty"
                    className="border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-2">
                  <input
                    type="text"
                    name="unit"
                    className="border text-primary-text text-base px-2 w-24 h-10 rounded-xl font-normal focus:outline-none"
                  />
                </td>
                {/* <td className="sm:text-sm font-normal px-2 text-base text-primary-text">
                  <input
                    type="text"
                    name="toGet"
                    className="border text-primary-text text-base sm:text-sm px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
                  />
                </td> */}
                <td className="px-2">
                  <input
                    type="date"
                    name="dueDate"
                    className="border text-gray-900 sm:text-sm rounded-xl block w-22 p-2 focus:outline-none placeholder:text-opacity-50"
                    placeholder="dd/mm/yyyy"
                  />
                </td>
                <td className="px-2">
                  <select
                    id="handler"
                    name="handler"
                    className="border text-black text-base sm:text-sm rounded-xl block w-28 p-2.5 focus:outline-none"
                  >
                    <option value=""></option>
                    {memberData?.map((data, index) => (
                      <option key={index} value={data.memberId}>
                        {data?.memberName}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-2">
                  <DropdownSupporter />
                </td>
                <td className="px-2 w-36">
                  <div className="bg-white p-[7px] border rounded-xl ">
                    <div className="cursor-pointer flex items-center">
                      <span
                        className="flex px-1 py-1 w-16 text-xs font-semibold justify-center  rounded-full"
                        style={{
                          color: "white",
                        }}
                      ></span>
                      <FaAngleDown className="ml-2" />
                    </div>
                  </div>
                </td>
                <td className="pl-5 pr-2 rounded-r-2xl ">
                  <button className="flex  hover:duration-300 transition-all justify-center items-center gap-1">
                    <CiCircleRemove color="red" className="w-8 h-8 " />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="justify-center w-full content-center space-y-6 pb-10">
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
            <p className="text-center text-xl font-semibold text-primary-text">
              You don’t have any material!
            </p>
            <p className="text-center text-xl font-medium text-gray-500">
              Please create material for your event!
            </p>
          </div>
        </div>
      </div>
    );
  }

  //return when there have material or create new material
  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="text-primary-text font-semibold text-2xl mb-5 mt-10 ">
        Material Management
      </div>
      {/* Render show Count material card componet */}
      <CountMaterialComponent id={id} />
      <div className="flex justify-between mt-5 h-14 w-full gap-1">
        <div className="w-full lg:w-[730px]">
          <input
            type="text"
            placeholder="Search by name"
            className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-[52px] border rounded-3xl pl-10"
          />
          <IoSearchOutline className="w-[24px] h-[24px] -mt-9 ml-3" />
        </div>
        {/* Delete both material in Database and new row for create new material  */}
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
          {/* Save Create new material (Post multiple row ) */}
          {rows.length > 0 && (
            <button
              type="submit"
              className="px-6 h-11 rounded-2xl border-1px border-borderUi flex items-center justify-center gap-3 bg-blue-700 w-32 hover:border-blueUi hover:bg-blue-800"
              onClick={handleSave}
            >
              <p className="text-white">Save</p>
            </button>
          )}
          {/* Create new Material button */}
          <button
            onClick={addNewRow}
            className="hover:bg-purple-text hover:duration-300 transition-all hover:text-white border-1px border-purple-text w-[165px] h-12 justify-center text-purple-text rounded-3xl  md:py-2.5 flex items-center gap-1"
          >
            <AddSquare size="24" variant="Bold" className="" />
            <p className="text-base w-[100px]">New Material</p>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg px-1 min-h-[500px] ">
        <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table">
          {/* Render the table head  */}
          {renderTableHead()}
          <tbody className="drop-shadow rounded-radiusUi text-sm font-normal text-primary-text bg-[#ffffff]">
            {/* Render show the material fetch from api (material created) */}
            {renderRows()}
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
                  {dataLength + index + 1}
                </td>
                <td className="px-2 py-0">
                  <div style={{ position: "relative", width: "128px" }}>
                    <input
                      type="text"
                      name="materialName"
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
                          maxHeight: "150px", // Set max height to 150px
                          overflowY: "auto", // Enable vertical scrolling
                          padding: 0, // Remove default padding
                          margin: 0, // Remove default margin
                          listStyleType: "none", // Remove default list style
                        }}
                      >
                        {row.suggestions.map((suggestion, idx) => (
                          <li
                            key={idx}
                            onClick={() =>
                              handleSuggestionClickForRow(suggestion, row.id)
                            }
                            style={{
                              padding: "0px",
                              cursor: "pointer",
                              width: "100%",
                            }}
                          >
                            <div
                              style={{
                                color: "black",
                                padding: "10px",
                                borderRadius: "5px",
                                width: "100%",
                                display: "block",
                              }}
                            >
                              {suggestion}
                            </div>
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
                    className="border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.qty}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id ? { ...r, qty: e.target.value } : r
                        )
                      )
                    }
                    required
                    min="0.01"
                    step="0.01"
                  />
                </td>
                <td className="text-sm font-normal text-primary-text px-2">
                  <input
                    type="text"
                    name="unit"
                    className="border text-primary-text text-base px-2 w-24 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.unit}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id ? { ...r, unit: e.target.value } : r
                        )
                      )
                    }
                    required
                  />
                </td>
                {/* <td className="sm:text-sm font-normal px-2 text-base text-primary-text">
                  <input
                    type="text"
                    name="toGet"
                    className="border text-primary-text text-base sm:text-sm px-2 w-20 h-10 rounded-xl font-normal focus:outline-none"
                    value={row.toGet}
                    onChange={(e) =>
                      setRows((prevRows) =>
                        prevRows.map((r) =>
                          r.id === row.id ? { ...r, toGet: e.target.value } : r
                        )
                      )
                    }
                    required
                    min="0.01"
                    step="0.01"
                  />
                </td> */}
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
                <td className="px-2">
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
                    <option value=""></option>
                    {memberData?.map((data, index) => (
                      <option key={index} value={data.memberId}>
                        {data?.memberName}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-2">
                  <DropdownSupporter />
                </td>
                <td className="px-2 w-36">
                  <div className="bg-white p-[7px] border rounded-xl ">
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
                        style={{ width: "150px" }}
                      >
                        {["Pending", "OnGoing", "Done", "Issue"].map(
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
                <td className="pl-5 pr-2 rounded-r-2xl ">
                  <button
                    className="flex  hover:duration-300 transition-all justify-center items-center gap-1"
                    onClick={() =>
                      setRows((prevRows) =>
                        prevRows.filter((r) => r.id !== row.id)
                      )
                    }
                  >
                    <CiCircleRemove color="red" className="w-8 h-8 " />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
