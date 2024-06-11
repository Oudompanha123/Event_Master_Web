import React from "react";
import { EventDetail } from "../../_components/EventDetailComponent";
import { CreateDynamicForm } from "../../_components/CreateDynamicFormComponent";
import MaterialComponent from "../../_components/MaterialComponent";
import AgendaComponent from "../../_components/AgendaComponet";
import { getEventByIdService } from "@/services/dashboard/event.service";


const Page = async ({ params: { id } }) => {
  const eventData = await getEventByIdService(id)
  return (
    <main>
      <div className=" rounded-2xl bg-white  z-0 pt-[2%] px-[2%] pb-[1%]">
        <EventDetail eventData={eventData.payload}/>
        <p className="text-primary-text font-semibold text-2xl mt-14 mb-5">
          Registratioin form
        </p>
        <CreateDynamicForm/>
        {/* <RegisterFormConferrence /> */}
        <MaterialComponent id={id}/>
        <AgendaComponent id={id}/>
      </div>
    </main>
  );
};

export default Page;
