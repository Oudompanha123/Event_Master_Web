"use server";

import {registerService} from "@/services/login-signup/auth.service";

export default async function signupAction(formRegister) {
    const newUser = {
        full_name: formRegister.full_name,
        email: formRegister.email,
        password: formRegister.password,
        confirm_password: formRegister.confirm_password,
        phone_number: formRegister.phone_number,
        role: formRegister.role
    };

    await registerService(newUser);
}