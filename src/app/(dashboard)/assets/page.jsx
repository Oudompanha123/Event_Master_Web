// import { CiSearch } from "react-icons/ci";
import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { AssetTable } from "../_components/AssetTableComponent";
// import CreateCategoryButton from "../_components/Action/CreateCategoryButton"

import { IoSearchOutline } from "react-icons/io5";
export default function assetPage() {
  return (
    <>
      <div className="contain bg-white w-fit lg:w-full rounded-3xl box-border">
        <div className="head flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center p-6 ">
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
        <div className="tables box-border mt-0">
          <AssetTable />
        </div>
        {/* <div className="pagination">
          <page/>
        </div> */}
      </div>
    </>
  );
}
// <div className="placehoder w-full h-full flex items-center bg border-l-emerald-500 p-2 bg-blue-500">
//             <div>
//               <div className=" w-4/5 lg:w-[730px] bg-blue-400">
//                 <input
//                   type="text"
//                   placeholder="Angkor"
//                   className="font-medium text-xs lg:text-base focus:outline-none focus:border-purple-text w-4/5 h-11 border rounded-3xl pl-10"
//                 />
//                 <IoSearchOutline className="w-[24px] h-[24px] -mt-8 ml-3" />
//               </div>
//             </div>
//           </div>
//           <div className="button_new rounded-[100px]">
//             <AssetPopupComponent />
//           </div>
