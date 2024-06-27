import React, { useState } from "react";
import Dropdown from "./DropdownSupporterComponent";
import { FaAngleDown } from "react-icons/fa";
import { MaterialActionButton } from "./MaterialActionButtton";
import { UpdateMaterialService } from "@/services/dashboard/materialService";
import { toast } from "react-toastify";
import { Edit } from "iconsax-react";
import { IoCloseCircleOutline } from "react-icons/io5";

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

const MaterialRow = ({
  data,
  index,
  checkedRows,
  handleCheckboxChange,
  memberData,
  id,
  userRole
}) => {
  // console.log("the data fetch is ",data)
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    ...data,
    eventId: id,
  });
  const [errors, setErrors] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
  };
  // console.log("edit data is ", editedData)

  const handleUpdate = async () => {
    if (validateForm()) {
      try {
        const updatedMaterial = await UpdateMaterialService(
          editedData,
          editedData.materialId
        );
        success("Material updated successfully!");
        setIsEditing(false);
      } catch (error) {
        showError("Error updating material!");
      }
    } else {
      showError("Please input fields correctly before submitting!");
    }
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!editedData.materialName) {
      formIsValid = false;
      errors.materialName = "Name is required";
    }

    if (!editedData.qty) {
      formIsValid = false;
      errors.qty = "Quantity is required";
    } else if (isNaN(editedData.qty) || editedData.qty <= 0) {
      formIsValid = false;
      errors.qty = "Quantity must be a number greater than 0";
    }

    if (!editedData.unit) {
      formIsValid = false;
      errors.unit = "Unit is required";
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const key = name.split("-")[0];
    setEditedData({
      ...editedData,
      [key]: value,
    });
  };

  const handleStatusChange = (id, statusOption) => {
    setEditedData((prevState) => ({
      ...prevState,
      status: statusOption,
    }));
    setActiveDropdown(null);
  };

  // const handleSupporterChange = (selectedSupporters) => {
  //   setEditedData({
  //     ...editedData,
  //     supporters: selectedSupporters,
  //   });
  // };

  const toggleDropdown = (id) => {
    setActiveDropdown((prevState) => (prevState === id ? null : id));
  };

  function success(message) {
    toast.success(message, {
      position: "top-center",
    });
  }

  function showError(message) {
    toast.error(message, {
      position: "top-center",
    });
  }
  console.log("the data do update is ",editedData)

  return (
    <tr className="bg-white border-b hover:bg-gray-50 border border-black w-full rounded-l-2xl">
      <td className={`${userRole == "ROLE_USER" && "hidden" } button_new w-4 p-4 rounded-l-2xl`}>
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
      <td className={`${userRole == "ROLE_USER" && "rounded-l-2xl pl-4" } text-base text-primary-text pl-1 `}>{index + 1}</td>
      <td className="text-sm font-normal text-primary-text px-2">
        <input
          type="text"
          name={`materialName-${index}`}
          className={`border text-primary-text text-base px-2 w-32 h-10 rounded-xl font-normal focus:outline-none ${
            errors.materialName ? "border-red-600 shake-animation" : ""
          }`}
          value={editedData.materialName}
          onChange={(e) => handleInputChange(e)}
          readOnly={!isEditing}
        />
      </td>
      <td className="text-sm font-normal text-primary-text px-2">
        <input
          type="text"
          name={`qty-${index}`}
          className={`border text-primary-text text-base px-2 w-20 h-10 rounded-xl font-normal focus:outline-none ${
            errors.qty ? "border-red-600 shake-animation" : ""
          }`}
          value={editedData.qty}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </td>
      <td className="text-sm font-normal text-primary-text px-2">
        <input
          type="text"
          name={`unit-${index}`}
          className={`border text-primary-text text-base px-2 w-24 h-10 rounded-xl font-normal focus:outline-none ${
            errors.unit ? "border-red-600 shake-animation" : ""
          }`}
          value={editedData.unit}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </td>
      <td className="px-2">
        <input
          type="date"
          name={`dueDate-${index}`}
          className="border text-gray-900 sm:text-sm rounded-xl block w-22 p-2 focus:outline-none placeholder:text-opacity-50"
          placeholder="dd/mm/yyyy"
          value={editedData.dueDate}
          onChange={handleInputChange}
          readOnly={!isEditing}
        />
      </td>
      <td className="px-2">
        <select
          name={`handlerId-${index}`}
          className="border text-black text-base sm:text-sm rounded-xl block w-28 p-2.5 focus:outline-none"
          value={editedData.handlerId}
          onChange={handleInputChange}
          disabled={!isEditing}
        >
          <option value=""></option>
          {memberData?.map((member, idx) => (
            <option key={idx} value={member.memberId}>
              {member?.memberName}
            </option>
          ))}
        </select>
      </td>
      <td className="px-2">
        <Dropdown
        //  onSupporterChange={handleSupporterChange}
          selectedSupporters={editedData.supporters}
          readOnly={!isEditing}
        />
      </td>
      <td className="px-2 w-32">
        <div className=" bg-white p-[7px] border rounded-xl">
          <div
            className="cursor-pointer flex items-center"
            onClick={() => isEditing && toggleDropdown(data.materialId)}
          >
            <span
              className="flex px-1 py-1 w-16 text-xs font-semibold justify-center rounded-full"
              style={{
                backgroundColor: getStatusColor(editedData.status),
                color: "white",
              }}
            >
              {editedData.status}
            </span>
             <FaAngleDown className="ml-2" />
          </div>
          {isEditing && activeDropdown === data.materialId && (
            <div
              className="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg"
              style={{ width: "130px" }}
            >
              {["Pending", "OnGoing", "Done", "Issue"].map((statusOption) => (
                <div
                  key={statusOption}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleStatusChange(data.materialId, statusOption)}
                >
                  {statusOption}
                </div>
              ))}
            </div>
          )}
        </div>
      </td>
      <td className="rounded-r-2xl px-1">
        {isEditing ? (
          <div className="flex gap-2">
            <Edit
              className="cursor-pointer"
              onClick={handleUpdate}
              size="24"
              color="#16AE65"
            />
            <IoCloseCircleOutline
              className="cursor-pointer"
              size="24"
              color="red"
              onClick={() => setIsEditing(false)}
            />
          </div>
        ) : (
          <MaterialActionButton data={data} onEdit={handleEdit} userRole={userRole} />
        )}
      </td>
    </tr>
  );
};

export default MaterialRow;

