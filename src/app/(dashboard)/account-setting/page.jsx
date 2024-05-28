"use client";
import { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { LiaUserEditSolid } from "react-icons/lia";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Image from "next/image";

const Page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [organizationName, setOrganizationName] = useState("EventMaster");
  const [address, setAddress] = useState("Phnom Penh, Cambodia");
  const [profileImage, setProfileImage] = useState(
    "/images/event-master-logo.png"
  );

  const handleUpdateClick = () => {
    setIsEditing(true);
  };

  // const handleSaveChanges = () => {
  //   // Here, you can save the changes to the input fields
  //   setIsEditing(false);
  // };

  // const handleCancelChanges = () => {
  //   setIsEditing(false);
  //   setOrganizationName("");
  //   setAddress("");
  // };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  const handleCancelChanges = () => {
    setIsEditing(false);
    setOrganizationName("EventMaster");
    setAddress("Phnom Penh, Cambodia");
    setProfileImage("/images/event-master-logo.png");
  };

  return (
    <main className="px-4 lg:px-0">
      <div className="bg-white drop-shadow-lg w-full max-w-full rounded-2xl lg:h-full overflow-hidden">
        {/* Cover */}
        <div className="w-full h-40 bg-purple-300 rounded-t-2xl lg:h-28 sm:h-52"></div>

        {/* Profile */}
        <div className="flex flex-col items-center mt-20 lg:-mt-16">
          <div className="w-60 h-60 rounded-full lg:w-40 lg:h-40">
            <Image
              src={profileImage}
              alt="My Image"
              width={250}
              height={250}
              className="mt-2 rounded-full"
            />
            <div className="w-8 h-8 rounded-full flex justify-center items-center mt-[-30px] ml-28 z-50">
              <label
                htmlFor="image-upload"
                className="w-full h-full bg-purple-200 rounded-full flex items-center justify-center hover:bg-gray-400 cursor-pointer"
              >
                <LiaUserEditSolid className="w-5 h-5 text-gray-700" />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
          <h2 className="text-primary-text font-bold text-3xl mt-10 lg:mt-8 lg:text-2xl">
            {organizationName}
          </h2>
        </div>

        {/* Input Fields */}
        <div className="h-[280px] w-full lg:h-[125px] px-6 lg:px-4">
          <div className="w-full max-w-[500px] mx-auto mt-12 lg:mt-8 lg:max-w-[400px]">
            <p className="text-primary-text text-lg font-semibold lg:text-base">
              Organization Name*
            </p>
            <input
              type="text"
              placeholder="Enter FullName"
              className="input w-full text-gray-400 border-gray-300 bg-none mt-3 lg:h-12"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              disabled={!isEditing}
            />
            <p className="mt-10 text-primary-text text-lg font-semibold lg:text-base lg:mt-4">
              Address*
            </p>
            <input
              type="text"
              placeholder="Enter Address"
              className="input w-full text-gray-400 border-gray-300 bg-none mt-3 lg:h-12"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              disabled={!isEditing}
            />
          </div>
          <div className="flex justify-end mr-6 mt-12 lg:mt-8 lg:mr-10">
            {isEditing ? (
              <>
                <button
                  className="btn btn-outline border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base"
                  onClick={handleCancelChanges}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5"
                  onClick={handleSaveChanges}
                >
                  <BsFillPlusSquareFill className="w-7 h-7 lg:w-5 lg:h-5" />
                  Save
                </button>
              </>
            ) : (
              <button
                className="btn btn-success text-white w-40 text-lg lg:w-32 lg:text-base "
                onClick={handleUpdateClick}
              >
                <TbEdit className="w-7 h-7 lg:w-6 lg:h-6" />
                Edit
              </button>
            )}
          </div>
        </div>
        <Image
          src="/images/bg-1.png"
          alt="My Image"
          width={300}
          height={200}
          className="mt-[-300px] rounded-bl-2xl lg:mt-[-170px] lg:w-[200px]"
        />
      </div>
    </main>
  );
};

export default Page;
