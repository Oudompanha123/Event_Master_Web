"use server";

export const loginService = async (userInfo) => {
    const res = await fetch(`${process.env.API_URL}auth/login`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    return data;
}

export const registerService = async (userInfo) => {
    const res1 = await fetch(`${process.env.API_URL}auth/admin-register`, {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(userInfo)
    });
    const data = await res1.json();
    return data;

}


export const registerUserService = async (userInfo) => {
    const res2 = await fetch(`${process.env.API_URL}auth/user-register`, {
        method: 'POST',
        headers:  {
            'accept': '*/*',
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(userInfo)
    });
    const data = await res2.json();
    return data;
}