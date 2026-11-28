'use client'

import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { forgetPasswordAction } from "@/features/auth/reset-password/api/forgetPasswordAction";
import { apiErrorMessage } from "@/features/auth/reset-password/model/apiErrorMessage";
import { Button } from "@/shared/ui/kit/button";
import { Input } from "@/shared/ui/kit/input";
import { FormField, authInputClass } from "@/shared/ui/form-field";

const ForgotPasswordComponent = () => {
    const [isLoading, setIsloading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        defaultValues: { email: "" },
        mode: "onChange"
    });

    const router = useRouter();

    const onSubmit = async (data) => {
        setIsloading(true);
        const response = await forgetPasswordAction(data.email);
        if (response.status === 'CREATED') {
            router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);
            return;
        }
        setIsloading(false);
        toast.error(apiErrorMessage(response));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
            <div className="space-y-3 text-center">
                <h1 className="text-2xl font-extrabold text-purple-text-head sm:text-3xl">Forgot Password?</h1>
                <p className="text-sm text-muted-foreground sm:text-base">Please enter your email to reset password</p>
            </div>

            <FormField id="email" label="Email" error={errors.email?.message}>
                <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    aria-invalid={!!errors.email}
                    className={authInputClass}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Enter a valid email address"
                        }
                    })}
                />
            </FormField>

            <Button type="submit" id="continue" disabled={!isValid || isLoading} className="h-12 w-full rounded-full shadow-md shadow-primary/30">
                {isLoading && <Loader2 className="animate-spin" aria-hidden="true" />}
                Continue
            </Button>
        </form>
    );
}

export default ForgotPasswordComponent;
