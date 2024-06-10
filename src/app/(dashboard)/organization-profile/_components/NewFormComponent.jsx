import React from 'react'
import Image from "next/image";
import { useRef, useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia";
import {useForm} from "react-hook-form";
import { TbEdit } from "react-icons/tb";
import { BsFillPlusSquareFill } from "react-icons/bs";


import styles from "./MyComponent.module.css";
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
    const [isCopy, setIsCopy] = useState(true)
    const [organizationCode] = useState("123456");

    const [submitType, setSubmitType] = useState(null);

    const initialData = {
        name: "",
        address: "",
    };

    const {
        register, handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm({
        defaultValues: initialData
    });

    const onSubmit = (data) => {
        if (submitType === 'copy') {
            return;
        }
        console.log("Form submitted", data);
        reset();
    };

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(organizationCode)
        .then(() => setCopied(true))
        .catch(error => console.error('Error copying text: ', error));

        setTimeout(() => {
        setCopied(false);
    }, 1000);
  };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const ref = useRef()

    const handleSaveChanges = () => {
        ref.current.reset();
    // setIsEditing(false);
  };
    const handleCancelChanges = () => {
        setIsEditing(false);
        setOrganizationName("");
        setAddress("");
        setProfileImage("/images/event-master-logo.png");
  };

  return (
    <>
        <form action="" ref={ref} className="drop-shadow-md rounded-2xl relative h-auto mb-8" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center mt-20 lg:-mt-20">
                <div className="w-60 h-60 rounded-full lg:w-40 relative lg:h-40">
                    <Image src={profileImage} alt="My Image" width={250} height={250} className={`mt-2 rounded-full ${styles.profile}`}/>
                    <div className={`w-8 h-8 rounded-full flex justify-center items-center mt-[-30px] ml-28 z-50 ${styles.iconProfile}`}>
                        <label htmlFor="image-upload" className="w-full h-full bg-purple-200 rounded-full flex items-center justify-center bg-gray-100 duration-300 hover:bg-gray-200 cursor-pointer">
                            <LiaUserEditSolid className="w-5 h-5 text-gray-700" />
                            <input id="image-upload" name="file-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload}/>
                        </label>
                    </div>
                </div>
                <h2 className="text-primary-text font-bold text-2xl mt-5 lg:mt-6 lg:text-2xl">
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
                        <div onClick={() => { handleCopy(); setSubmitType('copy'); }} className={`absolute top-4 left-5 text-gray-600 hover:text-gray-800 cursor-pointer ${styles.copy}`}>
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
                        </div>


            
                        <div className="text-primary-text text-lg font-semibold lg:text-base flex mt-8">
                            Organization Name <p className="text-red-700">*</p>
                        </div>
                        <input type="text" placeholder="Enter address" className={`${errors.name? "border-red-700 focus:border-red-600" : "border-gray-300"}shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 mt-3`} value={organizationName}
                            {...register("name", { 
                                    required: "Organization name is required" 
                                }
                            )}
                            onChange={(e) => setOrganizationName(e.target.value)}
                            disabled={!isEditing}
                        />
                        {errors.name && (<p className="text-red-500 text-xs mt-1">{errors.name.message}</p>)}

                        <div className="mt-3 text-primary-text text-lg font-semibold lg:text-base lg:mt-7 flex">
                            Address <p className="text-red-700">*</p>
                        </div>
                        <input type="text" placeholder="Enter address" className={`${errors.address? "border-red-700 focus:border-red-600" : "border-gray-300"}shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5 mt-3 `} value={address}
                            {...register("address", { 
                                    required: "Address is required" 
                                }
                            )}
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={!isEditing}
                        />
                        {errors.address && (<p className="text-red-500 text-xs mt-1">{errors.address.message}</p>)}         
                    </div>

                    {/* button  */}
                    <div className="flex justify-end w-[100%] mr-10 mt-8 lg:mt-9 lg:mr-10">
                        {isEditing ? (
                                <>
                                    <button className="btn btn-outline border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base" onClick={handleCancelChanges}>
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5" onClick={handleSaveChanges } type="submit">
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
    </>
  )
}

export default NewFormComponent