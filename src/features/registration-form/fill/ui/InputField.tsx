import { Input } from "@/shared/ui/kit/input"
import { Label } from "@/shared/ui/kit/label"

// Form builder types that aren't real <input> types (e.g. "gender") fall back to text.
const INPUT_TYPES = new Set(["text", "email", "tel", "number", "date", "time", "url", "datetime-local"])

const AUTOCOMPLETE: Record<string, string> = { email: "email", tel: "tel" }

/** One field of an event's registration form. Submitted by name through FormData. */
export const InputField = ({ type, name }: { type: string; name: string }) => {
    const id = `field-${name.toLowerCase().replace(/\W+/g, "-")}`
    const inputType = INPUT_TYPES.has(type) ? type : "text"
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="font-semibold text-primary-text">{name}</Label>
            <Input
                id={id}
                name={name}
                type={inputType}
                autoComplete={AUTOCOMPLETE[inputType]}
                placeholder={`Please input your ${name.toLowerCase()}`}
                className="h-12 rounded-2xl bg-white px-4"
            />
        </div>
    )
}
