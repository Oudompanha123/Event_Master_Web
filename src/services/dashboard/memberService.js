'use server'
import { headerToken } from "@/app/api/auth/headerToken";

async function getHeader() {
    return await headerToken();
}

export async function getAllMemberService() {
    const header = await getHeader();
    const res = await fetch(`${process.env.API_URL}members?offset=1&limit=8`, {
        next: { tags: ["member"] },
        method: "GET",
        cache: "no-store",
        headers: header
    });
    const data = await res.json();
    return data;
}


export async function deleteMemberByIdService(memberId) {
    const res = await fetch(`${process.env.API_URL}members/${memberId}`,
        {
            next: { tags: ["member"] },
            method: "DELETE",
            cache: "no-store",
            headers: header
        }
    );
    const data = res.json();
    return data;
}
