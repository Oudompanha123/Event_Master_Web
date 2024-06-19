export const getAllOrganizationService = async () => {
    const res = await fetch(
        "http://34.124.203.109:8081/api/profiles/organization",
        {
            cache: "no-store",
        }
    );
    const data = res.json();
    return data;
} 