'use client'

import Link from "next/link";

const VerifyComponent = () => {

    return (
        <div className="absolute mx-[29%] mt-[32%] left-[12%]">
            <form>
                <div className="mt-5">
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-purple-text-head flex justify-center">
                        Congratulations!
                    </h2>
                    <p className="flex justify-center greyUi mt-6">You have set up the new password successfully.</p>
                </div>

            </form>
        </div>
    )
}
export default VerifyComponent