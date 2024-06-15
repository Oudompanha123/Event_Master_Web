"use server";

import {
  insertAssetService,
  updateAssetService,
} from "@/services/assetService/assetService";
import { revalidateTag } from "next/cache";
import { deleteAssetService } from "@/services/assetService/assetService";

//insert asset
export async function handleAsset(assetInput) {
  const newAsset = {
    assetName: assetInput.assetName,
    qty: assetInput.qty,
    unit: assetInput.unit,
  };
  await insertAssetService(newAsset);
  revalidateTag("asset");
}
//update
export async function handleUpdateAsset(id, newAsset) {
  const editAsset = {
    assetName: newAsset.assetName,
    qty: newAsset.qty,
    unit: newAsset.unit,
  };
  await updateAssetService(id, editAsset);
  revalidateTag("asset");
}

//handle delete asset
export async function handleDeleteAsset(id) {
  await deleteAssetService(id);
  revalidateTag("asset");
}
