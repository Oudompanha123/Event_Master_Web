'use server'

import {loginService} from "@/shared/api/auth.service";

export const loginAction = async (userInfo) =>{
    // calling service
    const loginInfo = await loginService(userInfo);
    return loginInfo;
}

