"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AddSquare } from "iconsax-react";
import fetchMaterialData from "@/app/actions/material/fetchMaterialAction";
import CreateMultipleMaterial from "@/app/actions/material/createMaterialMultipleAction";
import { getAllMemberForMaterialCreateService } from "@/services/dashboard/memberService";
import deleteMaterialMultiple from "@/app/actions/material/deleteMaterialMultipleAction";
import fetchMaterialCount from "@/app/actions/material/fetchCountMaterialAction";
import { CountMaterialComponent } from "./CountMaterailComponent";
import { getAllAssetNoPageAction } from "@/actions/assetAction/handleAssetInput";
import { toast } from "react-toastify";
import DeleteDialog from "./DeleteDialog";
import { searchMaterialByName } from "@/services/dashboard/materialService";
import { SearchMaterialComponent } from "./searchMaterialComponent";
import { MaterialTable } from "./tables/MaterialTable";

export default function MaterialComponent({
  id,
  searchParams,
  userRole,
  userId,
  endDate,
}) {
  const [data, setData] = useState(null);
  const [dataCount, setDataCount] = useState();
  const [asset, setDataAsset] = useState();
  const [rows, setRows] = useState([]);
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
    // refetch only after something changed on the server (save, update, delete);
    // ticking checkboxes or opening the delete dialog doesn't reload the list
  }, [saveSuccess, cancelUpdate]);

  useEffect(() => {
    searchNameMaterial();
  }, [query]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // patch one new (unsaved) row, e.g. updateNewRow("new_1", { qty: "5" })
  const updateNewRow = (rowId, patch) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === rowId ? { ...row, ...patch } : row))
    );
  };

  const removeNewRow = (rowId) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== rowId));
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

  const addNewRow = () => {
    const newRow = {
      id: `new_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      materialName: "",
      qty: "",
      unit: "",
      dueDate: "",
      handler: "",
      supporters: "",
      status: "Pending",
      inputValue: "",
    };
    setRows([...rows, newRow]);
    setSaveSuccess(false);
  };

  const handleCheckboxChange = (id) => {
    setCheckedRows((prevCheckedRows) =>
      prevCheckedRows.includes(id)
        ? prevCheckedRows.filter((rowId) => rowId !== id)
        : [...prevCheckedRows, id]
    );
  };

  const handleCancelUpdate = () => {
    // functional update so two quick calls both trigger a refetch
    setCancelUpdate((prev) => !prev);
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
      if (idsToDelete.length > 0) handleCancelUpdate(); // reload list and counts
      // alert("Selected materials deleted successfully!");
    } catch (error) {
      console.error("Error deleting materials:", error);
      setIsLoading(false);
      // alert("Failed to delete materials.");
    }
  };

  const validateInputs = (list) => {
    const today = new Date().toISOString().split("T")[0];
    let formIsValid = true;

    const newErrors = list.map((item) => {
      const error = { name: "", qty: "", unit: "", dueDate: "" };
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
    return newErrors;
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

    // validate every row (name, qty, unit, due date) before sending anything
    const rowErrors = validateInputs(rows);
    if (rowErrors.some((e) => e.name || e.qty || e.unit || e.dueDate)) {
      error("Invalid! Please input all required fields.");
      return;
    }

    if (isLoading) return; // ignore double clicks while saving
    setIsLoading(true);
    try {
      await CreateMultipleMaterial(materials);
      success("Create Materail succussfully!");
      setRows([]);
      setErrors([]);
      setSaveSuccess((prev) => !prev); // toggle so the list always refetches
    } catch (err) {
      console.error("Create material failed:", err);
      error(`Unsuccussfully! ${typeof err === "string" ? err : err?.message ?? "input data is invalid!"}`);
    } finally {
      setIsLoading(false);
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

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchInput(""); // Clear search input state
    setSearchMaterial([]);
  };

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
      <MaterialTable
        savedRows={dataOfMaterial}
        newRows={rows}
        newRowErrors={errors}
        updateNewRow={updateNewRow}
        removeNewRow={removeNewRow}
        checkedRows={checkedRows}
        onToggleChecked={handleCheckboxChange}
        selectAllChecked={selectAllChecked}
        onSelectAll={handleSelectAllChange}
        memberData={memberData}
        assets={asset}
        eventId={id}
        userRole={userRole}
        userId={userId}
        endDate={endDate}
        onChanged={handleCancelUpdate}
        isSearching={Boolean(query)}
      />

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
