"use server";

import {registerService} from "@/services/login-signup/auth.service";
import {toActionError} from "@/actions/auth/registerError";

export default async function signupAction(formRegister) {
    const newUser = {
        adminName: formRegister.name,
        phone: formRegister.phoneNumber,
        password: formRegister.password,
        confirmPassword: formRegister.confirmPassword,
        email: formRegister.email
    };
    try {
        const data = await registerService(newUser);
        const error = toActionError(data);
        if (error) return {error};
    } catch (e) {
        console.error("admin register failed:", e);
        return {error: {message: "Cannot reach the server. Please try again later."}};
    }
    return newUser;
}
