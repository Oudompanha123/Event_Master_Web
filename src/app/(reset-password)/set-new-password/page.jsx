import SetNewPasswordComponent from "@/app/(reset-password)/_components/SetNewPasswordComponent";

const SetNewPasswordPage = ({ searchParams }) => {
    const email = searchParams.get('email')
    const otp = searchParams.get('otp')
    return (

        <div>
            <SetNewPasswordComponent email={email} otp={otp} />
        </div>

    )
}

export default SetNewPasswordPage