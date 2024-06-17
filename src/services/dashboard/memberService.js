// Get All Member
export async function getAllMemberService(){
    const res = await fetch('http://34.124.203.109:8081/api/members?offset=1&limit=8');
    // convert from json object to javascript object
    const data = res.json();
    return data;
}