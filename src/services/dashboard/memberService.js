"use server";
import { headerToken } from "@/app/api/auth/headerToken";

export async function getAllMemberService(page) {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.API_URL}members?offset=${page ? page : 1}&limit=8`,
    {
      next: { tags: ["member"] },
      method: "GET",
      cache: "no-store",
      headers: header,
    }
  );
  const data = await res.json();
  console.log("data from api:", data);
  return data;
}

export async function getAllMemberForMaterialCreateService(page) {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.API_URL}members?offset=${page ? page : 1}&limit=1000`,
    {
      next: { tags: ["get_member"] },
      method: "GET",
      cache: "no-store",
      headers: header,
    }
  );
  const data = await res.json();
  return data;
}

export async function deleteMemberByIdService(memberId) {
  const header = await headerToken();
  const res = await fetch(`${process.env.API_URL}members/${memberId}`, {
    next: { tags: ["member"] },
    method: "DELETE",
    cache: "no-store",
    headers: header,
  });
  const data = await res.json();
  return data;
}

export async function updateMemberService(memberId, role) {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.API_URL}members/${memberId}?role=${role}`,
    {
      next: { tags: ["member"] },
      method: "PUT",
      cache: "no-store",
      headers: header,
    }
  );
  const data = await res.json();
  return data;
}

export async function searchMemberService(name, page) {
  const header = await headerToken();
  const res = await fetch(
    `${process.env.API_URL}members/search?memberName=${name}&offset=${
      page ? page : 1
    }&limit=8`,
    { next: { tags: ["member"] }, method: "GET", headers: header }
  );
  const data = await res.json();
  return data;
}
