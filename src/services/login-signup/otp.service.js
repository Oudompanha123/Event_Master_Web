'use server';

export const verifyOTP = async (otp, email) => {
    const res = await fetch(`http://34.124.203.109:8081/api/auth/verify?otp=${otp}&email=${encodeURIComponent(email)}`, {
        method: 'PUT',
        headers: {
            'accept': '*/*'
        }
    });
    const data = await res.json();
    return data.payload;
};
verifyOTP('otp', 'email');

