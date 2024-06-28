import { getAllEventsService} from "@/services/dashboard/eventService";
import FilterComponent from "../_components/FilterComponent";
import {
} from "@/services/assetService/assetService";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { ToastContainer } from "react-toastify";

export default async function Page({ searchParams }) {
  const eventData = await getAllEventsService();
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const userRole = userInfo.role;
  return (
    <main>
      <FilterComponent userRole={userRole} initialData={eventData?.payload}/>
      <ToastContainer autoClose="1000"/>
    </main>
  );
}
