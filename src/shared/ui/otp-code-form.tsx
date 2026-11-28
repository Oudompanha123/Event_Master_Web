'use client'

import { useState, type FormEvent } from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { Loader2 } from "lucide-react"
import { Button } from "@/shared/ui/kit/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/shared/ui/kit/input-otp"

const LENGTH = 4

type OtpCodeFormProps = {
    onSubmit: (otp: string) => void | Promise<void>
    onResend: () => void | Promise<void>
    submitting?: boolean
    resending?: boolean
}

/** "Enter 4 digits code" step: digits-only OTP boxes, Continue, and Resend OTP. */
export function OtpCodeForm({ onSubmit, onResend, submitting, resending }: OtpCodeFormProps) {
    const [otp, setOtp] = useState("")
    const complete = otp.length === LENGTH

    const submit = (e?: FormEvent) => {
        e?.preventDefault()
        if (complete && !submitting) onSubmit(otp)
    }

    return (
        <form onSubmit={submit} className="flex w-full flex-col items-center gap-8 text-center">
            <div className="space-y-3">
                <h1 className="text-2xl font-extrabold text-purple-text-head sm:text-3xl">Enter 4 Digits Code</h1>
                <p id="otp-help" className="text-sm text-muted-foreground sm:text-base">
                    Enter the 4 digits code that was sent to your email.
                </p>
            </div>

            <InputOTP
                maxLength={LENGTH}
                pattern={REGEXP_ONLY_DIGITS}
                inputMode="numeric"
                autoComplete="one-time-code"
                autoFocus
                value={otp}
                onChange={setOtp}
                aria-describedby="otp-help"
                aria-label="Verification code"
            >
                <InputOTPGroup className="gap-3 sm:gap-5">
                    {Array.from({ length: LENGTH }, (_, i) => (
                        <InputOTPSlot
                            key={i}
                            index={i}
                            className="size-14 rounded-2xl border border-gray-300 bg-white text-2xl font-semibold first:rounded-2xl last:rounded-2xl sm:size-16"
                        />
                    ))}
                </InputOTPGroup>
            </InputOTP>

            <div className="flex w-full max-w-sm flex-col gap-3">
                <Button type="submit" disabled={!complete || submitting} className="h-12 w-full rounded-full shadow-md shadow-primary/30">
                    {submitting && <Loader2 className="animate-spin" aria-hidden="true" />}
                    Continue
                </Button>
                <Button
                    type="button"
                    variant="link"
                    onClick={() => onResend()}
                    disabled={resending}
                    className="self-end px-0 text-blue-ui"
                >
                    {resending ? (
                        <>
                            <Loader2 className="animate-spin" aria-hidden="true" /> Sending OTP...
                        </>
                    ) : (
                        "Resend OTP"
                    )}
                </Button>
            </div>
        </form>
    )
}
