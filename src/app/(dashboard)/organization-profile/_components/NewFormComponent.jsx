"use client";

import { useRef, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { CgAddR } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";

const Page = () => {
  const [imageSrc, setImageSrc] = useState("/images/Avatar.png");
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [organizationCode] = useState("123456");
  const [organizationName, setOrganizationName] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({ organizationName: '', address: '' });

<<<<<<< HEAD
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancelChanges = () => {
    setOrganizationName('');
    setAddress('');
    // Implement the logic to cancel the changes
    setIsEditing(false);
  };

  const handleSaveChanges = () => {
    // Implement the logic to save the changes
    setIsEditing(false);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
=======
  const [profileImage, setProfileImage] = useState(
    "/images/event-master-logo.png"
  );
  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   const imageUrl = URL.createObjectURL(file);
  //   setProfileImage(imageUrl);
  // };

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
>>>>>>> db8dcda68744035fa03b2986325f86b0479fa750
  };

  // =========handle copy organization code===========
  const handleCopy = () => {
    navigator.clipboard
      .writeText(organizationCode) // Copy organization code to clipboard
      .then(() => setCopied(true)) // Set copied state to true if successful
      .catch((error) => console.error("Error copying text: ", error));

    setTimeout(() => {
      setCopied(false); // Reset copied state after 1 second
    }, 2000);
  };
  return (
<<<<<<< HEAD
    <form action="">
      <div className="rounded-2xl w-full h-[800px] flex flex-col shadow-md relative">
        <div className="bg-purple-text h-[20%] rounded-t-2xl flex items-center justify-center">
          <Image
            src={imageSrc}
            alt="logo"
            width={130}
            height={130}
            className="mt-48 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64"
          />
          <div className=" absolute transform translate-x-10 translate-y-36 sm:translate-x-10 sm:translate-y-36 md:translate-x-16 md:translate-y-36 lg:translate-x-20 lg:translate-y-40 xl:translate-x-20 xl:translate-y-44 2xl:translate-x-20 2xl:translate-y-48">
            <label
              htmlFor="image-upload"
              className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center bg-gray-300 duration-300 hover:bg-gray-200 cursor-pointer"
            >
              <LiaUserEditSolid className="w-6 h-6 text-gray-800" />
            </label>
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="absolute text-center w-full top-64 sm:top-64 md:top-64 lg:top-72 xl:top-80 2xl:top-[330px]">
          <p className="text-primary-text font-bold text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
            {organizationName || "EventMaster"}
          </p>
=======
    <main>
      <form
        ref={ref}
        className="h-full drop-shadow-md rounded-2xl relative z-10 sm:mt-0 md:mt-10 lg:mt-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center md:mt-20 sm:mt-1 lg:-mt-20">
          <div className="w-full h-40 bg-purple rounded-t-2xl sm:mt-0"></div>
          <div className="w-300 h-300 rounded-full lg:-mt-20 sm:-mt-20 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-44 relative lg:h-44">
            <div className="relative -top-32 sm:-top-12">
              <Image
                src={logo}
                alt="My Image"
                width={450}
                height={450}
                className={`mt-2 rounded-full ${styles.profile}`}
              />
              <div
                className={`w-8 h-8 rounded-full  flex justify-center items-center mt-[-30px] ml-28 z-50 ${styles.iconProfile}`}
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
          </div>
          <h2 className="text-primary-text font-bold text-2xl mt-5 lg:mt-6 lg:text-2xl">
            {organizationName}
          </h2>
>>>>>>> db8dcda68744035fa03b2986325f86b0479fa750
        </div>


<<<<<<< HEAD
        {/* input field here */}
        <div className="mx-7 mt-40 sm:mt-44 md:mt-40 lg:mt-40 xl:mt-36 2xl:mt-32 my-auto sm:mx-24 md:mx-32 lg:mx-52 xl:mx-56 2xl:mx-64 z-10">
          <div className="mt-0 sm:mt-0 md:mt-5 lg:mt-16 xl:mt-24 2xl:mt-32">
            <label
              htmlFor="text"
              className="text-sm font-medium primary-text block mb-2"
            >
              Organization code <span className="text-red-600">*</span>
            </label>
            <div className="flex align-middle">
              <input
                type="number"
                id="text"
                className={`shadow-sm bg-gray-100 border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                placeholder={organizationCode}
                readOnly
              />
              <FaRegCopy
                className="text-gray-600 w-5 h-5 mt-4  -ml-10 "
                onClick={() => {
                  handleCopy();
                }}
              />
              {copied && (
                <div className="absolute right-6 sm:right-24 md:right-32 lg:right-52 xl:right-56 2xl:right-64 -mt-10">
                  <div className="bg-white shadow-md rounded p-2">
                    <p className="text-green-500 text-sm">copied!</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-7">
            <label
              htmlFor="text"
              className="text-sm font-medium primary-text block mb-2"
            >
              Organization name <span className="text-red-600">*</span>
            </label>
            <div>
              <input
                type="text"
                id="text"
                className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                placeholder="Enter full name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mt-7">
            <label
              htmlFor="text"
              className="text-sm font-medium primary-text block mb-2"
            >
              Address <span className="text-red-600">*</span>
            </label>
            <div>
              <input
                type="text"
                id="text"
                className={`shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>


        {/* button here */}
        <div className="z-20 flex justify-end items-center w-full h-16 mb-24 sm:mb-20 md:mb-10 lg-mb-5 xl:mb-5 2xl:mb-5">
          {isEditing ? (
            <div className="mr-5 flex align-middle sm:mr-10 md:mr-14 lg:mr-20 xl:mr-24 xl:mr-28">
              <button
                className="btn btn-outlinen hover:bg-gray-300 border-solid border-1 border-primary-text text-lg w-20 sm:w-32 md:w-32 lg:w-32 xl:w-32 2xl:w-32"
                onClick={handleCancelChanges}
                type="button"
              >
                Cancel
              </button>
              <button
                className={`flex justify-center align-middle items-center rounded-lg bg-purple-text text-white text-lg ml-5 w-28 sm:w-32 md:w-32 lg:w-32 xl:w-32 2xl:w-32 
                  ${
                    !organizationName || !address
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-violet-500"
                  }`}
                onClick={handleSaveChanges}
                type="button"
                disabled={!organizationName || !address}
              >
                <CgAddR className="w-5 h-5 mr-2 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6" />
                Save
              </button>
            </div>
          ) : (
            <button
              className="btn btn-success text-white w-28 sm:w-32 md:w-32 lg:w-32 xl:w-32 2xl:w-32 text-lg mr-5 sm:mr-10 md:mr-14 lg:mr-20 xl:mr-24 xl:mr-28"
              type="button"
              onClick={() => setIsEditing(true)}
            >
              <TbEdit className="w-6 h-6" />
              Edit
            </button>
          )}
        </div>

        {/* background */}
        <div className="absolute bottom-0 z-0">
          <Image
            src="/images/myOrg.png"
            alt="background"
            width={150}
            height={150}
            className="sm:h-72 md:h-80 lg:h-96 xl:h-96 2xl:h-96"
          />
        </div>
      </div>
    </form>
  );
};

export default Page;
=======
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
                  <path d="M11.5715 3.21484H3.85725C3.14717 3.21484 2.57153 3.79048 2.57153 4.50056V16.072C2.57153 16.7821 3.14717 17.3577 3.85725 17.3577H11.5715C12.2816 17.3577 12.8572 16.7821 12.8572 16.072V4.50056C12.8572 3.79048 12.2816 3.21484 11.5715 3.21484Z" stroke="#344054" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.14307 6.42773H10.2859" stroke="#344054" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.14307 9.64258H10.2859" stroke="#344054" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.14307 12.8574H7.71449" stroke="#344054" s troke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.78589 0.642578H14.143C14.484 0.642578 14.8111 0.778037 15.0522 1.01915C15.2932 1.26027 15.4287 1.5873 15.4287 1.92829V14.1426" stroke="#344054" stroke-linecap="round" stroke-linejoin="round" />
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
    </main>
  )
}

export default NewFormComponent;
>>>>>>> db8dcda68744035fa03b2986325f86b0479fa750
