import { getAllEventsService} from "@/services/dashboard/eventService";
import FilterComponent from "../_components/FilterComponent";
import {
} from "@/services/assetService/assetService";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/lib/auth";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const eventData = await getAllEventsService();
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const userRole = userInfo.role;
  return (
    <main>
      <FilterComponent userRole={userRole} initialData={eventData?.payload}/>
    </main>
  );
}