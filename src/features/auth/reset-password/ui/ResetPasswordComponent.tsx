'use client'

import type { ReactNode } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Check, KeyRound, LockKeyhole, ShieldQuestion, type LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/kit/button";

const STEPS: { path: string; label: string; icon: LucideIcon }[] = [
    { path: "/forgot-password", label: "Forgot password", icon: ShieldQuestion },
    { path: "/verify-otp", label: "Verify OTP", icon: LockKeyhole },
    { path: "/set-new-password", label: "New password", icon: KeyRound },
    { path: "/verify", label: "Success", icon: Check },
];

/** Card shared by the reset-password steps: back button, progress stepper, then the step itself. */
const ResetPasswordComponent = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    const current = STEPS.findIndex((s) => s.path === pathname);

    return (
        <main className="flex min-h-dvh items-center justify-center bg-primary-purple p-4 sm:p-8">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-lg">
                {/* the SVG draws its own card ~9px inside its canvas: overhang so that edge is clipped */}
                <div aria-hidden="true" className="pointer-events-none absolute -inset-2">
                    <Image
                        src="/images/bg-forgotpw.svg"
                        alt=""
                        fill
                        sizes="(min-width: 768px) 768px, 100vw"
                        className="object-cover object-left-top"
                    />
                </div>

                <div className="relative flex min-h-[560px] flex-col px-5 pt-6 pb-12 sm:px-10 sm:pt-8">
                    <Button
                        type="button"
                        size="icon-lg"
                        onClick={() => router.back()}
                        aria-label="Go back"
                        className="rounded-full bg-violet-400 hover:bg-purple-text-head"
                    >
                        <ArrowLeft className="size-5" aria-hidden="true" />
                    </Button>

                    <ol aria-label="Reset password progress" className="mx-auto mt-4 grid w-full max-w-xl grid-cols-4">
                        {STEPS.map(({ path, label, icon: Icon }, i) => {
                            const reached = i <= current;
                            return (
                                <li
                                    key={path}
                                    aria-current={i === current ? "step" : undefined}
                                    className="relative flex flex-col items-center gap-2 text-center"
                                >
                                    {/* connector to the previous step */}
                                    {i > 0 && (
                                        <span
                                            aria-hidden="true"
                                            className={cn(
                                                "absolute top-4 right-1/2 h-0.5 w-full -translate-y-1/2 sm:top-5",
                                                reached ? "bg-purple" : "bg-gray-200",
                                            )}
                                        />
                                    )}
                                    <span
                                        className={cn(
                                            "relative flex size-8 items-center justify-center rounded-full sm:size-10",
                                            reached ? "bg-purple text-white" : "bg-gray-200 text-gray-600",
                                        )}
                                    >
                                        <Icon className="size-4 sm:size-5" aria-hidden="true" />
                                    </span>
                                    <span className={cn("text-[11px] leading-tight sm:text-sm", i === current ? "font-medium text-purple-text" : "text-gray-600")}>
                                        {label}
                                    </span>
                                </li>
                            );
                        })}
                    </ol>

                    <div className="mx-auto mt-10 flex w-full max-w-md flex-1 flex-col sm:mt-12">{children}</div>
                </div>
            </div>
        </main>
    );
};

export default ResetPasswordComponent
