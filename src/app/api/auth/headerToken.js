import {getServerSession} from "next-auth";
import {authOption} from "@/app/api/auth/[...nextauth]/route";


export const headerToken = async () => {        // async function

    const session = await getServerSession(authOption);
    console.log("Session: ", session);
    return {
        "Authorization": `Bearer ${session?.user?.token}`,
        "Content-Type": "application/json",
    };
};
