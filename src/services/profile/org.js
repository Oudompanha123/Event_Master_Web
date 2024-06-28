'use server'

import { headerToken } from "@/app/api/auth/headerToken";


export const updateOrganization = async (id, organizationData) => {
  const header = await headerToken();
  const response = await fetch(
    `${process.env.API_URL}profiles/update-organization/${id}`,
    {
      method: "PUT",
      headers: header,
      body: JSON.stringify(organizationData),
    }
  );
  const test = await response.json();
  return test;
};


// export const getOrganizationService = async () => {
//   const header = await headerToken();
//   try {
//     const response = await fetch(
//       `${process.env.API_URL}profiles/organization`,
//       {
//         method: "GET",
//         cache: "no-store",
//         headers: header,
//       }
//     );
//     if (!response.ok) {
//       throw new Error(`Failed to fetch organization data: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching organization data:", error);
//     throw error;
//   }
// };

