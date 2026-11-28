import { NavbarComponent } from "@/widgets/landing-header/ui/NavbarComponent";
import { FooterComponent } from "@/widgets/landing-footer/ui/FooterComponent";

// The root layout already provides <html>, <body>, the font and the toaster.
export default function PublicLayout({ children }) {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
