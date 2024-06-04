import React from "react";
import AgendaComponent from "../_components/AgendaComponet";
import { RegisterFormConferrence } from "../_components/RegisterFormConferrenceComponent";
import { EventDetail } from "../_components/EventDetailComponent";
import MaterialComponent from "../_components/MaterialComponent";
import { CreateDynamicForm } from "../_components/CreateDynamicFormComponent";

const Page = async ({ params: { id } }) => {
  return (
    <main>
      <div className=" rounded-2xl bg-white shadow-md z-0 pt-[2%] px-[2%]">
        <EventDetail />
        <p className="text-primary-text font-semibold text-2xl my-7">
          Registratioin form
        </p>
        <CreateDynamicForm/>
        {/* <RegisterFormConferrence /> */}
        <MaterialComponent />
        <AgendaComponent />
      </div>
    </main>
  );
};

export default Page;
