import React from "react";
import data from "../../../data/asset.json";
import { EditAssetComponent } from "./Action/EditAssetComponent";
import { DeleteAssetComponent } from "./Action/DeleteAssetComponent";
export const AsseTable = () => {
  return (
    <div className="ss">
      <table className="w-full border-separate border-spacing-y-4 mx-6">
        <thead className="bg-green-600 rounded-radiusUi w-full">
          <tr className="w-full">
            <th className="py-3 rounded-l-radiusUi">NO</th>
            <th className="py-3">ASSET NAME</th>
            <th className="py-3">QTY</th>
            <th className="py-3">UNIT</th>
            <th className="py-3">CREATED BY</th>
            <th className="py-3">STATUS</th>
            <th className="py-3 rounded-r-radiusUi">ACTION</th>
          </tr>
        </thead>
        <tbody className="border rounded-radiusUi w-full drop-shadow bg-white ">
          {data.data.map((asset) => (
            <tr className="text-center ">
              <td className="py-4 gap-3 rounded-l-radiusUi">1</td>
              <td className="">
                <div className="border rounded-radiusUi w-fit px-10 py-1 ">{asset.name}</div>
              </td>
              <td className="">
                <div className="border rounded-radiusUi w-fit px-10 py-1">{asset.qty}</div>
              </td>
              <td className="">
                <div className="border rounded-radiusUi w-fit px-10 py-1">{asset.unit}</div>
              </td>
              <td className="">
                <div className="border rounded-radiusUi w-fit px-10 py-1">{asset.createby}</div>
              </td>
              <td className="">
                <div className="border rounded-radiusUi w-fit px-10 py-1">{asset.status}</div>
              </td>
              <td className="rounded-r-radiusUi">
                <div className="flex justify-center gap-5">
                  <DeleteAssetComponent />
                  <EditAssetComponent />
                </div>
              </td>
            </tr>))}

          {/* <tr className="">
            <td className="rounded-l-radiusUi m-3 py-3">1</td>
            <td className="">bros</td>
            <td className="">23</td>
            <td className="">Boxes</td>
            <td className="">Kimchhun</td>
            <td className="">in stock</td>
            <td className="rounded-r-radiusUi ">
              <div className="flex justify-center gap-4">
                <DeleteAssetComponent />
                <EditAssetComponent />
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
