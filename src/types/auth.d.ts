// Types for the login session and the JWT issued by the Spring API.
import "next-auth";
import "next-auth/jwt";
import "jwt-decode";

/** Roles defined by the API (com.example.final_project.model.constant.Roles). */
export type Role = "ROLE_ADMIN" | "ROLE_SUB_ADMIN" | "ROLE_USER";

/** Organization embedded in the API token (model/Organization.java). */
export interface TokenOrganization {
  orgId: number;
  orgName: string;
  code?: string;
  address?: string;
  logo?: string;
}

declare module "jwt-decode" {
  // claims the API adds to its token (jwt/JwtService.java)
  interface JwtPayload {
    memberId?: number;
    orgId?: number;
    role?: Role;
    organization?: TokenOrganization;
  }
}

declare module "next-auth" {
  // the login callback stores the API's JWT on the session user
  interface User {
    token?: string;
  }
  interface Session {
    user: {
      token?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token?: string;
  }
}
