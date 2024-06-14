"use server";

import {
  insertAssetService,
  searchAssetByName,
  updateAssetService,
} from "@/services/assetService/assetService";
import { revalidateTag } from "next/cache";
import { deleteAssetService } from "@/services/assetService/assetService";
import { exportTraceState } from "next/dist/trace";
//insert asset
export async function handleAsset(assetInput) {
  // console.log("first", assetInput);
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
  // console.log("edit ", id, newAsset);
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
  //console.log("id", id);
  await deleteAssetService(id);
  revalidateTag("asset");
}
//search
export async function handleSearchAsset(name) {
  console.log("name", name);
  await searchAssetByName(name);
  revalidateTag("asset");
}
