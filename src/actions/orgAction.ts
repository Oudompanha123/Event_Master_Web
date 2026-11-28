"use server";

import { getOrganizationService } from "@/services/profile/org";
import { revalidateTag } from "next/cache";

export async function getOrganizationAction() {
  const data = await getOrganizationService();
  revalidateTag("organization");
  return data;
}
