"use client";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { changeStatus } from "@/services/dashboard/eventService";

export function ChangeStatusComponent({ eventId }) {
    const [isLoading, setIsLoading] = useState(false);

    const notifySuccess = () => {
        toast.success("Deleted Successfully", {
        position: "top-center",
        });
    };

    const notifyError = () => {
        toast.error("You can not delete this attendee", {
        position: "top-center",
        });
    };
    const handleChangeStatus = async () => {
    if (isDeletable) {
      setIsLoading(true);
      try {
        await changeStatus (eventId);
        notifySuccess();
        document.getElementById(`status_action_${eventId}`).close();
      } catch (error) {
        console.error(`Failed to change status with ID: ${eventId}`, error);
        toast.error("Failed to change status. Please try again.", {
          position: "top-center",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
        notifyError();
    }
  };
  return (
    <>
      <button
        className="rounded-2xl"
        value="status"
        onClick={() => {
          document.getElementById(`status_action_${eventId}`).showModal();
        }}
      >
      </button>
      <dialog id={`status_action_${eventId}`} className="modal">
        <div className="modal-box w-[310px] justify-center">
          <form method="dialog" className="justify-end flex">
            <button type="submit">
              <RxCross2 className="absolute right-[20px] top-[20px] w-6 h-6" />
            </button>
          </form>
          <div className="justify-center flex">
            <Image
              src={`/images/question.svg`}
              alt={`question image`}
              className="w-[58%] mb-3"
              width={32}
              height={32}
            />
          </div>
          <p className="justify-center w-full flex text-primary-text font-bold text-lg text-center">
            Do you want to change Status?
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex justify-around w-full mb-4 mt-3 px-3">
              <button onClick={handleChangeStatus} className="h-9 rounded-3xl bg-[#038446] w-[100px] hover:bg-green-700" value="yes">
                <p className="text-white font-semibold">Yes</p>
              </button>
              <button className="h-9 rounded-3xl bg-redUi w-[100px] hover:bg-red-700" value="cancel">
                <p className="text-white font-semibold">No</p>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
