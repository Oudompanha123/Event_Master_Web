import { headerToken } from "@/app/api/auth/headerToken";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

// const session = await getServerSession(authOption);
// console.log("Token is: ", session?.user?.token)
const header = await headerToken();
export async function getAllProfileMember(){
    
    const res = await fetch("http://34.124.203.109:8081/api/profiles", {
        method : "GET",
        headers: header,
        cache : "no-store",
        next: { tags: ["customer"] }
    });
    const data = res.json()
    console.log(data)
    return data;
}

// export async function updateProfileMemberById(memberId, updateMemberData){
//     const res = await fetch(`http://34.124.203.109:8081/api/profiles/${memberId}`, {
//         method : "PUT",
//         body : JSON.stringify(updateMemberData),
//         headers : {
//             Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDksIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IjdMOXR2cSIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDksIm1lbWJlcklkIjo2Nywic3ViIjoib3Vkb21wYW5oYTQ1NkBnbWFpbC5jb20iLCJpYXQiOjE3MTgyNzE4ODksImV4cCI6MTcxOTEzNTg4OX0.NHTZB6A6LNvDgDfWkjraaderRichZBd60gIdSOYSWGs',
//             "Content-Type" : "application/json",
//         },
//     })
//     const data = res.json();
//     return data
// }