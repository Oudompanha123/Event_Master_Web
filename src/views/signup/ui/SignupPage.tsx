import SignupComponent from "@/features/auth/signup/ui/SignupComponent";
import { AuthSplitLayout } from "@/widgets/auth-layout";

// registration itself happens in SignupComponent
const SignUpPage = () => (
    <AuthSplitLayout
        title="Register New Account"
        subtitle="Create a new account to access our application."
        background="/icons/signup.svg"
        illustration="/icons/signup-amico.svg"
        backHref="/login"
    >
        <SignupComponent />
    </AuthSplitLayout>
);

export default SignUpPage;
