'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { getOrganizationDetails } from "@/entities/session/api/org.service";
import signupAction from "@/features/auth/signup/api/signupAction";
import { registerUserAction } from "@/features/auth/signup/api/registerUserAction";
import { Button } from "@/shared/ui/kit/button";
import { Card, CardContent } from "@/shared/ui/kit/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/shared/ui/kit/dialog";
import { Input } from "@/shared/ui/kit/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/kit/tabs";
import { FormField, authInputClass } from "@/shared/ui/form-field";
import { PasswordInput } from "@/shared/ui/password-input";

const EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const initialData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    organizationCode: '',
};

type Role = 'admin' | 'user';

const SignupComponent = () => {
    const [role, setRole] = useState<Role>('user');
    const isAdminSelected = role === 'admin';
    const [orgDetails, setOrgDetails] = useState(null);
    const [orgDialogOpen, setOrgDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm({
        mode: 'onChange',
        defaultValues: initialData,
    });

    const changeRole = (value: string) => {
        setRole(value as Role);
        reset(initialData);
    };

    const router = useRouter();
    const verifyHref = `/verify-register?email=${encodeURIComponent(watch('email'))}`;

    const onSubmit = async (data) => {
        setLoading(true);

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match. Please try again.");
            setLoading(false);
            return;
        }

        const register = data?.organizationCode ? registerUserAction : signupAction;

        const response = await register(data);

        // the actions return either the submitted user or { error }
        if ("error" in response) {
            toast.error(response.error.message);
            setLoading(false);
            return;
        }

        if (!isAdminSelected) {
            const orgData = await getOrganizationDetails(data.organizationCode);
            setOrgDetails(orgData);
            setOrgDialogOpen(true);
        } else {
            router.push(`/verify-register?email=${encodeURIComponent(data.email)}`);
        }

        setLoading(false);
    };

    return (
        <Card className="w-full max-w-2xl rounded-[32px] border-0 py-8 shadow-xl sm:rounded-[40px] sm:py-10">
            <CardContent className="px-5 sm:px-10">
                <Tabs value={role} onValueChange={changeRole} className="gap-6">
                    <TabsList aria-label="Account type" className="mx-auto h-12! w-full max-w-xs rounded-full border bg-white p-1 lg:mx-0">
                        {(['admin', 'user'] as const).map((r) => (
                            <TabsTrigger
                                key={r}
                                value={r}
                                id={`${r}-button`}
                                className="h-full rounded-full text-sm font-medium tracking-wide text-primary-text uppercase data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md"
                            >
                                {r}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <TabsContent value={role}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField id="name" label="Full Name" required error={errors.name?.message}>
                                    <Input
                                        id="name"
                                        autoComplete="name"
                                        placeholder="Enter your full name"
                                        aria-invalid={!!errors.name}
                                        className={authInputClass}
                                        {...register('name', { required: 'Full Name is required' })}
                                    />
                                </FormField>

                                <FormField id="email" label="Email" required error={errors.email?.message}>
                                    <Input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Enter your email"
                                        aria-invalid={!!errors.email}
                                        className={authInputClass}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: { value: EMAIL, message: 'Enter a valid email address' },
                                        })}
                                    />
                                </FormField>

                                <FormField id="password" label="Password" required error={errors.password?.message}>
                                    <PasswordInput
                                        id="password"
                                        autoComplete="new-password"
                                        placeholder="Enter your password"
                                        aria-invalid={!!errors.password}
                                        className={authInputClass}
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: { value: 8, message: 'Password requires at least 8 characters' },
                                        })}
                                    />
                                </FormField>

                                <FormField id="confirm-password" label="Confirm Password" required error={errors.confirmPassword?.message}>
                                    <PasswordInput
                                        id="confirm-password"
                                        autoComplete="new-password"
                                        placeholder="Confirm your password"
                                        aria-invalid={!!errors.confirmPassword}
                                        className={authInputClass}
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password is required',
                                            validate: (value) => value === watch('password') || 'Passwords do not match',
                                        })}
                                    />
                                </FormField>

                                <FormField
                                    id="phone-number"
                                    label="Phone Number"
                                    required
                                    error={errors.phoneNumber?.message}
                                    className={isAdminSelected ? 'sm:col-span-2' : undefined}
                                >
                                    <Input
                                        id="phone-number"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="Enter your phone number"
                                        aria-invalid={!!errors.phoneNumber}
                                        className={authInputClass}
                                        {...register('phoneNumber', {
                                            required: 'Phone Number is required',
                                            ...(isAdminSelected && {
                                                pattern: {
                                                    value: /^0\d{8,}$/,
                                                    message: 'phone number must be number, start with 0, more than 8 digits',
                                                },
                                            }),
                                        })}
                                    />
                                </FormField>

                                {!isAdminSelected && (
                                    <FormField id="organization-code" label="Organization Code" required error={errors.organizationCode?.message}>
                                        <Input
                                            id="organization-code"
                                            placeholder="Enter your organization code"
                                            aria-invalid={!!errors.organizationCode}
                                            className={authInputClass}
                                            {...register('organizationCode', { required: 'Organization Code is required' })}
                                        />
                                    </FormField>
                                )}
                            </div>

                            <Button
                                type="submit"
                                id="sign-up"
                                disabled={loading}
                                className="mx-auto mt-10 flex h-12 w-full max-w-xs rounded-full shadow-md shadow-primary/30"
                            >
                                {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
                                Sign Up
                            </Button>

                            <p className="mt-6 text-center text-primary-text">
                                Already have an account?{" "}
                                <Link href="/login" className="font-medium text-purple-text hover:underline">
                                    Log In
                                </Link>
                            </p>
                        </form>
                    </TabsContent>
                </Tabs>
            </CardContent>

            <Dialog open={orgDialogOpen} onOpenChange={setOrgDialogOpen}>
                <DialogContent className="rounded-3xl sm:max-w-sm">
                    <DialogHeader className="items-center text-center sm:text-center">
                        <DialogTitle className="text-lg font-bold">Organization Profile</DialogTitle>
                        <DialogDescription>Confirm this is the organization you want to join.</DialogDescription>
                    </DialogHeader>
                    <Image className="mx-auto" src="/images/event-master-logo.png" alt="" width={111} height={111} />
                    {orgDetails && (
                        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
                            <dt className="font-medium text-muted-foreground">Organization Code</dt>
                            <dd className="font-medium break-words">{orgDetails.code}</dd>
                            <dt className="font-medium text-muted-foreground">Organization Name</dt>
                            <dd className="font-medium break-words">{orgDetails.orgName}</dd>
                            <dt className="font-medium text-muted-foreground">Address</dt>
                            <dd className="font-medium break-words">{orgDetails.address}</dd>
                        </dl>
                    )}
                    <DialogFooter className="flex-row justify-center gap-3 sm:justify-center">
                        <Button variant="outline" className="w-28 rounded-full" onClick={() => setOrgDialogOpen(false)}>
                            Cancel
                        </Button>
                        <Button asChild className="w-28 rounded-full">
                            <Link href={verifyHref}>Confirm</Link>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </Card>
    );
};

export default SignupComponent;
