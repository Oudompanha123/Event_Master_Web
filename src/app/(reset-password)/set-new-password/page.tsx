import SetNewPasswordComponent from "@/app/(reset-password)/_components/SetNewPasswordComponent";

const SetNewPasswordPage = async (props) => {
  const searchParams = await props.searchParams;
    const email = searchParams?.email ?? ''
    const otp = searchParams?.otp ?? ''
    return (

        <div>
            <SetNewPasswordComponent email={email} otp={otp} />
        </div>

    )
}

export default SetNewPasswordPage