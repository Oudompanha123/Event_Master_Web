'use server'
import { searchAttendeeByNameOrPhoneService } from "@/services/dashboard/attendeeService";
import { revalidateTag } from "next/cache";

export async function searchAttendeeAction (id,attendeeNameOrPhone){
    //calling search attendee service 
    await searchAttendeeByNameOrPhoneService(id,attendeeNameOrPhone);
    //calling revalidate tag
    revalidateTag('attendee')

}