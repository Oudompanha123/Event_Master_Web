import { EventDetail } from "@/widgets/event-detail/ui/EventDetailComponent";
import { CreateDynamicForm } from "@/features/registration-form/build/ui/CreateDynamicFormComponent";
import MaterialComponent from "@/widgets/material-board/ui/MaterialComponent";
import AgendaComponent from "@/widgets/agenda-board/ui/AgendaComponet";
import { getEventByIdService } from "@/entities/event/api/eventService";
import { EventToggle } from "./EventToogle";
import { PushRouter } from "@/shared/ui/PushRouter";
import { getServerSession } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { authOption } from "@/shared/config/auth";

const Page = async (props) => {
  const { id } = await props.params;
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const userRole = userInfo.role;
  const userId = userInfo.memberId;
  const eventData = await getEventByIdService(id)
  const endDate = eventData?.payload.endDate;
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
        <EventToggle id={id} userRole={userRole} userId={userId} endDate={endDate} />
      </div>
    </main>
  );
};

export default Page;
