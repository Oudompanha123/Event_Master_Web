"use server";
import { CreateMultipleMaterialService } from "@/entities/material/api/materialService";
import { revalidateTag } from "next/cache";

async function CreateMultipleMaterial(materialData) {
  const data = await CreateMultipleMaterialService(materialData);
  revalidateTag("materials");
  return data;
}

export default CreateMultipleMaterial;
