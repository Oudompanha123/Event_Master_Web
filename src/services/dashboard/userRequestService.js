'use server'
import { revalidateTag } from "next/cache";

export async function getAllUserRequestService(){
    const res = await fetch(`${process.env.API_URL}user-requests`,
        {
            next: { tags: ["user_request"] },
            method: 'GET',
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6Ik5MUmtOeiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzcsIm1lbWJlcklkIjo1NCwic3ViIjoiY2hob3JtcmF0aGEwMDdAZ21haWwuY29tIiwiaWF0IjoxNzE4MjY1MTQ1LCJleHAiOjE3MTkxMjkxNDV9.7fM0VSykefII6Bp2CluAKHbZ3U8tPlwZ13SUA3Uu55A',
                'Content-Type': 'application/json'
            },
        
        }
    );
    
    const data = res.json();
    // revalidateTag('user_request');
  return data;
}

export const RejectUserRequestByIdService = async (memberId) => {
    console.log("Id:",memberId)
    const res = await fetch(`${process.env.API_URL}user-requests/reject/${memberId}`,
        {
            next: { tags: ["reject_user"] },
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6Ik5MUmtOeiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzcsIm1lbWJlcklkIjo1NCwic3ViIjoiY2hob3JtcmF0aGEwMDdAZ21haWwuY29tIiwiaWF0IjoxNzE4MjY1MTQ1LCJleHAiOjE3MTkxMjkxNDV9.7fM0VSykefII6Bp2CluAKHbZ3U8tPlwZ13SUA3Uu55A',
                'Content-Type': 'application/json'
            }
        }
    );
    
    const data = await res.json();
    console.log("Data:",data)
    return data;
}

export async function ApproveUserRequestByIdService(memberId){
    console.log("member id : ", memberId)
    const res = await fetch(`${process.env.API_URL}user-requests/approve/${memberId}`,
        {
            next: { tags: ["approve_user"] },
            method: "PUT",
            cache: "no-store",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6MzcsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6Ik5MUmtOeiIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6MzcsIm1lbWJlcklkIjo1NCwic3ViIjoiY2hob3JtcmF0aGEwMDdAZ21haWwuY29tIiwiaWF0IjoxNzE4MjY1MTQ1LCJleHAiOjE3MTkxMjkxNDV9.7fM0VSykefII6Bp2CluAKHbZ3U8tPlwZ13SUA3Uu55A',
                'Content-Type': 'application/json'
            }
        }
    );
    
    const data = res.json();
    return data;
}

