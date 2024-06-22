"use client";

// import { DateField } from "./DateField"
import { NumberField } from "./Fields/NumberField";
import { TextField } from "./Fields/TextField";
import { InputField } from "./FieldsType/InputField";
import { Title } from "./Title";
import { BooleanField } from "./Fields/BooleanField";
import { Boolean } from "./FieldsType/Boolean";
import { EmailField } from "./Fields/EmailField";
import { useState } from "react";
import Image from "next/image";
import { DateField } from "./Fields/DateField";
import { IoIosAddCircleOutline } from "react-icons/io";

export const CreateDynamicForm = () => {
  const [popUp, setPopUp] = useState(false);
  const [viewField, setViewField] = useState(null);
  const [choosedField, setChoosedField] = useState([]);
  const [confirmField, setConfirmField] = useState([]);
  const [addFieldNamePopup, setAddFieldNamePopup] = useState(false);
  const [fieldName, setFieldName] = useState('')
  // set data to view before confirm add btn
  const parentFunc = (x) => {
    setViewField(x);
  }
  // confirm field we need 
  const handleAddClick = () => {
    { viewField != null && setAddFieldNamePopup(true) }
  }
  // confirm fields, form and create form 
  const handleFinishClick = () => {
    if (choosedField != []) {
      setConfirmField([...confirmField, ...choosedField])
      setChoosedField([])
      console.log('check confirm field', confirmField)
      setPopUp(false)
    }
  }
  //another popup
  const handleResetPopup = () => {
    // setPopUp(false);
    setAddFieldNamePopup(false);
  }
  const handleAddFieldName = () => {
    const newField = {
      fieldType: String(viewField) + ',' + String(fieldName)
    }
    if (fieldName != '') {
      { viewField != null && setConfirmField([...confirmField, newField]) }
    }
    setViewField(null);
    setFieldName('');
    setAddFieldNamePopup(false)
    setPopUp(false)
  }

  const handleCreateForm = async () => {
    alert("i got triggered")
  }

  console.log(choosedField, 'choose field')
  console.log(confirmField, 'confirm field')

  return (
    <>
      <div className="space-y-6">
        <div className="p-5 w-full rounded-3xl h-[33%] bg-white shadow-soft">
          <div className="text-primary-text font-semibold text-xl flex mb-4 content-center gap-2 ">
            <div className="content-center">
              <img
                src="https://em-content.zobj.net/source/microsoft-teams/337/card-index_1f4c7.png"
                alt=""
                className="h-4"
              />
            </div>

            <p>Contact Information</p>
          </div>
          <div className="grid gap-4 mt-5 ">
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label
                  htmlFor="full-name"
                  className=" text-sm font-semibold text-primary-text block mb-2"
                >
                  Full Name <span className=" text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="border focus:outline-none text-sm rounded-2xl p-3.5 block w-full"
                  placeholder="Enter full name"
                  required=""
                />
              </div>

              <div className="">
                <label
                  htmlFor="full-name"
                  className=" text-sm font-semibold text-primary-text block mb-2"
                >
                  Phone Number <span className=" text-red-600">*</span>
                </label>
                <input
                  type="phone"
                  name="phone-number"
                  id="phone-number"
                  className="border focus:outline-none text-sm rounded-2xl block w-full p-3.5"
                  placeholder="Enter phone number"
                  required=""
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {confirmField.map((x, index) => {
                const [inputType, inputName] = x.fieldType.split(",");
                return (
                  <>
                    {inputType == 'boolean' ?
                      <Boolean name={inputName} />
                      :
                      <InputField key={index} type={inputType} name={inputName} />
                    }
                  </>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4 justify-end">
            <button onClick={() => setPopUp(true)} className="rounded-2xl w-32 border-purple-text border-[1px] text-purple-text font-semibold antialiased py-3 h-full">
              Add field
            </button>
            <button onClick={() => handleCreateForm()} className="rounded-2xl w-32 border-purple-text border-[1px] text-white bg-purple-text font-semibold antialiased py-3 h-full">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* popup form */}
      <div
        className={`${!popUp ? `hidden` : `flex`
          } fixed top-0 left-0 h-full w-full bg-black/25 backdrop-blur-sx flex-col justify-center items-center z-50`}
      >
        {/* add field form  */}
        <div
          className={`${!addFieldNamePopup ? `block` : `hidden`
            } bg-white w-1/2 h-auto py-6 px-8 rounded-3xl mx-auto space-y-6`}
        >
          <div className="flex justify-between">
            <Title title={"Choose field htmlFor your form"} />
            <svg
              onClick={() => setPopUp(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <TextField parentFunc={parentFunc} />
            <NumberField parentFunc={parentFunc} />
            <DateField parentFunc={parentFunc} />
            <BooleanField parentFunc={parentFunc} />
            <EmailField parentFunc={parentFunc} />
          </div>
          <hr />
          <div className="space-x-3 flex justify-end">
            <button
              onClick={() => handleAddClick()}
              className="flex items-center justify-center gap-2 rounded-2xl w-32 bg-purple-text text-white py-3"
            >
              <Image
                src="/icons/add.svg"
                alt="Add Icon"
                width={20}
                height={20}
                priority
              />
              Add
            </button>
          </div>
        </div>

        {/* pop up add field name  */}
        <div
          className={`${addFieldNamePopup ? `block` : `hidden`
            } bg-white w-1/4 h-auto py-6 px-8 rounded-2xl mx-auto space-y-6 z-50`}
        >
          <div className="flex justify-between">
            <Title title={"Add name for your choosed field"} />
            <svg
              onClick={() => handleResetPopup()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div>
            <input
              onChange={(e) => setFieldName(e.target.value)}
              value={fieldName}
              type="text"
              className="bg-gray-50 px-4 py-2 rounded-2xl border border-slate-200 focus:outline-none w-full"
            />
          </div>
          <div className="space-x-3 flex justify-end">
            <button
              onClick={() => handleAddFieldName()}
              className="px-4 py-2 flex items-center gap-2 rounded-xl bg-[#038446] duration-300 text-white"
            >
              <Image
                src="/icons/edit.svg"
                alt="Add Icon"
                width={20}
                height={20}
                priority
              />
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
