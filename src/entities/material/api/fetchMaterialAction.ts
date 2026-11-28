"use server";
import { getMaterialByEventId } from "@/entities/material/api/materialService";

async function fetchMaterialData(id) {
  const data = await getMaterialByEventId(id);
  return data;
}

export default fetchMaterialData;
