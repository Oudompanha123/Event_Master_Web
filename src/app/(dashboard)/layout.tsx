import DashboardShell from "@/widgets/dashboard-shell/ui/DashboardShell";
import { getServerSession } from "next-auth";
import SessionProvider from "@/app/_providers/SessionProvider";
import { Knock } from "@knocklabs/node";
import { authOption } from "@/shared/config/auth";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  description:
    "EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.",
  icons: {
    icon: "/images/event-master-2.png",
  },
};

export default async function DashboardLayout({ children }) {
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

  // The root layout already provides <html>, <body> and the font. react-toastify stays here until
  // the dashboard features move to Sonner.
  return (
    <>
      <ToastContainer autoClose={2000} />
      <SessionProvider session={session}>
        <DashboardShell>{children}</DashboardShell>
      </SessionProvider>
    </>
  );
}
