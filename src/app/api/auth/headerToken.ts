import {getServerSession} from "next-auth";
import {authOption} from "@/lib/auth";


export const headerToken = async () => {        // async function

    const session = await getServerSession(authOption);
    return {
        "Authorization": `Bearer ${session?.user?.token}`,
        "Content-Type": "application/json",
    };
};
