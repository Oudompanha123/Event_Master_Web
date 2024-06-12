import {getServerSession} from "next-auth";
import {authOption} from "@/app/api/auth/[...nextauth]/route";


export const headerToken = async () => {

    const session = await getServerSession(authOption);
    console.log('session : ',session)
    return {
        authorization: `Bearer ${session?.user?.token}`,
        "Content-Type": "application/json",
    };
};
