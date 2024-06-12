'use server';

export const loginService = async (userInfo) => {
    const res = await fetch('http://34.124.203.109:8081/api/auth/login', {
        method: 'POST',
        headers: {
            'accept': ' */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    return data;
    // if (data.token) {
    //     return data
    // } else {
    //     return null
    // }
}

export const registerService = async (userInfo) => {
    console.log("Admin : " ,userInfo)
    const res = await fetch('http://34.124.203.109:8081/api/auth/admin-register', {
        method: 'POST',
        headers: {
            'accept': ' */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    // return data;
    console.log(data)
}
