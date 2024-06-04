import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { SidebarComponent } from "@/components/SidebarComponent";
import { NavbarComponent } from "@/components/NavbarComponent";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "Dashboard",
    description: "EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.",
    icons: {
        icon: "/images/event-master-logo.png"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={jakarta.className}>
                <div className="flex">
                    <SidebarComponent className={`w-[13%] xl:w-[19%] 2xl:w-[18%]`} />
                    <div className="w-[87%] xl:w-[81%] 2xl:w-[82%]">
                        <NavbarComponent />
                        <div data-theme="light" className="p-6 lg:px-14 bg-backgroundUi min-h-screen overflow-scroll">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
