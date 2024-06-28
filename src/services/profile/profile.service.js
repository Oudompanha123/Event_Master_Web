"use server"
import { headerToken } from "@/app/api/auth/headerToken";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";


export async function getAllMemberProfile(){
    const header = await headerToken();
    const res = await fetch(`${process.env.API_URL}profiles`, {
        method : "GET",
        headers : header,
        cache : "no-store",
        next: { tags: ["customer"] }
    })
    const data = await res.json();
    // console.log("get :",data);
    return data;
}

export async function updateProfileMemberById(memberId, updateMemberData){
    console.log("Member ID: ", memberId);
    console.log("Data of member: ", updateMemberData)
    const header = await headerToken();
    try {
        const res = await fetch(`${process.env.API_URL}profiles/update-member/${memberId}`, {
            method: "PUT",
            body: JSON.stringify(updateMemberData),
            headers: header,
        });
        const data = await res.json();
        console.log("data :",data);
        return data;
    } catch (error) {
        console.error("Error updating member:", error);
        throw error;
    }
}

export async function changePassword(updatePassword){
    const header = await headerToken();
    try{
        const res = await fetch(`${process.env.API_URL}profiles/change-password`, {
            method: "PUT",
            body: JSON.stringify(updatePassword),
            headers: header,
            
    });
        const data = await res.json();
        return data;
    }catch (error){
        console.error("Error: ", error);
        throw error;
    }
   
}
