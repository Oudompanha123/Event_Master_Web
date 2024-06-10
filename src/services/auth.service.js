export const loginService = async (userInfo) => {
    const res = await fetch('http://34.124.203.109:8081/api/auth/login', {
        method: 'POST',
        headers: {
            'accept': ' */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo)
    });
    const data = await res.json();
    return data;
}
