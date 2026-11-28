"use server";

import {registerService} from "@/shared/api/auth.service";
import {toActionError} from "@/features/auth/signup/model/registerError";

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
