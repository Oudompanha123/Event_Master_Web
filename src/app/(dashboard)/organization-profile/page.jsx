"use client";

import { useRef, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { LiaUserEditSolid } from "react-icons/lia";
import { BsFillPlusSquareFill } from "react-icons/bs";
import Image from "next/image";
import {useForm} from "react-hook-form";
import FormComponent from "./_components/FormComponent";
import styles from "./_components/FormComponent"
import NewFormComponent from "./_components/NewFormComponent";


const Page = () => {
  return (
    <div className="rounded-2xl w-full h-[800px] flex flex-col bg-white shadow-md relative">
      <div className="bg-purple h-[158px] rounded-t-2xl"></div>
      <NewFormComponent/>
      {/* <div className={`h-full ${styles.hideOnPhone}`}>
        <Image src="/images/Group 1000005619.png" alt="My Image" width={500} height={400} className={`absolute bottom-0 rounded-bl-2xl lg:mt-[-100px] lg:w-[250px]`}/>
      </div> */}
    </div>
  );
}; 

export default Page;
