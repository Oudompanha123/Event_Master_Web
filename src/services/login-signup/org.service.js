"use server";

export const getOrganizationDetails = async (orgCode) => {
    const res = await fetch(`http://34.124.203.109:8081/api/auth/org/${orgCode}`, {
        method: 'GET',
        headers: {
            'accept': '*/*'
        }
    });
    const data = await res.json();
    return data.payload;
};
