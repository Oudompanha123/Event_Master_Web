"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import styles from "./MyComponent.module.css";
import { LiaUserEditSolid } from "react-icons/lia";
import { useSession } from "next-auth/react";
import { jwtDecode } from "jwt-decode";
import { usePathname } from "next/navigation";
import {
  updateMemberData,
  updateMemberDataAction,
} from "@/actions/profile/memberProfileAction";
import { getAllMemberProfile } from "@/services/profile/profile.service";
import ProfileComponent from "./ProfileComponent";

// import { CiLock } from "react-icons/ci";
function FormComponent({ className, getAllMember }) {
    // console.log("Get all member in prop", getAllMember);

  const ref = useRef();
  const [isLock, setLocked] = useState(true);

  const [profileImage, setProfileImage] = useState("/images/Avatar.png");
  const [userName, setUserName] = useState(getAllMember.memberName);
  const [address, setAddress] = useState(getAllMember.address);
  const [email, setEmail] = useState(getAllMember.email);
  const [phone, setPhoneNumber] = useState(getAllMember.phone);
  const [gender, setGender] = useState(getAllMember.gender);
  const [date, setDate] = useState(getAllMember.dateOfBirth);
  const [isLoading, setIsLoading] = useState(false);


  let myArr = [userName, gender, email, address, email, phone, date]
//   console.log('My Array:', myArr)  

  const { data: session, status } = useSession();
  let userInfo;

  if (status === "authenticated" && session?.user?.token) {
    userInfo = jwtDecode(session.user.token);
  }
  const userRole = userInfo?.role;
//   console.log("User role: ", userRole);

  const displayRole = (userRole) => {
    if (userRole == "ROLE_ADMIN") {
      return "Admin";
    } else if (userRole == "ROLE_USER") {
      return "User";
    } else if (userRole == "ROLE_SUB_ADMIN") {
      return "Sub-Admin";
    } else {
      return "Unknow";
    }
  };

  function handleUpdateClick() {
    setLocked(!isLock);
  }

    const initialData = {
        name: userName,
        gender: gender,
        email: email,
        address: address,
        phoneNumber: phone,
        date: date,     
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: initialData,
  });

  const delay = (x) => new Promise((resolve) => setTimeout(resolve, x))

  const onSubmit = async(data) => {
    // console.log("MemberId: ", getAllMember.memberId)
    // console.log("Form submitted", data);
    setIsLoading(true);
    await updateMemberDataAction(getAllMember.memberId ,data)
    await delay(2000);
    setIsLoading(false);
    reset();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log("File Upload", file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <>
      <form action="#" className="mx-auto mt-5 w-[92%] z-20" ref={ref} method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className={`flex justify-between ${styles.container}`}>
          {/* Profile  */}
          <div className={`profile rounded-full w-[20%] ${styles.profile}`}>
            <div className={`rounded-full sm:mt-10  mx-auto min-w-[80px] max-w-[150px] relative`}>
              <img src={profileImage} alt="logo" className="rounded-full" id="picture"/>
              <label htmlFor="image-upload" className={`${styles.icon} absolute top-28 right-3 w-8 h-8 bg-slate-100  rounded-full flex justify-center items-center p-1 duration-300 hover:bg-slate-200 cursor-pointer`}>
                <LiaUserEditSolid className="w-7 h-7 text-gray-700" />
                <input type="file" id="image-upload" name="picture" className="hidden" onChange={handleImageUpload}/>
              </label>
            </div>
            <div className="mt-2 mx-auto mx-w-[100px] flex flex-col items-center">
              <h1 className="text-slate-400 font-semibold">
                {getAllMember.memberName}
              </h1>
              <p className="underline font-semibold">{displayRole(userRole)}</p>
            </div>
            {/* <PictureComponent/> */}
          </div>

          {/* Form */}

          <div className="w-[75%]">
            <div className="grid md:grid-cols-2 gap-2 gap-x-6 w-full sm:grid-cols-1">
              <div className="w-full mb-2 group flex flex-col">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name <span className="text-red-500">*</span>
                </label>
                <input type="text" id="name" name="name" className={`${errors.name? "border-red-700 focus:border-red-600": "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                    placeholder="Enter your name" onChange={(e) => setUserName(e.target.value)}
                    disabled={isLock}
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="w-full mb-2 group">
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Gender <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className={`${ errors.gender? "border-red-700 focus:border-red-600": "border-gray-300"} border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} id="gender"
                    disabled={isLock} onChange={(e)=> setGender(e.target.value)}
                    {...register("gender", { required: "Gender is required" })}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other" selected>
                      Other
                    </option>
                  </select>
                </div>
                {errors.gender && (
                  <span className="text-red-500 text-sm">
                    {errors.gender.message}
                  </span>
                )}
              </div>

              <div className="w-full mb-2 group flex flex-col">
                <label
                  htmlFor="email-address-icon"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input type="email" id="email" name="email" className={`${ errors.email? "border-red-700 focus:border-red-600": "border-gray-300"} border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                    placeholder="Enter your email" disabled={isLock} onChange={(e)=> setEmail(e.target.value)}
                    // value={getAllMember.email}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="w-full mb-2 group flex flex-col">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Date <span className="text-red-500">*</span>
                </label>
                <input type="date" id="date" name="date" className={`${ errors.date? "border-red-700 focus:border-red-600": "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                    disabled={isLock} onChange={(e)=>setDate(e.target.value)}
                    {...register("date", { required: "Date is required" })}
                />
                {errors.date && (
                  <span className="text-red-500 text-sm">
                    {errors.date.message}
                  </span>
                )}
              </div>

              <div className="w-full mb-2 group flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="Phone number" name="phoneNumber" className={`${ errors.phoneNumber? "border-red-700 focus:border-red-600": "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`} id="phone"
                    disabled={isLock} onChange={(e)=>setPhoneNumber(e.target.value)}
                    {...register("phoneNumber", {
                        required: "Phone number is required",
                        minLength: {
                            value: 9,
                            message: "Phone Number requires at least 8 characters",
                        },
                    })}
                />
                {errors.phoneNumber && (
                  <span className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>

              <div className="w-full mb-2 group flex flex-col">
                <label htmlFor="address" className="mb-1 text-sm font-medium">
                  Address <span className="text-red-500">*</span>
                </label>
                <input type="text" placeholder="" name="address" className={`${errors.address? "border-red-700 focus:border-red-600": "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                    id="address" disabled={isLock} onChange={(e)=>setAddress(e.target.value)}
                    {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">
                    {errors.address.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end my-3 w-full">
              {isLock ? (
                <>
                  <div className="btn btn-success text-white flex items-center rounded-2xl text-lg sm:text-sm w-40 lg:w-32 lg:text-base " onClick={handleUpdateClick}>
                    <FiEdit />
                    Edit
                  </div>
                </>
              ) : (
                <>
                  <button className="btn btn-outline border-solid border-1 border-primary-text text-lg w-40 lg:w-32 lg:text-base rounded-2xl" onClick={handleUpdateClick}>
                    Cancel
                  </button>
                  <button className="btn btn-primary text-white w-40 text-lg lg:w-32 lg:text-base ml-5 rounded-2xl" type="submit">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none"xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.5 12.75H13.25V16C13.25 16.41 12.91 16.75 12.5 16.75C12.09 16.75 11.75 16.41 11.75 16V12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H11.75V8C11.75 7.59 12.09 7.25 12.5 7.25C12.91 7.25 13.25 7.59 13.25 8V11.25H16.5C16.91 11.25 17.25 11.59 17.25 12C17.25 12.41 16.91 12.75 16.5 12.75Z" fill="white"/>
                    </svg>
                    Save
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormComponent;
