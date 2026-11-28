'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { changePasswordAction } from "@/features/auth/reset-password/api/forgetPasswordAction";
import { apiErrorMessage } from "@/features/auth/reset-password/model/apiErrorMessage";
import { Button } from "@/shared/ui/kit/button";
import { FieldGroup } from "@/shared/ui/kit/field";
import { FormField, authInputClass } from "@/shared/ui/form-field";
import { PasswordInput } from "@/shared/ui/password-input";

const SetNewPasswordComponent = ({ email, otp }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
    } = useForm({
        mode: 'onChange',
        defaultValues: { password: "", confirmPassword: "" },
    });

    const [isLoading, setIsloading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        setIsloading(true);
        try {
            const response = await changePasswordAction(email, otp, data);
            if (response?.status === 'OK') {
                router.push('/verify');
                return;
            }
            toast.error(apiErrorMessage(response));
        } catch (e) {
            toast.error("Cannot reach the server. Please try again.");
        }
        setIsloading(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
            <h1 className="text-center text-2xl font-extrabold text-purple-text-head sm:text-3xl">Set New Password</h1>

            <FieldGroup className="gap-5">
                <FormField id="password" label="Password" error={errors.password?.message}>
                    <PasswordInput
                        id="password"
                        autoComplete="new-password"
                        placeholder="Enter your password"
                        aria-invalid={!!errors.password}
                        className={authInputClass}
                        {...register("password", {
                            required: "Password is required",
                            pattern: {
                                value: /^[A-Za-z0-9]*$/,
                                message: "Password must contain only numbers and characters"
                            },
                            minLength: {
                                value: 8,
                                message: "Password requires at least 8 characters"
                            }
                        })}
                    />
                </FormField>

                <FormField id="confirm-password" label="Confirm Password" error={errors.confirmPassword?.message}>
                    <PasswordInput
                        id="confirm-password"
                        autoComplete="new-password"
                        placeholder="Confirm your password"
                        aria-invalid={!!errors.confirmPassword}
                        className={authInputClass}
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: value => value === watch('password') || "Passwords do not match"
                        })}
                    />
                </FormField>
            </FieldGroup>

            <Button type="submit" id="continue" disabled={!isValid || isLoading} className="h-12 w-full rounded-full shadow-md shadow-primary/30">
                {isLoading && <Loader2 className="animate-spin" aria-hidden="true" />}
                Continue
            </Button>
        </form>
    );
};

export default SetNewPasswordComponent;
