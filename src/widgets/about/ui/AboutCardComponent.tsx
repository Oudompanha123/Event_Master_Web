import { BellRing, Boxes, CalendarCheck, UserCheck, type LucideIcon } from "lucide-react"
import { Card } from "@/shared/ui/kit/card"

const ICONS: Record<string, LucideIcon> = { one: UserCheck, two: BellRing, three: Boxes, four: CalendarCheck }

export const AboutCardComponent = ({ title, detail, logo }: { title: string; detail: string; logo: string }) => {
    const Icon = ICONS[logo] ?? CalendarCheck
    return (
        <Card className="relative z-20 gap-4 rounded-3xl border-2 border-slate-100 p-6 shadow-none">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
            <p className="text-sm text-muted-foreground lg:text-base">{detail}</p>
        </Card>
    )
}
