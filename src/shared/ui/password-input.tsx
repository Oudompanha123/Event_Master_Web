'use client'

import { useState, type ComponentProps } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/shared/lib/utils"
import { Input } from "@/shared/ui/kit/input"

/** Password input with a show/hide button. Takes every <input> prop, so `{...register("password")}` works. */
export function PasswordInput({ className, ...props }: Omit<ComponentProps<"input">, "type">) {
    const [visible, setVisible] = useState(false)
    const Icon = visible ? EyeOff : Eye

    return (
        <div className="relative">
            <Input type={visible ? "text" : "password"} className={cn("pr-11", className)} {...props} />
            <button
                type="button"
                onClick={() => setVisible((v) => !v)}
                aria-label={visible ? "Hide password" : "Show password"}
                aria-pressed={visible}
                className="absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-2xl text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
                <Icon className="size-5" aria-hidden="true" />
            </button>
        </div>
    )
}
