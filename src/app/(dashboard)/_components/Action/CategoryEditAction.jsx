'use client'

import { Edit } from "iconsax-react"
import Image from "next/image"

export const CategoryEditAction = () => {
    return (
        <>
            <Image onClick={() => document.getElementById('update_category').showModal()} src="/icons/edit.svg" width={20} height={20} />
            <dialog id="update_category" className="modal">
                <div className="modal-box w-11/12 md:w-1/2 max-w-5xl space-y-8">
                    <div className="flex flex-row items-center text-primary-text">
                        <h2 className="text-lg lg:text-xl font-semibold">Update Category</h2>
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
                        <button onClick={() => document.getElementById('update_category').close()} className="px-6 py-3 rounded-2xl border-1px border-borderUi">Cancel</button>
                        <button className="px-6 py-3 rounded-2xl border-1px border-borderUi flex items-center space-x-2 bg-greenUi text-white">
                            <Edit size="24" color="#ffffff" />
                            <p>Update</p>
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    )
}