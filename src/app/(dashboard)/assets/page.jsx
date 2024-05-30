import { CiSearch } from "react-icons/ci";
import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { AsseTable } from "../_components/assetTableComponent";
export default function asset_page() {
  return (
    <>
      <div className="contain bg-white rounded-3xl">
        <div className="head flex justify-between items-center p-4 mx-3">
          <div className="title font-semibold text-base">Asset Management</div>
          <div className="search_bar flex items-center gap-7 w-3/4 justify-center">
            <div className="search border h-10 rounded-[100px] flex align-middle w-3/4 p-5">
              <div className="icon flex justify-center items-center">
                <CiSearch />
              </div>
              <div className="placeholder flex items-center">
                <p className="ml-3 font-medium text-lg text-greyUi">Angkor</p>
              </div>
            </div>
            <div className="button_new rounded-[100px]">
              <AssetPopupComponent />
            </div>
          </div>
        </div>
        <AsseTable />
        <div className="pagination"></div>
      </div>
    </>
  );
}
