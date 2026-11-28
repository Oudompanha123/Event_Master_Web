import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { AssetPopupComponent } from "@/features/asset/manage/ui/CreateNewAssetComponent";
import { SearchAssetComponent } from "@/features/asset/search/ui/SearchAssetComponent";
import { AssetTable } from "@/widgets/asset-table/ui/AssetTable";
import { getAllAssetService, searchAssetByName } from "@/entities/asset/api/assetService";
import { authOption } from "@/shared/config/auth";
import { PageSection } from "@/shared/ui/page-section";

export default async function AssetPage(props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const page = searchParams?.page;
  // search results start at page 1
  const data = query ? await searchAssetByName(query, 1) : await getAllAssetService(page);
  const session = await getServerSession(authOption);
  const userRole = jwtDecode(session?.user?.token).role;

  return (
    <PageSection
      title="Asset Management"
      actions={
        <>
          <SearchAssetComponent className="lg:max-w-md" />
          {userRole !== "ROLE_USER" && <AssetPopupComponent />}
        </>
      }
    >
      <AssetTable data={data?.payload} totalRecord={query ? undefined : data?.totalRecord} userRole={userRole} />
    </PageSection>
  );
}
