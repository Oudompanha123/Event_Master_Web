"use client";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";
import { AddSquare } from "iconsax-react";
import Dropdown from "./DropdownSupporterComponent";
import fetchMaterialData from "@/app/actions/material/fetchMaterialAction";
import CreateMultipleMaterial from "@/app/actions/material/createMaterialMultipleAction";
import { getAllMemberForMaterialCreateService } from "@/services/dashboard/memberService";
import deleteMaterialMultiple from "@/app/actions/material/deleteMaterialMultipleAction";
import fetchMaterialCount from "@/app/actions/material/fetchCountMaterialAction";
import { CountMaterialComponent } from "./CountMaterailComponent";
import { getAllAssetNoPageAction } from "@/app/actions/assetAction/handleAssetInput";
import { toast } from "react-toastify";
import DeleteDialog from "./DeleteDialog";
import EmptyMaterialRow from "./EmptyMaterialRow";
import MaterialRow from "./MaterialRow";
import TableHeadMaterial from "./TableHeadOfMaterial";
import { SearchMaterialComponent } from "../_components/SearchMaterialComponent";
import { searchMaterialByName } from "@/services/dashboard/materialService";

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

export default function MaterialComponent({
  id,
  searchParams,
  userRole,
  userId,
  endDate,
}) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState(null);
  const [dataCount, setDataCount] = useState();
  const [asset, setDataAsset] = useState();
  const [rows, setRows] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [checkedRows, setCheckedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [memberData, setMemberData] = useState();
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [searchMaterial, setSearchMaterial] = useState([]);
  const [searchQuery, setSearchQuery] = useState(searchParams?.query || "");
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // Define searchInput state
  const [cancelUpdate, setCancelUpdate] = useState(false);
  // the end date in form 2024-11-27T01:33:23.572
  let query = searchQuery;
  const nullsearch = searchMaterial?.length;
  const dataOfMaterial = query === "" || query == null ? data : searchMaterial;

  const searchNameMaterial = async () => {
    const res = await searchMaterialByName(query, id);
    setSearchMaterial(res?.payload);
  };

  const fetchMaterial = async () => {
    const res = await fetchMaterialData(id);
    setData(res?.payload);
  };

  const fatchAsset = async () => {
    const res = await getAllAssetNoPageAction();
    setDataAsset(res?.payload);
  };

  const fetchCountMaterial = async () => {
    const res = await fetchMaterialCount(id);
    setDataCount(res?.payload);
  };

  const fetchData = async () => {
    const res = await getAllMemberForMaterialCreateService();
    setMemberData(res.payload);
  };

  useEffect(() => {
    fetchMaterial(), fetchData(), fatchAsset(), fetchCountMaterial();
  }, [saveSuccess, checkedRows, isDeleteDialogOpen, cancelUpdate]);

  useEffect(() => {
    searchNameMaterial();
  }, [query]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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
      dueDate: "",
      handler: "",
      supporters: "",
      status: "Pending",
      inputValue: "",
      suggestions: [],
      isFocused: false,
    };
    setRows([...rows, newRow]);
    setSaveSuccess(false);
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

  const handleCancelUpdate = () => {
    setCancelUpdate(!cancelUpdate); // Toggle cancelUpdate state
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
      success("Delete materail selected successfully!");
      setSelectAllChecked(false); // Uncheck the "Select All" checkbox
      handleClearSearch();
      // alert("Selected materials deleted successfully!");
    } catch (error) {
      console.error("Error deleting materials:", error);
      setIsLoading(false);
      // alert("Failed to delete materials.");
    }
  };

  const validateInputs = (list) => {
    const today = new Date().toISOString().split("T")[0];

    const newErrors = list.map((item) => {
      const error = { name: "", qty: "", unit: "", dueDate: "" };
      const today = new Date().toISOString().split("T")[0];
      if (!item.materialName) {
        error.name = "Name is required.";
      }
      if (!item.qty || isNaN(item.qty)) {
        error.qty = "Quantity must be a number.";
      }
      if (!item.unit) {
        error.unit = "Unit is required.";
      } 
      if (!item.dueDate) {
        formIsValid = false;
        error.dueDate = "Due date is required.";
      } else if (item.dueDate > endDate) {
        formIsValid = false;
        error.dueDate = `Due date must be before ${endDate}.`;
      } else if (item.dueDate < today) {
        formIsValid = false;
        error.dueDate = "Due date cannot be in the past.";
      }
      return error;
    });

    setErrors(newErrors);
  };

  //handler save create new material in multiple in save button
  const handleSave = async () => {
    const materials = rows.map((row) => ({
      materialName: row.materialName,
      qty: row.qty,
      unit: row.unit,
      status: row.status,
      assignDate: new Date().toISOString().split("T")[0],
      dueDate: row.dueDate,
      handlerId: row.handler,
      eventId: id,
      supporters: row.supporterIds,
    }));

    const invalidField = materials.find(
      (material) =>
        !material || !material.materialName || !material.qty || !material.unit
    );

    if (invalidField) {
      validateInputs(rows);
      error("Invalid! Please input all required fields.");
      return;
    }

    try {
      setIsLoading(true);
      await CreateMultipleMaterial(materials);
      success("Create Materail succussfully!");
      setIsLoading(false);
      setSaveSuccess(true);
      setRows([]);
    } catch (error) {
      setIsLoading(false);
      error("Unsuccussfully! input data is invalid!");
      console.log(error);
    }
  };

  function success(message) {
    toast.success(message, {
      position: "top-center",
    });
  }

  function error(message) {
    toast.error(message, {
      position: "top-center",
    });
  }

  // Function to handle supporter change for a specific row
  const handleSupporterChange = (supporterIds, rowId) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === rowId ? { ...row, supporterIds } : row))
    );
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchInput(""); // Clear search input state
    setSearchMaterial([]);
  };

  //find the length of material data to create the no index of new material
  const dataLength = data ? data.length : 0;

  //return when there have material or create new material
  return (
    <>
      <div className="text-primary-text font-semibold text-2xl mb-5 mt-10">
        Material Management
      </div>
      {/* Render show Count material card component */}
      <CountMaterialComponent data={dataCount} />
      <div className="flex justify-between mt-5 h-14 w-full gap-1">
        <SearchMaterialComponent
          handleSearch={handleSearch}
          handleClearSearch={handleClearSearch}
          initialQuery={searchQuery}
        />
        {/* Delete both material in Database and new row for create new material */}
        <div className="gap-2 flex">
          {checkedRows.length > 0 && (
            <>
              <button
                onClick={() => setIsDeleteDialogOpen(true)}
                className="flex bg-red-600 hover:duration-300 transition-all text-white border w-28 h-11 rounded-2xl font-medium text-xs lg:text-base justify-center items-center gap-1"
              >
                {!isLoading ? (
                  <>
                    <Image
                      className=""
                      src="/icons/delete.svg"
                      alt="Delete"
                      width={25}
                      height={25}
                      priority
                    />
                    <p className="text-white">Delete</p>
                  </>
                ) : (
                  <div className="loader"></div>
                )}
              </button>
            </>
          )}

          {/* Save Create new material (Post multiple rows) */}
          {rows.length > 0 && (
            <button
              type="submit"
              className="px-6 h-11 rounded-2xl border-1px border-borderUi flex items-center justify-center gap-3 bg-blue-700 w-32 hover:border-blueUi hover:bg-blue-800"
              onClick={handleSave}
            >
              {/* <AddSquare size="24" variant="Bold" className="text-white" /> */}
              {!isLoading ? (
                <p className="text-white">Save</p>
              ) : (
                <div className="loader"></div>
              )}
            </button>
          )}

          {/* Create new Material button */}
          <button
            // type="submit"
            onClick={addNewRow}
            className={`${
              userRole == "ROLE_USER" && "hidden"
            } button_new hover:bg-purple-text hover:duration-300 transition-all hover:text-white border-1px border-purple-text h-11 w-12 justify-center text-purple-text rounded-3xl md:px-4 md:py-2.5 flex items-center space-x-3 md:w-40`}
          >
            <AddSquare size="24" variant="Bold" className="" />
            <p className="text-xs lg:text-base hidden md:block  lg:w-[140px]">
              New Material
            </p>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto sm:rounded-lg px-1 min-h-[500px]">
        {(rows ?? []).length === 0 && dataLength === 0 ? (
          <>
            <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table">
              {/* Render the table head */}
              <TableHeadMaterial
                selectAllChecked={selectAllChecked}
                handleSelectAllChange={handleSelectAllChange}
                userRole={userRole}
              />
              <EmptyMaterialRow userRole={userRole} />
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
          </>
        ) : (
          <table className="overflow-x-auto w-full text-sm text-left rtl:text-right text-gray-500 border-separate dark:text-gray-400 border-spacing-y-3 table">
            {/* Render the table head */}
            <TableHeadMaterial
              selectAllChecked={selectAllChecked}
              handleSelectAllChange={handleSelectAllChange}
              userRole={userRole}
            />

            <tbody className="drop-shadow rounded-radiusUi text-sm font-normal text-primary-text bg-[#ffffff]">
              {/* Render show the material fetch from api (material created) */}
              {dataOfMaterial?.map((rowData, index) => (
                <MaterialRow
                  key={rowData.materialId}
                  data={rowData}
                  index={index}
                  checkedRows={checkedRows}
                  handleCheckboxChange={handleCheckboxChange}
                  memberData={memberData}
                  query={query}
                  nullsearch={nullsearch}
                  id={id}
                  userRole={userRole}
                  cancelUpdate={cancelUpdate} // Pass cancelUpdate state to MaterialRow
                  handleCancelUpdate={handleCancelUpdate} // Pass function to update cancelUpdate
                  userId={userId}
                  endDate={endDate}
                />
              ))}

              {(!dataOfMaterial || dataOfMaterial.length === 0) &&
                rows.length === 0 && (
                  <>
                    <tr>
                      <td colSpan="100%">
                        <div className="justify-center w-full content-center space-y-2 pb-10 flex flex-col items-center">
                          <Image
                            src="/images/Search.gif"
                            alt="empty image"
                            width={280}
                            height={280}
                            priority
                          />
                          <p className="text-center text-4xl font-semibold text-primary-text">
                            No results found
                          </p>
                          <p className="text-center text-xl text-gray-500">
                            Please try another search!
                          </p>
                        </div>
                      </td>
                    </tr>
                  </>
                )}

              {/* Show the new row for create new material */}
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className="bg-white border-b font-medium text-base hover:bg-gray-50 h-8 border border-black"
                >
                  <td className="w-4 p-4 rounded-l-2xl">
                    <div className="flex items-center">
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
                        className={`border text-primary-text text-base px-2 w-full h-10 rounded-xl font-normal focus:outline-none ${
                          errors[index]?.name
                            ? "border-red-600 shake-animation"
                            : ""
                        }`}
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
                  <td className="text-sm font-normal text-primary-text px-2">
                    <input
                      type="text"
                      name="qty"
                      className={`border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none ${
                        errors[index]?.qty
                          ? "border-red-600 shake-animation"
                          : ""
                      }`}
                      placeholder=""
                      value={row.qty}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Check if the entered value is numeric
                        if (!isNaN(value)) {
                          setRows((prevRows) =>
                            prevRows.map((r) =>
                              r.id === row.id ? { ...r, qty: value } : r
                            )
                          );
                        }
                      }}
                      onKeyDown={(e) => {
                        // Allow only numeric input
                        if (
                          !(
                            (e.key >= "0" && e.key <= "9") ||
                            e.key === "." ||
                            e.key === "Backspace" ||
                            e.key === "Delete" ||
                            e.key === "ArrowLeft" ||
                            e.key === "ArrowRight"
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                      required
                      min="0.01"
                      step="0.01"
                    />
                  </td>
                  <td className="text-sm font-normal text-primary-text px-2">
                    <input
                      type="text"
                      name="unit"
                      className={`border text-primary-text text-base px-2 w-24 h-10 rounded-xl font-normal focus:outline-none ${
                        errors[index]?.unit
                          ? "border-red-600 shake-animation"
                          : ""
                      }`}
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
                  <td className="px-2">
                    <input
                      type="date"
                      name="dueDate"
                      className={` border text-gray-900 sm:text-sm rounded-xl block w-22 p-2 focus:outline-none placeholder:text-opacity-50 ${
                        errors[index]?.dueDate
                          ? "border-red-600 shake-animation"
                          : ""
                      }`}
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
                      className=" border text-black text-base sm:text-sm rounded-xl block w-28 p-2.5 focus:outline-none "
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
                  <td className="px-2 ">
                    <Dropdown
                      key={index}
                      onSupporterChange={(selectedSupporters) =>
                        handleSupporterChange(selectedSupporters, row.id)
                      }
                    />
                  </td>
                  <td className="px-2 w-32">
                    <div className="bg-white p-[7px] border rounded-xl">
                      <div
                        className="cursor-pointer flex items-center"
                        onClick={() => toggleDropdown(row.id)}
                      >
                        <span
                          className="flex px-1 py-1 w-16 text-xs font-semibold justify-center rounded-full"
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
                          style={{ width: "130px" }}
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
                  <td className="pl-5 pr-2 rounded-r-2xl">
                    <button
                      className="flex hover:duration-300 transition-all justify-center items-center gap-1"
                      onClick={() =>
                        setRows((prevRows) =>
                          prevRows.filter((r) => r.id !== row.id)
                        )
                      }
                    >
                      <CiCircleRemove color="red" className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={() => {
          deleteSelectedRows();
          setIsDeleteDialogOpen(false);
        }}
      />
    </>
  );
}
