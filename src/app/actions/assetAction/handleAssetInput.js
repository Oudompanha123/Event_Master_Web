"use server";

import { insertAssetService } from "@/services/assetService/assetService";
import { revalidateTag } from "next/cache";


//inser asset action
export async function handleAsset(assetInput) {
  const newAsset = {
    assetName: assetInput.get("assetName"),
    qty: assetInput.get("qty"),
    unit: assetInput.get("unit"),
    createdAt: assetInput.get("createdAt"),
  };
  await insertAssetService(newAsset);
  revalidateTag("asset");
}
//delete asset action