"use client";

import { AddSquare } from "iconsax-react";

const CreateCategoryButton = () => {
    return (
        <>
            <button
                onClick={() => document.getElementById('my_modal_category').showModal()}
                className="hover:bg-purple-text hover:text-white duration-300 transition-all border-1px border-purple-text text-purple-text rounded-full p-2 md:px-4 md:py-2.5 flex items-center space-x-3"
            >
                <AddSquare size="20" variant="Bold" />
                <p className="text-xs lg:text-base hidden md:block">New Category</p>
            </button>
            <dialog id="my_modal_category" className="modal">
                <div className="modal-box w-11/12 md:w-1/3 max-w-5xl space-y-8">
                    <div className="flex flex-row items-center text-primary-text">
                        <h2 className="text-lg lg:text-xl font-semibold">Create Category</h2>
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                    </div>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        className="shadow-sm bg-white border greyUi primary-text sm:text-sm focus:outline-none focus:border-purple-text rounded-2xl block w-full p-3.5"
                        placeholder="Category" required=""
                    />
                    <div className="flex justify-end space-x-3">
                        <div onClick={() => document.getElementById("my_modal_category").close()} className="px-6 py-3 rounded-2xl border-1px border-borderUi cursor-pointer">Cancel</div>
                        <button onClick={() => document.getElementById("my_modal_category").close()} type="submit" className="save border rounded-2xl bg-purple-text text-white flex justify-center text-center items-center px-4 gap-3 ">
                            <AddSquare size="20" color="#FFFFFF" variant="Bold" />
                            <span className="h-12 text-white flex justify-center items-center">Create</span>
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default CreateCategoryButton;
