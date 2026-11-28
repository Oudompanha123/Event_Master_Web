'use client'

import { useId, useState } from "react"
import { cn } from "@/shared/lib/utils"

/** Yes/No question of an event's registration form; submits "yes" or "no" under `name`. */
export const Boolean = ({ name }: { name: string }) => {
    const [yes, setYes] = useState(false)
    const labelId = useId()

    const option = (value: boolean, label: string) => (
        <button
            type="button"
            role="radio"
            aria-checked={yes === value}
            onClick={() => setYes(value)}
            className={cn(
                "flex-1 rounded-xl py-2 text-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-32 sm:flex-none",
                yes === value ? "bg-white shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
        >
            {label}
        </button>
    )

    return (
        <div className="space-y-2">
            <p id={labelId} className="text-sm font-semibold text-primary-text">{name}</p>
            <div role="radiogroup" aria-labelledby={labelId} className="flex w-full gap-1 rounded-2xl bg-background-ui p-1.5 sm:w-fit">
                {option(true, "Yes")}
                {option(false, "No")}
            </div>
            <input type="hidden" name={name} value={yes ? "yes" : "no"} />
        </div>
    )
}
