import { DeleteAssetComponent } from "../_components/Action/DeleteAssetComponent"
import { EditAssetComponent } from "../_components/EditAssetComponent"

const Page = () => {
    return (
        <div className="">
            <table className="w-full border-separate border-spacing-y-3 px-6 mt-0">
                <thead className="bg-tableBg rounded-radiusUi w-full px-1">
                    <tr className="w-full border-2 border-black">
                        <th className="py-3 px-2 rounded-l-radiusUi font-semibold text-sm">
                            NO
                        </th>
                        <th className="py-3 font-semibold text-sm whitespace-nowrap">Name</th>
                        <th className=" font-semibold text-sm whitespace-nowrap">Created At</th>
                        <th className=" font-semibold text-sm whitespace-nowrap">Created By</th>
                        <th className=" font-semibold text-sm whitespace-nowrap">Action</th>
                    </tr>
                </thead>
                <tbody className="border rounded-radiusUi w-full drop-shadow bg-white">
                    <tr className="text-center mx-5 border-2 border-black">
                        <td className="py-3 rounded-l-radiusUi items-center whitespace-nowrap">
                            1
                        </td>
                        <td className="w-[250px] whitespace-nowrap">
                            <div className="mx-5 py-1 w-auto">
                                Social Event
                            </div>
                        </td>
                        <td className=" w-13 whitespace-nowrap">
                            <div className="mx-5 py-1">
                                01/08/2022
                            </div>
                        </td>
                        <td className="whitespace-nowrap">
                            <div className="mx-3 py-1">
                                Kendrick
                            </div>
                        </td>
                        <td className="rounded-r-radiusUi whitespace-nowrap">
                            <div className="flex justify-center items-center gap-3">
                                <DeleteAssetComponent />
                                <EditAssetComponent />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <select className="px-8 classic" name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>

    )
}

export default Page