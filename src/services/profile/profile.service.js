export async function getAllProfileMember(){
    const res = await fetch("http://34.124.203.109:8081/api/profiles", {
        method : "GET",
        headers: {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDksIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IjdMOXR2cSIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDksIm1lbWJlcklkIjo2Nywic3ViIjoib3Vkb21wYW5oYTQ1NkBnbWFpbC5jb20iLCJpYXQiOjE3MTgxNjY1MzEsImV4cCI6MTcxOTAzMDUzMX0.1G20Enl9Gj28K9JRaH2TV__qA3ZnnF9y0iOHhXX2VQI',
            "Content-Type" : "application/json",
        },
        cache : "no-store",
        next: { tags: ["customer"] }
    });
    const data = res.json()
    // console.log(data)
    return data;
}

export async function updateProfileMemberById(memberId, updateMemberData){
    const res = await fetch(`http://34.124.203.109:8081/api/profiles/${memberId}`, {
        method : "PUT",
        body : JSON.stringify(updateMemberData),
        headers : {
            Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDksIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IjdMOXR2cSIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDksIm1lbWJlcklkIjo2Nywic3ViIjoib3Vkb21wYW5oYTQ1NkBnbWFpbC5jb20iLCJpYXQiOjE3MTgxNjY1MzEsImV4cCI6MTcxOTAzMDUzMX0.1G20Enl9Gj28K9JRaH2TV__qA3ZnnF9y0iOHhXX2VQI',
            "Content-Type" : "application/json",
        },
    })
    const data = res.json();
    return data
}