import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin } from "lucide-react"
import orgLogo from "../../../../public/images/event-master-logo.png"
import { cn } from "@/shared/lib/utils"
import { formatEventDate, posterSrc } from "@/shared/lib/poster"
import { Badge } from "@/shared/ui/kit/badge"
import { Button } from "@/shared/ui/kit/button"
import { Card } from "@/shared/ui/kit/card"

export type EventCardProps = {
    id: number | string
    title: string
    description?: string
    location?: string
    company?: string
    date?: string
    poster?: string | null
    /** registration open */
    status?: boolean
    /** attendee limit reached */
    full?: boolean
}

/** Public event card (landing page, category page, search results). Presentational: works on server and client. */
export const EventCard = ({ id, title, description, location, company, date, poster, status, full }: EventCardProps) => (
    <Card className="gap-0 overflow-hidden rounded-3xl border-0 py-0 shadow-md transition-shadow hover:shadow-lg">
        <div className="relative aspect-16/10 w-full bg-muted">
            <Image src={posterSrc(poster)} alt="" fill sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            <Badge
                className={cn(
                    "absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow-sm",
                    status ? "text-blue-ui" : "text-red-ui",
                )}
            >
                {status ? "Open" : "Closed"}
            </Badge>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
            <div className="flex items-center gap-3">
                <Image src={orgLogo} height={36} width={36} alt="" className="rounded-full" />
                <p className="truncate text-sm font-medium">{company}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex min-w-0 items-center gap-1.5">
                    <MapPin className="size-4 shrink-0" aria-hidden="true" />
                    <span className="truncate">{location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                    {formatEventDate(date)}
                </span>
            </div>

            <div className="space-y-2">
                <h3 className="line-clamp-1 text-lg font-bold lg:text-xl">{title}</h3>
                <p className="line-clamp-2 min-h-[2lh] text-sm text-muted-foreground lg:text-base">{description}</p>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button asChild variant="outline" className="rounded-full border-purple-text px-5 text-purple-text hover:bg-secondary hover:text-purple-text">
                    <Link href={`/detail/${id}`}>View Detail</Link>
                </Button>
                {status &&
                    (full ? (
                        <p className="text-sm font-medium text-destructive">Attendee full</p>
                    ) : (
                        <Button asChild className="rounded-full px-5">
                            <Link href={`/register/${id}`}>Join Event</Link>
                        </Button>
                    ))}
            </div>
        </div>
    </Card>
)
