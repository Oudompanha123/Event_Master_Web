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
import logo from "../../../../../public/images/event-master-logo.png"

function NewFormComponent() {

    const [profileImage, setProfileImage] = useState(
        "/images/event-master-logo.png"
    );
    const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
        setProfileImage(imageUrl);
    };

    const [organizationName, setOrganizationName] = useState("");
    const [address, setAddress] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [organizationCode] = useState("123456");

    const initialData = {
        name: "",
        address: "",
    };

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

            <div className={`w-full lg:h-auto p-6 lg:px-4 ${styles.inputContainer}`}>
                <div className="w-full max-w-full mx-auto mt-12 lg:mt-8 lg:max-w-[400px]">
                    <div className="mt-16 text-primary-text text-lg font-semibold lg:text-base lg:mt-7 flex">
                        Organization Code <p className="text-red-700">*</p>
                    </div>
                    <div className="relative flex flex-col justify-between">
                        <div className={`w-full bg-gray-100 flex justify-start ps-3 rounded-lg items-center text-gray-500 border-gray-300 bg-none mt-3 lg:h-12 ${styles.btnCopy}`}>
                            {organizationCode}
                        </div>
                        <button onClick={handleCopy} className={`absolute top-4 left-5 text-gray-600 hover:text-gray-800 cursor-pointer ${styles.copy}`}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-[350px] mt-3">
                                <path d="M11.5715 3.21484H3.85725C3.14717 3.21484 2.57153 3.79048 2.57153 4.50056V16.072C2.57153 16.7821 3.14717 17.3577 3.85725 17.3577H11.5715C12.2816 17.3577 12.8572 16.7821 12.8572 16.072V4.50056C12.8572 3.79048 12.2816 3.21484 11.5715 3.21484Z" stroke="#344054" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.14307 6.42773H10.2859" stroke="#344054" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.14307 9.64258H10.2859" stroke="#344054" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.14307 12.8574H7.71449" stroke="#344054"s troke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.78589 0.642578H14.143C14.484 0.642578 14.8111 0.778037 15.0522 1.01915C15.2932 1.26027 15.4287 1.5873 15.4287 1.92829V14.1426" stroke="#344054" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {copied && (
                                <span className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 text-xs">
                                    Copied!
                                </span>
                            )}
                        </button>
                        <div className="text-primary-text text-lg font-semibold lg:text-base flex mt-8">
                            Organization Name <p className="text-red-700">*</p>
                        </div>
                        <input type="text" placeholder="Enter address" className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 mt-3 ${errors.name ? "border-red-500" : ""}`} value={organizationName}
                            {...register("name", { required: "Organization name is required" })}
                            onChange={(e) => setOrganizationName(e.target.value)}
                            disabled={!isEditing}
                        />
                        {errors.name && (<p className="text-red-500 text-xs mt-1">{errors.name.message}</p>)}
                        <div className="mt-3 text-primary-text text-lg font-semibold lg:text-base lg:mt-7 flex">
                            Address <p className="text-red-700">*</p>
                        </div>
                        <input type="text" placeholder="Enter address" className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 mt-3 
                            ${errors.address ? "border-red-500" : ""}`} value={address}
                            {...register("address", { required: "Address is required" })}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={!isEditing}
                        />
                        {errors.address && (<p className="text-red-500 text-xs mt-1">{errors.address.message}</p>)}         
                    </div>

                    {/* button  */}
                    <div className="flex justify-center w-[100%] mr-10 mt-8 lg:mt-9 lg:mr-10">
                        {isEditing ? (
                                <>
                                    <button className="btn btn-outline border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base" onClick={handleCancelChanges}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5" onClick={handleSaveChanges} type="submit">
                                        <BsFillPlusSquareFill className="w-7 h-7 lg:w-5 lg:h-5" />
                                        Save
                                    </button>
                                </>
                        ) : (
                            <button className="btn btn-success text-white w-40 text-lg lg:w-32 lg:text-base " onClick={handleUpdateClick}>
                                <TbEdit className="w-7 h-7 lg:w-6 lg:h-6" />
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    <main/>
  )
}

export default NewFormComponent;
