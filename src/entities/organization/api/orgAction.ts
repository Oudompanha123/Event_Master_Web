"use server";

import { getOrganizationService } from "@/entities/organization/api/org";

export async function getOrganizationAction() {
  const data = await getOrganizationService();
  return data;
}
