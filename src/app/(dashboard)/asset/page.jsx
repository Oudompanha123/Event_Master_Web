import { CiSearch } from "react-icons/ci";
import data from "../../../data/asset.json";
import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { EditAssetComponent } from "../_components/EditAssetComponent";
import { DeleteAssetComponent } from "../_components/DeleteAssetComponent";
export default function asset_page() {
  return (
    <>
      <div className="main">
        <div className="title font-semibold text-base p-6">
          {" "}
          Asset Management
        </div>
        <div className="search_bar flex justify-between p-6">
          <div className="search border h-14 rounded-[100px] flex align-middle w-1/2 p-5">
            <div className="icon flex  ml-3 items-center">
              <CiSearch />
            </div>
            <div className="placeholder flex items-center">
              <p className="ml-3 font-medium text-lg text-greyUi">Angkor</p>
            </div>
          </div>
          <div className="">
            <AssetPopupComponent />
          </div>
        </div>

        <div className="tables">
          <div className="head w-full bg-gray-200 grid grid-cols-7 space-x-5 rounded-lg gap-7 p-5 ">
            <span className=" font-semibold text-xs">NO</span>
            <span className=" font-semibold text-xs ">ASSET NAME</span>
            <span className=" font-semibold text-xs ">QTY</span>
            <span className=" font-semibold text-xs  ">UNIT</span>
            <span className=" font-semibold text-xs ">CAEATE BY</span>
            <span className=" font-semibold text-xs ">STATUS</span>
            <span className=" font-semibold text-xs ">ACTION</span>
          </div>

          {data.data.map((data, index) => (
            <div className="body w-full border grid grid-cols-7 rounded-lg gap-10 p-4  mt-3 space-x-5">
              <span>{index + 1}</span>
              <span className=" w-36 h-10 bg-softwhiteUi rounded-lg  px-8 py-3 font-medium text-xs flex justify-center items-center">
                {data.name}
              </span>
              <span className=" w-20 h-10 bg-softwhiteUi rounded-lg px-8 py-3  text-xs flex justify-center items-center">
                {data.qty}
              </span>
              <span className="w-20 h-10 bg-softwhiteUi rounded-lg px-8 py-3 text-xs flex justify-center items-center">
                {data.unit}
              </span>
              <span className="w-36 h-10 bg-softwhiteUi rounded-lg px-10 py-3 text-xs flex justify-center items-center">
                {data.createby}
              </span>
              <span className="w-36 h-10 bg-softwhiteUi rounded-lg px-6 py-3 text-xs flex justify-center items-center">
                {data.status}
              </span>

              <div className="action flex  items-center justify-center space-x-5">
                <DeleteAssetComponent />
                <EditAssetComponent />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
