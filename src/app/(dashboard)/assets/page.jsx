import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { IoSearchOutline } from "react-icons/io5";
import { AssetTableComponent } from "../_components/assetTableComponent";
import { Pagination } from "../_components/Pagination";
export default function assetPage() {
  return (
    <>
      <div className="contain bg-white w-full lg:w-full rounded-3xl box-border">
        <div className="head flex flex-col gap-2 lg:flex-row lg:justify-between p-6 ">
          <div className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Asset Management
          </div>
          <div className="search_bar flex gap-7   lg:w-3/4 justify-between ">
            <div className=" w-4/5 lg:w-[730px]">
              <input
                type="text"
                placeholder="Angkor"
                className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-full h-11 border rounded-3xl pl-10"
              />
              <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
            </div>
            <div className="button_new">
              <AssetPopupComponent />
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="box-border mt-0 overflow-scroll">
            <AssetTableComponent />
            <div className="pagination flex justify-end px-8 pb-8 mt-8">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
