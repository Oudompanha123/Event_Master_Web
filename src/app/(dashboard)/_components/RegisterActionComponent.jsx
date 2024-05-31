'use client'

import Link from "next/link"

export const RegisterActionComponent = () => {
    return (
        <div className="flex gap-3">
            <div>
                <button className="px-5 py-2 bg-greenUi text-white rounded-full text-xs" onClick={() => document.getElementById('my_modal_3').showModal()}>Approve</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box w-80 h-[430px]">
                        <form method="dialog">
                            <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="flex flex-col justify-between h-full">
                            <img className="mx-auto" src="/images/accept.svg" alt="accept-image" />
                            <p className="py-4 text-center text-xl font-semibold mx-auto">Are you sure this uer should be accept?</p>
                            <div className="flex space-x-6 justify-center">
                                <Link className="bg-greenUi text-white rounded-full py-2 px-9" href={'#'}>Yes</Link>
                                <Link className="bg-redUi text-white rounded-full py-2 px-9" href={'#'}>No</Link>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
            <div>
                <button className="px-5 py-2 bg-redUi text-white rounded-full text-xs" onClick={() => document.getElementById('my_modal_4').showModal()}>Reject</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-80 h-[430px]">
                        <form method="dialog">
                            <button type="submit" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div className="h-full flex flex-col justify-between">
                            <img className="mx-auto" src="/images/reject.svg" alt="reject-image" />
                            <p className="py-4 text-center text-xl font-semibold mx-auto">Are you sure you want to remove this user request?</p>
                            <div className="flex space-x-6 justify-center">
                                <Link className="bg-greenUi text-white rounded-full py-2 px-9" href={'#'}>Yes</Link>
                                <Link className="bg-redUi text-white rounded-full py-2 px-9" href={'#'}>No</Link>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}