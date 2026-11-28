// NextAuth configuration, shared by the auth route and getServerSession() callers.
// It lives here because Next 15 only allows HTTP handlers to be exported from route files.
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService } from "@/shared/api/auth.service";

/** Body of POST /api/auth/login (AuthResponse.java). */
interface LoginResponse {
    payload?: { token: string };
    detail?: string;
}

export const authOption: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // only used to type the fields; the app has its own /login page
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(newUserInfo): Promise<User> {
                const userData = {
                    email: newUserInfo?.email,
                    password: newUserInfo?.password,
                };
                const login: LoginResponse = await loginService(userData);
                // surface the API's reason ("Wrong Email", "Wrong Password", ...) to signIn()
                if (!login?.payload) throw new Error(login?.detail || "Incorrect email or password");
                // next-auth needs an id; the email identifies the member
                return { id: userData.email, token: login.payload.token };
            },
        }),
    ],

    // secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 10 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/login",
    },

    // used to set token into cookies
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
};
