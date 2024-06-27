import { EventDetail } from "../../_components/EventDetailComponent";
import { CreateDynamicForm } from "../../_components/CreateDynamicFormComponent";
import MaterialComponent from "../../_components/MaterialComponent";
import AgendaComponent from "../../_components/AgendaComponet";
import { getEventByIdService } from "@/services/dashboard/eventService";
import { EventToggle } from "../../_components/toogle/EventToogle";
import { PushRouter } from "@/components/PushRouter";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/app/api/auth/[...nextauth]/route";

const Page = async ({ params: { id } }) => {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const userRole = userInfo.role;
  const eventData = await getEventByIdService(id)
  return (
    <main className="space-y-8">
      <div className=" rounded-3xl bg-white  z-0">
        <EventDetail eventData={eventData.payload} userRole={userRole}/>
      </div>
      <div className=" rounded-3xl bg-white  z-0 py-[2%] px-[2%]">
        <p className="text-primary-text font-semibold text-2xl mb-5">
          Registratioin form
        </p>
        <CreateDynamicForm id={id} userRole={userRole} />
      </div>
      {/* <RegisterFormConferrence /> */}
      <div className="rounded-3xl bg-white  z-0 py-[2%] px-[2%]">
        <EventToggle id={id} userRole={userRole} />
      </div>
    </main>
  );
};

export default Page;
