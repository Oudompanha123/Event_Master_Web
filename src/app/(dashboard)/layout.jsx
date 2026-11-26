import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import DashboardShell from "@/components/DashboardShell";
import { getServerSession } from "next-auth";
import SessionProvider from "../../components/SessionProvider";
import { Knock } from "@knocklabs/node";
import { authOption } from "../api/auth/[...nextauth]/route";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description:
    "EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.",
  icons: {
    icon: "/images/event-master-2.png",
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOption);
  if (!session?.user?.token) redirect('/login')

  let userInfo = jwtDecode(session?.user?.token);
  const knockClient = new Knock(
    "sk_test_hguX-GMQzOK3VFeVkAPJLbNITMjkY_mxDc0H2IO35_g"
  );
  const knockUser = await knockClient.users.identify(userInfo?.sub, {
    name: userInfo?.role,
    email: userInfo?.sub,
  });

  return (
    <html lang="en">
      <body className={jakarta.className}>
        <ToastContainer autoClose={2000} />
        <SessionProvider session={session}>
          <DashboardShell>{children}</DashboardShell>
        </SessionProvider>
      </body>
    </html>
  );
}
