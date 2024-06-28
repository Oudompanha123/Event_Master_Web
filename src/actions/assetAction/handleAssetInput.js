"use server";

import {
  getAllAssetService,
  insertAssetService,
  updateAssetService,
  getAllAssetServiceNoPage,
} from "@/services/assetService/assetService";
import { revalidateTag } from "next/cache";
import { deleteAssetService } from "@/services/assetService/assetService";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { jwtDecode } from "jwt-decode";
import { getAllMember } from "@/services/notification/notificationService";
import { Knock } from "@knocklabs/node";

const knockClient = new Knock(process.env.KNOCK_SECRET_API_KEY);

//insert asset
export async function handleAsset(assetInput) {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);

  const newAsset = {
    assetName: assetInput.assetName,
    qty: assetInput.qty,
    unit: assetInput.unit,
  };
  const data = await insertAssetService(newAsset);
  revalidateTag("asset");
  const allMember = await getAllMember();
  await knockClient.notify("new-workout", {
    actor: userInfo?.sub,
    recipients: allMember.payload
      .filter((x) => x.email !== userInfo?.sub)
      .map((x) => x.email),
    data: {
      workoutText: {
        value: "has been created a new asset.",
      },
    },
  });
  return data;
}
export const getAllAssetAction = async (page) => {
  const data = await getAllAssetService(page);
  revalidateTag("overview");

  return data;
};
//update
export async function handleUpdateAsset(id, newAsset) {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  const editAsset = {
    assetName: newAsset.assetName,
    qty: newAsset.qty,
    unit: newAsset.unit,
  };
  await updateAssetService(id, editAsset);
  revalidateTag("asset");
  const allMember = await getAllMember();
  await knockClient.notify("new-workout", {
    actor: userInfo?.sub,
    recipients: allMember.payload
      .filter((x) => x.email !== userInfo?.sub)
      .map((x) => x.email),
    data: {
      workoutText: {
        value: "has been updated asset.",
      },
    },
  });
}

//handle delete asset
export async function handleDeleteAsset(id) {
  const session = await getServerSession(authOption);
  let userInfo = jwtDecode(session?.user?.token);
  await deleteAssetService(id);
  revalidateTag("asset");
  const allMember = await getAllMember();
  await knockClient.notify("new-workout", {
    actor: userInfo?.sub,
    recipients: allMember.payload
      .filter((x) => x.email !== userInfo?.sub)
      .map((x) => x.email),
    data: {
      workoutText: {
        value: "has been deleted asset.",
      },
    },
  });
}

export const getAllAssetNoPageAction = async () => {
  const data = await getAllAssetServiceNoPage();
  revalidateTag("asset");
  return data;
};
