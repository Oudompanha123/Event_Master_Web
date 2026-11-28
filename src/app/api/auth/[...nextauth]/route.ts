import NextAuth from "next-auth";
import { authOption } from "@/shared/config/auth";

const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
