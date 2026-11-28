import LoginComponent from "@/features/auth/login/ui/LoginComponent";
import { AuthSplitLayout } from "@/widgets/auth-layout";

const LoginPage = () => (
    <AuthSplitLayout
        title="Welcome!"
        subtitle="Log in to manage your events with ease and efficiency."
        background="/icons/login.svg"
        illustration="/icons/login-amico.svg"
        backHref="/"
        formSide="left"
    >
        <LoginComponent />
    </AuthSplitLayout>
);

export default LoginPage;
