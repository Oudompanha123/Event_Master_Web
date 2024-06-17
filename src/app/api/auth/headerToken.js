import {getServerSession} from "next-auth";
import {authOption} from "@/app/api/auth/[...nextauth]/route";


export const headerToken = async () => {        // async function

    const session = await getServerSession(authOption);
    console.log("Token is: ", session?.user.token)
    return {
        "authorization": `Bearer ${session?.user?.token}`,
        "Content-Type": "application/json",
    };
};
