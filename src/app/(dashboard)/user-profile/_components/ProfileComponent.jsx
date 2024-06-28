"use client"
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { changePassword } from "@/services/profile/profile.service";
import { changePasswordAction } from "@/actions/profile/memberProfileAction";
import { toast } from "react-toastify";

function ProfileComponent() {
  const initialData = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };


  const notify = (status, message) => {
    if (status == "OK") {
      toast.success("Sucessfully changed password", {
        position: "top-center"
      });
    }
    if (status == 400) {
      toast.error(`Can't change password, please check each field password again ${message != undefined ? message : ''}`, {
        position: "top-center"
      });
    }
    if (status == 404) {
      toast.error(`Please select category again ${message != undefined ? message : ''}`, {
        position: "top-center"
      });
    }
  }

  const { register, handleSubmit, formState: { errors }, watch, reset, } = useForm({ defaultValues: initialData, });

  const [showPasswords, setShowPasswords] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const onSubmit = async (data) => {
    const res = await changePasswordAction(data)
    notify(res?.status);
    reset();
  };

  const toggleShowPassword = (field) => {
    setShowPasswords((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };


  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className="btn  bg-purple text-white rounded-3xl hover:bg-purple-text-head" onClick={() => document.getElementById('my_modal_3').showModal()}>Change Password</div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>

            <div className="w-full mb-5 group flex flex-col">
              <label htmlFor="current-password" className="mb-1 text-sm font-medium">
                Current Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type={showPasswords.currentPassword ? "text" : "password"} className={`${errors.currentPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                  placeholder="Enter your current password" id="current-password" name="currentPassword"
                  {...register("currentPassword", {
                    required: "Current password is required",
                    minLength: {
                      value: 4,
                      message: "Current password must be at least 4 characters",
                    },
                  })}
                />
                <div className={"absolute top-4 right-3 cursor-pointer"} onClick={() => toggleShowPassword("currentPassword")}>
                  {showPasswords.currentPassword ? <CiUnlock /> : <CiLock />}
                </div>
              </div>
              {errors.currentPassword && (
                <span className="text-red-500 text-sm">
                  {errors.currentPassword.message}
                </span>
              )}
            </div>

            <div className="w-full mb-5 group flex flex-col">
              <label htmlFor="new-password" className="mb-1 text-sm font-medium">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type={showPasswords.newPassword ? "text" : "password"} className={`${errors.newPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                  placeholder="Enter your new password" name="newPassword"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 8,
                      message: "New password must be at least 8 characters",
                    },
                  })}
                />
                <div className={"absolute top-4 right-3 cursor-pointer"} onClick={() => toggleShowPassword("newPassword")}>
                  {showPasswords.newPassword ? <CiUnlock /> : <CiLock />}
                </div>
              </div>
              {errors.newPassword && (
                <span className="text-red-500 text-sm">
                  {errors.newPassword.message}
                </span>
              )}
            </div>

            <div className="w-full md:mb-5 group flex flex-col">
              <label htmlFor="confirm-password" className="mb-1 text-sm font-medium">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type={showPasswords.confirmPassword ? "text" : "password"} className={`${errors.confirmPassword ? "border-red-700 focus:border-red-600" : "border-gray-300"} shadow-sm bg-white border primary-text sm:text-sm rounded-2xl focus:outline-none focus:border-purple-text block w-full p-3.5`}
                  placeholder="Confirm your new password" id="confirm-password" name="confirmPassword"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === watch("newPassword") || "Passwords do not match",
                  })}
                />
                <div className={"absolute top-4 right-3 cursor-pointer"} onClick={() => toggleShowPassword("confirmPassword")}>
                  {showPasswords.confirmPassword ? <CiUnlock /> : <CiLock />}
                </div>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_3').close()}>✕</div>
            <div className="flex justify-end my-3 w-full">
              <button type="submit" className="btn btn-primary flex  text-white" onClick={() => document.getElementById('my_modal_3').close()}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM16.5 12.75H13.25V16C13.25 16.41 12.91 16.75 12.5 16.75C12.09 16.75 11.75 16.41 11.75 16V12.75H8.5C8.09 12.75 7.75 12.41 7.75 12C7.75 11.59 8.09 11.25 8.5 11.25H11.75V8C11.75 7.59 12.09 7.25 12.5 7.25C12.91 7.25 13.25 7.59 13.25 8V11.25H16.5C16.91 11.25 17.25 11.59 17.25 12C17.25 12.41 16.91 12.75 16.5 12.75Z" fill="white" />
                </svg>
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ProfileComponent
