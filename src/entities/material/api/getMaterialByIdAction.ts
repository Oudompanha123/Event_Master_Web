"use server";
import { getMaterialById } from "@/entities/material/api/materialService";

async function getMaterialByIdAction(id) {
  const data = await getMaterialById(id)
  return data;
  }
  export default getMaterialByIdAction;