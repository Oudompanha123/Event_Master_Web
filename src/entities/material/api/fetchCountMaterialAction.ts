"use server";
import { countMaterialStatusByEventId } from "@/entities/material/api/materialService";
import { revalidateTag} from "next/cache";

async function fetchMaterialCount(id) {
const data = await countMaterialStatusByEventId(id)
  revalidateTag("materials");
  return data;
}

export default fetchMaterialCount;