import ResetPasswordComponent from "@/features/auth/reset-password/ui/ResetPasswordComponent";

// The root layout already provides <html>, <body>, the font and the toaster.
export default function ResetPasswordLayout({ children }) {
    return <ResetPasswordComponent>{children}</ResetPasswordComponent>;
}
