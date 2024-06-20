"use client";

// import { DateField } from "./DateField"
import { NumberField } from "./NumberField";
import { TextField } from "./TextField";
import { InputField } from "./InputField";
import { Title } from "./Title";
import { BooleanField } from "./BooleanField";
import { EmailField } from "./EmailField";
import { useState } from "react";
import Image from "next/image";
import { DateField } from "./DateField";
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
            { viewField != null && setChoosedField([...choosedField, newField]) }
        }
        setViewField(null);
        setFieldName('');
        setAddFieldNamePopup(false)
    }
    console.log(choosedField, 'choose field')
    
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
                  <InputField key={index} type={inputType} name={inputName} />
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setPopUp(true)}
            className="border-none btn w-full font-medium text-sm bg-blue-100 text-blue-700 rounded-radiusUi justify-start hover:bg-blue-200 mt-5"
          >
            {" "}
            <IoIosAddCircleOutline size={24} color="blue" />
            Add One more activity
          </button>
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
          <div className="grid grid-cols-2">
            {!choosedField?.length == 0 ? (
              <table className="table-auto">
                <thead>
                  <tr className="text-sm">
                    <th className="font-medium text-start">Field Type</th>
                    <th className="font-medium text-start">Field Name</th>
                  </tr>
                </thead>
                <tbody>
                  {choosedField?.map((x, index) => {
                    const inputType = x?.fieldType.split(",")[0];
                    const inputName = x?.fieldType.split(",")[1];
                    return (
                      <tr key={index}>
                        <td className="text-sm font-normal">{inputType}</td>
                        <td className="text-sm font-normal">{inputName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <p className="text-xs text-neutral-400">
                You haven't chosen any field yet
              </p>
            )}
          </div>
          <div className="space-x-3 flex justify-end">
            <button
              onClick={() => handleAddClick()}
              className="flex items-center justify-center gap-2 rounded-xl w-32 bg-[#551FFF] text-white py-2"
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
            <button
              onClick={() => handleFinishClick()}
              className="rounded-xl w-32 border-[#551FFF] border-[1px] text-[#551FFF] font-semibold antialiased py-2"
            >
              Save
            </button>
          </div>
        </div>

        {/* pop up add field name  */}
        <div
          className={`${addFieldNamePopup ? `block` : `hidden`
            } bg-white w-1/4 h-auto py-6 px-8 rounded-2xl mx-auto space-y-6 z-50`}
        >
          <div className="flex justify-between">
            <Title title={"Add name htmlFor your choosed field"} />
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
