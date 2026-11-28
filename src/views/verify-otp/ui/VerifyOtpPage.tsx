import VerifyOTPComponent from "@/features/auth/reset-password/ui/VerifyOTPComponent";

const VerifyOTPPage = async (props) => {
  const searchParams = await props.searchParams;
    const email = searchParams?.email ?? ''

    return (

        <div>
            <VerifyOTPComponent email={email} />
        </div>

    )
}
export default VerifyOTPPage