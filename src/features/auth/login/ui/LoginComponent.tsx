"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/kit/card";
import { FieldGroup } from "@/shared/ui/kit/field";
import { Input } from "@/shared/ui/kit/input";
import { FormField, authInputClass } from "@/shared/ui/form-field";
import { PasswordInput } from "@/shared/ui/password-input";

const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const LoginComponent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: { email: "", password: "" },
        mode: "onChange",
    });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const res = await signIn("credentials", { redirect: false, ...data });
        if (res?.ok) {
            toast.success("Login successfully");
            // /login and /overview live under different layouts, so do a
            // full page load instead of a client-side transition between them.
            window.location.assign("/overview");
        } else {
            setLoading(false);
            toast.error(res?.error && res.error !== "CredentialsSignin" ? res.error : "Incorrect! Please try again");
        }
    };

    return (
        <Card className="w-full max-w-md gap-8 rounded-[32px] border-0 py-8 shadow-xl sm:rounded-[40px] sm:py-10">
            <CardHeader className="gap-3 px-6 text-center sm:px-10">
                <CardTitle className="text-3xl font-bold md:text-4xl">Login</CardTitle>
                <CardDescription className="text-base">Welcome back! Please enter your information</CardDescription>
            </CardHeader>

            <CardContent className="px-6 sm:px-10">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FieldGroup className="gap-5">
                        <FormField id="email" label="Email" required error={errors.email?.message}>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Enter your email"
                                aria-invalid={!!errors.email}
                                className={authInputClass}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: EMAIL, message: "Enter a valid email address" },
                                })}
                            />
                        </FormField>

                        <FormField id="password" label="Password" required error={errors.password?.message}>
                            <PasswordInput
                                id="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                aria-invalid={!!errors.password}
                                className={authInputClass}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password requires at least 8 characters" },
                                })}
                            />
                        </FormField>
                    </FieldGroup>

                    <div className="mt-3 flex justify-end">
                        <Link href="/forgot-password" className="text-sm font-medium text-purple-text hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        id="login"
                        disabled={!isValid || loading}
                        className="mt-8 h-12 w-full rounded-full shadow-md shadow-primary/30"
                    >
                        {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
                        Login
                    </Button>

                    <p className="mt-6 text-center text-primary-text">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="font-medium text-purple-text hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </CardContent>
        </Card>
    );
};

export default LoginComponent;
