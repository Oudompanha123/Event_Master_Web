"use client";
import Image from "next/image";
import React, { useState } from "react";

export const MemberComponent = ({ memberInfo }) => {
  return (
    <div className="flex items-center text-xs xl:text-base w-48">
      <Image
        // src={`${image}`}
        src={`${
          memberInfo.picture
            ? memberInfo?.picture
            : "/images/default-profile.jpg"
        }`}
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
