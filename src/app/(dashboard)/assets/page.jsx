import { AssetPopupComponent } from "../_components/CreateNewAssetComponent";
import { AssetTableComponent } from "../_components/assetTableComponent";
import { SearchAssetComponent } from "../_components/SearchAssetComponent";
import {
  getAllAssetService,
  searchAssetByName,
} from "@/services/assetService/assetService";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
export default async function assetPage({ searchParams }) {
  const query = searchParams?.query || "";
  const page = searchParams?.page;
  const dataasset = await getAllAssetService(page);
  const searchasset = await searchAssetByName(query);
  const nullsearch = searchasset.totalRecord;
  const data = query == "" || query == null ? dataasset : searchasset;
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const userRole = userInfo.role;

  return (
    <>
      <div className="contain bg-white w-full lg:w-full rounded-3xl box-border">
        <div className="head flex flex-col gap-2 lg:flex-row lg:justify-between p-6 ">
          <div className="md:text-lg xl:text-xl font-semibold text-primary-text">
            Asset Management
          </div>
          <div className="search_bar flex gap-7 lg:w-3/4 justify-between ">
            <SearchAssetComponent />
            <div className={`${userRole === "ROLE_USER" && "hidden"}`}>
              <AssetPopupComponent />
            </div>
          </div>
        </div>
        <div className="px-6">
          <div className="box-border mt-0 overflow-scroll">
            <AssetTableComponent
              data={data}
              query={query}
              nullsearch={nullsearch}
            />
          </div>
        </div>
      </div>
    </>
  );
}
