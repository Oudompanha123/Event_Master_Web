import React from "react";
import Image from "next/image";
import { useRef, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import { useForm } from "react-hook-form";
import { TbEdit } from "react-icons/tb";
import { BsFillPlusSquareFill } from "react-icons/bs";
import styles from "./MyComponent.module.css";
import { TbEditCircle } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa6";
import { CgAdd } from "react-icons/cg";
import { IoAddCircleOutline } from "react-icons/io5";

function NewFormComponent() {
  const [profileImage, setProfileImage] = useState(
    "/images/event-master-logo.png"
  );
  const [organizationName, setOrganizationName] = useState("EventMaster");
  const [address, setAddress] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [organizationCode] = useState("123456");
  const [copied, setCopied] = useState(false);
  const [nameValid, setNameValid] = useState(true);
  const [addressValid, setAddressValid] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    reset();
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(organizationCode) // Copy organization code to clipboard
      .then(() => setCopied(true)) // Set copied state to true if successful
      .catch((error) => console.error("Error copying text: ", error));

    setTimeout(() => {
      setCopied(false); // Reset copied state after 1 second
    }, 1000);
  };

  const handleUpdateClick = () => {
    setIsEditing(true);
    // Set nameValid and addressValid to true when starting editing
    setNameValid(true);
    setAddressValid(true);
  };


  const handleSaveChanges = () => {
    if (!nameValid || !addressValid || !organizationName || !address) {
      alert("Please fill in all required fields");
      return;
    }

    ref.current.dispatchEvent(new Event("submit"));
    setIsEditing(false);
    reset();
  };

  const handleCancelChanges = () => {
    setIsEditing(false);
    setOrganizationName("");
    setAddress("");
    setProfileImage("/images/event-master-logo.png");
  };

  const ref = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target.result;
      setProfileImage(imageUrl);
    };

    reader.onerror = (e) => {
      console.error("Error reading file:", e.target.error);
    };

    reader.readAsDataURL(file);
  };

  const isFormValid = nameValid && addressValid;

  return (
    <main>
      <form
        ref={ref}
        className="h-full drop-shadow-md rounded-2xl relative z-10 sm:mt-0 md:mt-10 lg:mt-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center md:mt-20 sm:mt-1 lg:-mt-20">
          <div className="w-full h-40 bg-purple rounded-t-2xl sm:mt-0"></div>
          <div className="w-[] h-[50px] rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-44 lg:h-44 lg:-mt-20">
            <Image
              src={profileImage}
              alt="My Image"
              width={250}
              height={250}
              className={` mt-[-250px] lg:mt-2 w-28 h-28 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-44 lg:h-44 rounded-full ${styles.profile}`}
            />
            <div
              className={`w-8 h-8 rounded-full flex justify-center items-center mt-[-455px] lg:mt-[-30px] ml-28 z-50 ${styles.iconProfile}`}
            >
              <label
                htmlFor="image-upload"
                className="w-full h-full bg-purple-200 rounded-full flex items-center justify-center bg-gray-100 duration-300 hover:bg-gray-200 cursor-pointer"
              >
                <LiaUserEditSolid className="w-5 h-5 text-gray-700" />
                <input
                  id="image-upload"
                  name="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
          <h2 className="text-primary-text font-bold text-2xl mt-24 lg:mt-6 lg:text-2xl sm:mt-52">
            {organizationName}
          </h2>
        </div>

        {/* Input Fields */}

        <div
          className={`h-[280px] w-full lg:h-auto px-6 lg:px-4 ${styles.inputContainer}`}
        >
          <div className="w-[500px] max-w-full mx-auto mt-12 lg:mt-8 lg:max-w-[550px]">
            {/* Organization Code */}
            <div className="mt-16 text-primary-text text-lg font-semibold lg:text-base lg:mt-7 flex">
              <span className="flex items-center">
                Organization Code <p className="text-red-700">*</p>
              </span>
            </div>
            <div
              className={`w-full bg-gray-100 flex justify-start ps-3 rounded-lg items-center text-gray-500 border-gray-300 bg-none mt-3 sm:h-14 md:h-14 lg:h-14 relative ${styles.btnCopy}`}
            >
              {organizationCode}
              <div
                onClick={() => {
                  handleCopy();
                }}
                className={`flex justify-end items-center sm:w-[500px] h-10 absolute right-0 top-0 text-gray-600 hover:text-gray-800 cursor-pointer ${styles.copy}`}
              >
                <FaRegCopy className="w-7 h-7 lg:w-6 lg:h-6 mt-3 mr-4 sm:mr-8 md:mr-4"/>
              </div>
              {copied && (
                <div className="absolute top-0 right-0 -mt-8">
                  <div className="bg-white shadow-md rounded p-2">
                    <p className="text-green-500 text-sm">
                      copied!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Organization Name */}
            <div className="text-primary-text text-lg font-semibold lg:text-base flex sm:mt-10 mt-8">
              Organization Name <p className="text-red-700">*</p>
            </div>
            <input
              type="text"
              placeholder="Enter organization name"
              className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 mt-3 ${
                errors.name
                  ? "border-red-700 focus:border-red-600"
                  : "border-gray-300"
              }`}
              value={organizationName}
              onChange={(e) => {
                setOrganizationName(e.target.value);
                setNameValid(!!e.target.value);
              }}
              disabled={!isEditing}
            />
            {!nameValid && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}

            {/* Address */}
            <div className="mt-3 text-primary-text text-lg font-semibold sm:mt-10 lg:text-base lg:mt-7 flex">
              Address <p className="text-red-700">*</p>
            </div>
            <input
              type="text"
              placeholder="Enter address"
              className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 mt-3 ${
                errors.address
                  ? "border-red-700 focus:border-red-600"
                  : "border-gray-300"
              }`}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressValid(!!e.target.value);
              }}
              disabled={!isEditing}
            />
            {!addressValid && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>

          {/* button */}
          <div className="flex justify-end mt-10 lg:mr-20 sm:mr-5">
            {isEditing ? (
              <>
                <button
                  className="btn btn-outlinen hover:bg-gray-300 border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base"
                  onClick={handleCancelChanges}
                  type="button"
                >
                  Cancel
                </button>
                <button
                className={`btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5 ${
                  isFormValid ? "" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleSaveChanges}
                type="button"
                disabled={!isFormValid || !organizationName || !address}
              >
                <CgAdd  className="w-7 h-7 lg:w-5 lg:h-5" />
                Save
              </button>
              </>
            ) : (
              <button
                className="btn btn-success text-white w-40 text-lg lg:w-32 lg:text-base "
                onClick={handleUpdateClick}
                type="button"
              >
                <TbEditCircle className="w-7 h-7 lg:w-6 lg:h-6" />
                Edit
              </button>
            )}
          </div>
        </div>
      </form>
      <div
        className={` hidden sm:block
  z-0 
  h-24 sm:h-32 md:h-40 lg:h-80 xl:h-96 2xl:h-[400px]
`}
      >
        <Image
          src="/images/myOrg.png"
          alt="My Image"
          width={600}
          height={500}
          className={`
      absolute bottom-0
      rounded-bl-2xl
      w-[150px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[400px]
      mt-0 lg:mt-[-100px]
    `}
        />
      </div>
    </main>
  );
}

export default NewFormComponent;
