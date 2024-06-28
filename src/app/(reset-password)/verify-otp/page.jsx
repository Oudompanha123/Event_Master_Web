import VerifyOTPComponent from "@/app/(reset-password)/_components/VerifyOTPComponent";

const VerifyOTPPage = ({ searchParams }) => {
    const email = searchParams.get('email')

    return (

        <div>
            <VerifyOTPComponent email={email} />
        </div>

    )
}
export default VerifyOTPPage