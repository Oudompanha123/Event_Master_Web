import React from "react";
import data from "../../../data/asset.json";
import { EditAssetComponents } from "./EditAssetComponents";
import { DeleteAssetComponent } from "./DeleteAssetComponent";
export const AssetTableComponent = () => {

  return (
    <div className="">
      <table className="w-full border-separate border-spacing-y-3 px-6 mt-0">
        <thead className="h-14 drop-shadow-soft text-primary-text rounded-radiusUi bg-tableBg uppercase">
          <tr className="w-full overflow-auto text-xs lg:text-base">
            <th className="py-3 font-medium px-2 rounded-l-radiusUi">NO</th>
            <th className="py-3 font-medium">ASSET NAME</th>
            <th className="font-medium">QTY</th>
            <th className="font-medium">UNIT</th>
            <th className="font-medium">CREATED BY</th>
            <th className="font-medium">STATUS</th>
            <th className="font-medium rounded-r-radiusUi px-3  ">ACTION</th>
          </tr>
        </thead>
        <tbody className="border rounded-radiusUi w-full drop-shadow-soft bg-white ">
          {data.data.map((asset, index) => (
            <tr className="text-center mx-5 h-14 rounded-radiusUi gap-20 box-border">
              <td className="py-3 rounded-l-radiusUi items-center text-xs xl:text-base w-20">
                {index + 1}
              </td>
              <td className="w-28">
                <div className="text-xs xl:text-base border rounded-radiusUi mx-3.5 py-1 w-auto">
                  {asset.name}
                </div>
              </td>
              <td className="w-16">
                <div className="text-xs xl:text-base border rounded-radiusUi mx-3 py-1">
                  {asset.qty}
                </div>
              </td>
              <td className="w-16">
                <div className="text-xs xl:text-base border rounded-radiusUi mx-3 py-1">
                  {asset.unit}
                </div>
              </td>
              <td className="w-28">
                <div className="text-xs xl:text-base border rounded-radiusUi mx-3 py-1">
                  {asset.createby}
                </div>
              </td>
              <td className="w-14">
                <div
                  className={`text-xs xl:text-base border rounded-radiusUi py-1
                  ${
                    asset.status == "Out of Stock"
                      ? "bg-softRedUi"
                      : "bg-softGreenUi"
                  } `}
                >
                  {asset.status}
                </div>
              </td>
              <td className="rounded-r-radiusUi w-20">
                <div className="flex justify-center items-center gap-3 mx-3">
                  <div className="cursor-pointer">
                    <DeleteAssetComponent />
                  </div>
                  <div className="cursor-pointer">
                    <EditAssetComponents />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
