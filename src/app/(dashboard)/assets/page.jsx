import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { AssetTableComponent } from "../_components/assetTableComponent";
import { SearchAssetComponent } from "../_components/SearchAssetComponent";
import {
  getAllAssetService,
  searchAssetByName,
} from "@/services/assetService/assetService";
import { ToastContainer } from "react-toastify";
export default async function assetPage({ searchParams }) {
  const query = searchParams?.query || "";
  const dataasset = await getAllAssetService();
  const searchasset = await searchAssetByName(query);
  const data = query == "" || query == null ? dataasset : searchasset;

  return (
    <>
      <div className="contain bg-white w-full lg:w-full rounded-3xl box-border">
        <div className="head flex flex-col gap-2 lg:flex-row lg:justify-between p-6 ">
          <div className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Asset Management
          </div>
          <div className="search_bar flex gap-7 lg:w-3/4 justify-between ">
            <SearchAssetComponent />
            <div className="button_new">
              <AssetPopupComponent />
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="box-border mt-0 overflow-scroll">
            <AssetTableComponent data={data} query={query} />
          </div>
        </div>
        <ToastContainer autoClose="1000" />
      </div>
    </>
  );
}
