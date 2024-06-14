import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { SidebarComponent } from "@/components/SidebarComponent";
import { NavbarComponent } from "@/components/NavbarComponent";
import { getServerSession } from "next-auth";
import SessionProvider from "../../components/SessionProvider"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description:
    "EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.",
  icons: {
    icon: "/images/event-master-logo.png",
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <SessionProvider session={session}>
          <div className="flex">
            <SidebarComponent className={`w-[13%] xl:w-[19%] 2xl:w-[17%]`} />
            <div className="w-[87%] xl:w-[81%] 2xl:w-[83%]">
              <NavbarComponent />
              <div
                data-theme="light"
                className="p-6 lg:px-14 bg-backgroundUi min-h-[92%] overflow-scroll"
              >
                {children}
              </div>
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
