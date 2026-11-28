import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from "react-toastify";
import { TooltipProvider } from "@/shared/ui/kit/tooltip";
import { Toaster } from "@/shared/ui/kit/sonner";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "EventMaster",
  description:
    "EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.",
  icons: {
    icon: "/images/event-master-2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <NextTopLoader
          color="#7939EF"
          initialPosition={0.08}
          crawlSpeed={300}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #7939EF,0 0 8px #7939EF"

        />
        {/* shadcn/ui: tooltips need one provider; sonner toasts (react-toastify stays until it is replaced) */}
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster position="top-center" richColors />

      </body>
    </html>
  );
}
