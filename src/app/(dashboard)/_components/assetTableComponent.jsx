import React from "react";
import data from "../../../data/asset.json";
import { EditAssetComponents } from "./EditAssetComponents";
import { DeleteAssetComponent } from "./DeleteAssetComponent";
export const AssetTable = () => {
  return (
    <div className="">
      <table className="w-full border-separate border-spacing-y-3 px-6 mt-0">
        <thead className="bg-tableBg rounded-radiusUi w-full px-1">
          <tr className="w-full">
            <th className="py-3 px-2 rounded-l-radiusUi  text-base">
              NO
            </th>
            <th className="py-3 font-semibold text-sm">ASSET NAME</th>
            <th className=" font-semibold text-sm">QTY</th>
            <th className=" font-semibold text-sm">UNIT</th>
            <th className=" font-semibold text-sm">CREATED BY</th>
            <th className=" font-semibold text-sm">STATUS</th>
            <th className=" rounded-r-radiusUi px-3 font-semibold text-sm">
              ACTION
            </th>
          </tr>
        </thead>
        <tbody className="border rounded-radiusUi w-full drop-shadow-soft bg-white">
          {data.data.map((asset, index) => (
            <tr className="text-center mx-5">
              <td className="py-3 rounded-l-radiusUi items-center text-base">
                {index + 1}
              </td>
              <td className=" w-[250px]">
                <div className="border rounded-radiusUi mx-5 py-1 w-auto">
                  {asset.name}
                </div>
              </td>
              <td className=" w-13">
                <div className="border rounded-radiusUi mx-5 py-1">
                  {asset.qty}
                </div>
              </td>
              <td className="">
                <div className="border rounded-radiusUi mx-3 py-1">
                  {asset.unit}
                </div>
              </td>
              <td className=" w-[150px]">
                <div className="border rounded-radiusUi mx-3 py-1">
                  {asset.createby}
                </div>
              </td>
              <td className="">
                <div className="border rounded-radiusUi  py-1">
                  {asset.status}
                </div>
              </td>
              <td className="rounded-r-radiusUi ">
                <div className="flex justify-center items-center gap-3">
                <div className="cursor-pointer"><DeleteAssetComponent/></div>
                <div className="cursor-pointer"> <EditAssetComponents/></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
