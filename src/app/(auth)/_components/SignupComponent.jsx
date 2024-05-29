const SignupComponent = () => {
    return (
        <div>
            <div className="mx-[42%] mt-48 w-[45%] bg-white rounded-[40px] shadow-md absolute">
                <div className="flex justify-start p-6 pt-12 mx-8">
                    <button type="sign Up" id="sign-up"
                            className="shadow-sm bg-white border border-gray-300 primary-text font-medium text-sm rounded-3xl px-9 py-3.5">
                        ADMIN
                    </button>
                    <button type="sign Up" id="sign-up"
                            className="bg-purple-text text-white font-medium text-sm rounded-3xl px-12 py-3.5 ml-[-35px]">
                        USER
                    </button>
                </div>

                <div className="p-6 space-y-6 mx-8">
                    <form action="#">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="text-sm font-medium primary-text block mb-2">Full
                                    Name <span className="text-red-600">*</span></label>
                                <input type="text" name="product-name" id="product-name"
                                       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                       placeholder="Enter your full name" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="email"
                                       className="text-sm font-medium primary-text block mb-2">Email <span
                                    className="text-red-600">*</span></label>
                                <input type="text" name="category" id="category"
                                       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                       placeholder="Enter you email" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="password"
                                       className="text-sm font-medium primary-text block mb-2">Password <span
                                    className="text-red-600">*</span></label>
                                <input type="text" name="brand" id="brand"
                                       className="shadow-sm bg-white border greyUi primary-text sm:text-sm rounded-2xl block w-full p-3.5 "
                                       placeholder="Enter yor password " required=""/>
                                <div className="flex justify-end -mt-[34px] mr-5 ">
                                    <img src="/lock-slash.svg" alt="icon"/>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="confirm-password"
                                       className="text-sm font-medium primary-text block mb-2">Confirm Password <span
                                    className="text-red-600">*</span></label>
                                <input type="password" name="brand" id="brand"
                                       className="shadow-sm bg-white border greyUi primary-text sm:text-sm rounded-2xl block w-full p-3.5 "
                                       placeholder="Enter yor confirm password " required=""/>
                                <div className="flex justify-end -mt-[34px] mr-5 ">
                                    <img src="/lock-slash.svg" alt="icon"/>
                                </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3 pt-5">
                                <label htmlFor="phone-number"
                                       className="text-sm font-medium primary-text block mb-2">Phone
                                    Number <span
                                        className="text-red-600">*</span></label>
                                <input type="text" name="brand" id="brand"
                                       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                       placeholder="Enter yor phone number" required=""/>
                            </div>
                            <div className="col-span-6 sm:col-span-3 pt-5">
                                <label htmlFor="organization-code"
                                       className="text-sm font-medium primary-text block mb-2">Organization
                                    Code <span
                                        className="text-red-600">*</span></label>
                                <input type="password" name="price" id="price"
                                       className="shadow-sm bg-white border border-gray-300 primary-text sm:text-sm rounded-2xl focus:ring-cyan-600 focus:border-cyan-600 block w-full p-3.5"
                                       placeholder="Enter your organizzation code" required=""/>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="flex justify-center p-6 pb-16">
                    <button type="sign Up" id="sign-up"
                            className="bg-purple-text text-white font-medium text-sm rounded-3xl px-44 py-3.5 hover:bg-greyUi shadow-md shadow-violet-400">Sign Up
                    </button>
                </div>

            </div>

        </div>
    )

}
export default SignupComponent