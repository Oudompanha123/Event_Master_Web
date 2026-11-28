import { getAllEventsService} from "@/entities/event/api/eventService";
import FilterComponent from "@/widgets/event-board/ui/FilterComponent";
import {
} from "@/entities/asset/api/assetService";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/shared/config/auth";

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