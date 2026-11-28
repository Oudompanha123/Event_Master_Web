"use server";
import { countMaterialStatusByEventId } from "@/entities/material/api/materialService";

async function fetchMaterialCount(id) {
const data = await countMaterialStatusByEventId(id)
  return data;
}

export default fetchMaterialCount;