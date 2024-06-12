"use server";

import {registerService} from "@/services/login-signup/auth.service";
export default async function signupAction(formRegister) {

    const newUser = {
        adminName: formRegister.name,
        email: formRegister.email,
        password: formRegister.password,
        confirmPassword: formRegister.confirmPassword,
        phone: formRegister.phoneNumber
    };
    await registerService(newUser);
}
