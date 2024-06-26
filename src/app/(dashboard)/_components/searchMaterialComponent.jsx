import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export const SearchMaterialComponent = ({ handleSearch, initialQuery }) => {
  const [searchInput, setSearchInput] = useState(initialQuery || "");
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  useEffect(() => {
    setSearchInput(initialQuery || "");
  }, [initialQuery]);

  const handlesearch = async (e) => {
    const value = e.target.value;
    setSearchInput(value);
    handleSearch(value);
  };

  return (
    <div className="w-4/5 lg:w-[730px]">
      <form onSubmit={handleSubmit((data) => handleSearch(data.searchBar))}>
        <input
          value={searchInput}
          type="text"
          name="searchBar"
          placeholder="Angkor"
          className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
          {...register("searchBar")}
          onChange={handlesearch}
        />
        <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
      </form>
    </div>
  );
};
