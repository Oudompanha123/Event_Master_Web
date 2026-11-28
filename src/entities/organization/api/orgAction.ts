"use server";

import { getOrganizationService } from "@/entities/organization/api/org";
import { revalidateTag } from "next/cache";

export async function getOrganizationAction() {
  const data = await getOrganizationService();
  revalidateTag("organization");
  return data;
}
