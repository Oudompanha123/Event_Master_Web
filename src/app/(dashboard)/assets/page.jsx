import { CiSearch } from "react-icons/ci";
import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { AssetTable } from "../_components/AssetTableComponent";
export default function assetPage() {
  return (
    <>
      <div className="contain bg-white rounded-3xl box-border">
        <div className="head flex justify-between items-center pl-4 mx-3 pt-6">
          <div className="title font-semibold text-xl">Asset Management</div>
          <div className="search_bar flex items-center gap-7 w-3/4 justify-center">
            <div className="search border h-10 rounded-[100px] flex align-middle w-3/4 p-5">
              <div className="icon flex justify-center items-center">
                <CiSearch />
              </div>
              <div className="placehoder w-full h-full flex items-center">
                <input className="p-1 ml-3 w-full focus:outline-none  font-medium text-lg text-greyUi border-none" type="text" name="" id="" placeholder="Angkor"/>
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
        <div className="pagination">
          <page/>
        </div>
      </div>
    </>
  );
}
