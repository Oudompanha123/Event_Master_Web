"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Form, useForm } from "react-hook-form";
import { handleSearchAsset } from "@/app/actions/assetAction/handleAssetInput";
import { handleSearch } from "@/actions/findEventAction";
export const SearchAssetComponent = () => {
  const [SearchInput, setSearchInput] = useState();

  const { register,handleSubmit } = useForm();
  const onSubmit = async (e) => {
   
  };
  const handlesearch = async (e) => {
    console.log("data1", e);
     await handleSearchAsset(e);
  };

  return (
    <div className=" w-4/5 lg:w-[730px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          value={SearchInput}
          type="text"
          name="searchBar"
          placeholder="Angkor"
          className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
          {...register("searchBar")}
          onChange={(e) => {
            handlesearch(e.target.value);
          }}
        />
        <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
      </form>
    </div>
  );
};
