import type { ReactNode } from "react"
import { Field, FieldError, FieldLabel } from "@/shared/ui/kit/field"

type FormFieldProps = {
    id: string
    label: ReactNode
    required?: boolean
    /** validation message; also turns the field red */
    error?: string
    className?: string
    children: ReactNode
}

/** Label + control + error message. Give the control `id={id}` and `aria-invalid={!!error}`. */
export function FormField({ id, label, required, error, className, children }: FormFieldProps) {
    return (
        <Field data-invalid={error ? true : undefined} className={className ? `gap-2 ${className}` : "gap-2"}>
            <FieldLabel htmlFor={id} className="gap-1 text-primary-text">
                {label}
                {required && <span className="text-destructive" aria-hidden="true">*</span>}
            </FieldLabel>
            {children}
            <FieldError>{error}</FieldError>
        </Field>
    )
}

/** Input sizing shared by the auth forms (taller and rounder than the kit default). */
export const authInputClass = "h-12 rounded-2xl px-4 bg-white"
