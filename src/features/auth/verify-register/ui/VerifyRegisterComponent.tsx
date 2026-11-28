'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { resendRegisterAction, registerVerifyAction } from "@/features/auth/verify-register/api/registerOtpAction";
import { OtpCodeForm } from "@/shared/ui/otp-code-form";

const VerifyRegisterComponent = ({ email }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingResendOTP, setIsLoadingResendOTP] = useState(false);
    const router = useRouter();

    async function handleSubmit(otp: string) {
        setIsLoading(true);
        const response = await registerVerifyAction(email, otp);
        if (response.status === "OK") {
            toast.success("OTP verified successfully!");
            router.push(`/login`);
            return;
        }
        setIsLoading(false);
        toast.error(response.detail);
    }

    async function handleResendOtp() {
        setIsLoadingResendOTP(true);
        const response = await resendRegisterAction(email);
        setIsLoadingResendOTP(false);
        if (response.status === "CREATED") {
            toast.success(response.message);
        } else {
            toast.error(response.detail);
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
export default VerifyRegisterComponent
