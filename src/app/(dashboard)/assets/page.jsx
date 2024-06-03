// import { CiSearch } from "react-icons/ci";
import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { AssetTable } from "../_components/AssetTableComponent";
// import { Image } from "iconsax-react";
import { IoSearchOutline } from "react-icons/io5";
export default function assetPage() {
  return (
    <>
      <div className="contain bg-white w-fit lg:w-full rounded-3xl box-border">
        <div className="head flex justify-between items-center pl-4 mx-3 pt-6">
          <div className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Asset Management
          </div>
          <div className="search_bar flex items-center gap-7 w-3/4 justify-center">
            <div className="search border h-10 rounded-[100px] flex align-middle w-3/4 p-5">
              <div className="icon flex justify-center items-center">
                {/* <CiSearch /> */}
                {/* <Image src="/icons/search.svg" width={20} height={20} /> */}
                <IoSearchOutline className="w-[24px] h-[24px]" />
              </div>
              <div className="placehoder w-full h-full flex items-center">
                <input
                  className="p-1 ml-3 w-full focus:outline-none font-medium text-xs lg:text-base text-greyUi border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Angkor"
                />
              </div>
            </div>
            <div className="button_new rounded-[100px]">
              <AssetPopupComponent />
            </div>
          </div>
        </div>
        <div className="tables box-border">
          <AssetTable />
        </div>
        {/* <div className="pagination">
          <page/>
        </div> */}
      </div>
    </>
  );
}
