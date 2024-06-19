'use server';
import { CreateMultipleMaterialService } from "@/services/dashboard/materialService";
import { revalidateTag } from "next/cache";

async function CreateMultipleMaterial(materialData) {
  // console.log("data in action is",materialData)
  revalidateTag('material');
  const data = await CreateMultipleMaterialService(materialData);
  return data;
}

export default CreateMultipleMaterial;
