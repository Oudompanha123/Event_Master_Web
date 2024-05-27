import { RedirectBackComponent } from "../_componenets/RedirectButtonComponent"

const Page = () => {
    return (
        <div className="container">
            <RedirectBackComponent link={'/'} />
            <div className="p-6 rounded-3xl border-2 border-slate-50">
                <h2 className="font-bold text-2xl mb-8">Register Form</h2>
                <form action="" className="space-y-6">
                    {/* first row  */}
                    <div className="flex w-full gap-16">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Full Name</label>
                            <input className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" type="text" placeholder="Enter full name" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Gender</label>
                            <select className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" name="gender" id="">
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            {/* <input className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" type="text" placeholder="Enter full name" /> */}
                        </div>
                    </div>
                    {/* second row  */}
                    <div className="flex w-full gap-16">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Phone Number</label>
                            <input className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" type="tel" placeholder="Enter phone number" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Email</label>
                            <input className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" type="email" placeholder="Enter email" />
                        </div>
                    </div>
                    {/* third row  */}
                    <div className="flex w-full gap-16">
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Company Name</label>
                            <input className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" type="text" placeholder="Enter company name" />
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="font-semibold" htmlFor="">Title/Position (optional)</label>
                            <input className="px-6 rounded-3xl py-5 border-2 border-softwhiteUi w-full" type="text" placeholder="Enter title / position" />
                        </div>
                    </div>
                    <div className="w-full text-end">
                        <button className="rounded-full px-8 py-4 bg-purple-text text-white font-bold">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page