export async function getAllEventService (){
    const res = await fetch('http://34.124.203.109:8081/api/events?offset=1&limit=15');
    const data = res.json();
    return data;
}

export async function getEventByIdService(id){
    const res = await fetch(`http://34.124.203.109:8081/api/events/${id}`);
    //convert from json to object to javascript objrct
    const data = res.json();
    return data;

}

