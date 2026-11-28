'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { forgetPasswordAction, verifyOtpAction } from "@/features/auth/reset-password/api/forgetPasswordAction";
import { apiErrorMessage } from "@/features/auth/reset-password/model/apiErrorMessage";
import { OtpCodeForm } from "@/shared/ui/otp-code-form";

const VerifyOTPComponent = ({ email }) => {
    const [isLoading, setIsloading] = useState(false);
    const [isLoadingResendOTP, setIsloadingResendOTP] = useState(false);
    const router = useRouter();

    async function handleSubmit(otp: string) {
        setIsloading(true);
        const response = await verifyOtpAction(email, otp);
        if (response.status === 'OK') {
            router.push(`/set-new-password?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`);
            return;
        }
        setIsloading(false);
        toast.error(apiErrorMessage(response));
    }

    async function handleResendOtp() {
        setIsloadingResendOTP(true);
        const response = await forgetPasswordAction(email);
        setIsloadingResendOTP(false);
        if (response.status === 'CREATED') {
            toast.success(response.message);
        } else {
            toast.error(apiErrorMessage(response));
        }
    }

    return (
        <OtpCodeForm
            onSubmit={handleSubmit}
            onResend={handleResendOtp}
            submitting={isLoading}
            resending={isLoadingResendOTP}
        />
    )
}
export default VerifyOTPComponent
