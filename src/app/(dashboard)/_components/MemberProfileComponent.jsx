"use client";
import Image from "next/image";
import React, { useState } from "react";

export const MemberComponent = ({ memberInfo }) => {
  const image = `${memberInfo.picture}`;
  console.log("image :", image);
  console.log("local :image:", "");
  const [memberpict, setmemberpict] = useState(image);

  const chimg =
    memberpict === "" || memberpict == null
      ? "http://192.168.42.36:8080/api/file/getFile?fileName=f4c02b99-7c3b-4c25-ab6c-91b542d0e836.jpeg"
      : memberpict;
  // console.log("chimg:", chimg);
  return (
    <div className="flex items-center text-xs xl:text-base w-48">
      <img
        // src={`${image}`}
        src={`${chimg}`}
        alt={memberInfo.name}
        width={40}
        height={40}
        proprity={true}
        className="w-[40px] h-[40px] mr-4 rounded-full"
      />
      {memberInfo.memberName}
    </div>
  );
};
