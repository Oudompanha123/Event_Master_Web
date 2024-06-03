'use client'

import Link from "next/link"
import { RxCross2 } from "react-icons/rx"

export const RegisterActionComponent = () => {
    return (
        <div className="flex gap-3">
            <div>
                <button className="px-5 py-2 bg-greenUi text-white rounded-full text-xs xl:text-base" onClick={() => document.getElementById('my_modal_3').showModal()}>Approve</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-[310px] justity-center  ">
                        <form method="dialog" className="justify-end flex">
                            <button type="submit">
                                <RxCross2 className="absolute right-[20px] top-[20px] w-6 h-6 " />
                            </button>
                        </form>
                        <div className="justify-center flex">
                            <img className="w-[58%] mb-3" src="/images/accept.svg" alt="accept-image" />
                        </div>
                        <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
                            Are you sure,you want to
                        </p>
                        <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
                            approve this user?
                        </p>
                        <div className="modal-action flex justify-center">
                            <div className="flex space-x-6 justify-center mb-4 mt-3">
                                <Link className="bg-greenUi h-9 text-white w-[100px] font-semibold rounded-full py-2 px-9" href={'#'}>Yes</Link>
                                <Link className="bg-redUi h-9 text-white w-[100px] font-semibold rounded-full py-2 px-9" href={'#'}>No</Link>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
            <div>
                <button className="px-5 py-2 bg-redUi text-white rounded-full text-xs xl:text-base" onClick={() => document.getElementById('my_modal_4').showModal()}>Reject</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-[310px] justity-center  ">
                        <form method="dialog" className="justify-end flex">
                            <button type="submit">
                                <RxCross2 className="absolute right-[20px] top-[20px] w-6 h-6 " />
                            </button>
                        </form>
                        <div className="justify-center flex">
                            <img src="images/delete.svg" alt="delete" className="w-[58%] mb-3" />
                        </div>
                        <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
                            Are you sure,you want to
                        </p>
                        <p className="justify-center w-full flex text-primary-text font-bold  text-lg  text-center">
                            remove this user?
                        </p>
                        <div className="modal-action ">
                            <form method="dialog" className=" flex justify-around w-full mb-4 mt-3 px-3">
                                <button className=" h-9 rounded-3xl bg-red-600  w-[100px] hover:bg-red-700" value="yes">
                                    <p className="text-white font-semibold">yes</p>
                                </button>
                                <button className="h-9 rounded-3xl bg-[#888888] w-[100px] hover:bg-gray-500" value="cancel">
                                    <p className="text-white font-semibold">No</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}