"use server"

import {registerUserService} from "@/services/login-signup/auth.service";
import {toActionError} from "@/actions/auth/registerError";

export async function registerUserAction(formRegister) {
    const newUser = {
        userName: formRegister.name,
        phone: formRegister.phoneNumber,
        password: formRegister.password,
        confirmPassword: formRegister.confirmPassword,
        orgCode: formRegister.organizationCode,
        email: formRegister.email
    };
    try {
        const data = await registerUserService(newUser);
        const error = toActionError(data);
        if (error) return {error};
    } catch (e) {
        console.error("user register failed:", e);
        return {error: {message: "Cannot reach the server. Please try again later."}};
    }
    return newUser;
}
