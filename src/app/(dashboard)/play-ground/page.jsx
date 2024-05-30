const Page = () => {
    return (
        <div className="overflow-scroll w-full">
            <table className="w-full border-separate border-spacing-y-4">
                <thead className="bg-green-600 rounded-radiusUi">
                    <tr className="">
                        <th className="py-3 rounded-l-radiusUi">NO</th>
                        <th className="py-3">ASSET NAME</th>
                        <th className="py-3">QTY</th>
                        <th className="py-3">UNIT</th>
                        <th className="py-3">CREATED BY</th>
                        <th className="py-3">STATUS</th>
                        <th className="py-3 rounded-r-radiusUi">ACTION</th>
                    </tr>
                </thead>
                <tbody className="border rounded-radiusUi bg-blue-500">
                    <tr className="p-5 text-center">
                        <td className="py-3 rounded-l-radiusUi">1</td>
                        <td className="">bros</td>
                        <td className="">23</td>
                        <td className="">Boxes</td>
                        <td className="">Kimchhun</td>
                        <td className="">in stock</td>
                        <td className="rounded-r-radiusUi"></td>
                    </tr>
                    <tr className="p-5 text-center">
                        <td className="py-3 rounded-l-radiusUi">1</td>
                        <td className="">bros</td>
                        <td className="">23</td>
                        <td className="">Boxes</td>
                        <td className="">Kimchhun</td>
                        <td className="">in stock</td>
                        <td className="rounded-r-radiusUi"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Page