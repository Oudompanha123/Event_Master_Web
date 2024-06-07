
import React from "react";
import { EventDetail } from "../../_components/EventDetailComponent";
import { CreateDynamicForm } from "../../_components/CreateDynamicFormComponent";
import MaterialComponent from "../../_components/MaterialComponent";
import AgendaComponent from "../../_components/AgendaComponet";


const Page = async ({ params: { id } }) => {
  return (
    <main>
      <div className=" rounded-2xl bg-white  z-0 pt-[2%] px-[2%]">
        <EventDetail/>
        <p className="text-primary-text font-semibold text-2xl my-7">
          Registratioin form
        </p>
        <CreateDynamicForm/>
        {/* <RegisterFormConferrence /> */}
        <MaterialComponent/>
        <AgendaComponent/>
      </div>
    </main>
  );
};

export default Page;
