'use server';

export const resendRegisterOtp = async (email) => {
    const res = await fetch(`${process.env.API_URL}auth/resend?email=${email}`,
        {
            method: 'POST'
        }
    )
    const data = await res.json();
    return data;
}

export const registerVerify = async (email, otp) => {
    const res = await fetch(`${process.env.API_URL}auth/verify?otp=${otp}&email=${email}`,
        {
            method: 'PUT'
        }
    )
    const data = await res.json();
    return data;
}
