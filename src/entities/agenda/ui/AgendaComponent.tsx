import { Clock, Mic } from "lucide-react"
import { cn } from "@/shared/lib/utils"

/** One agenda slot on the public event page. Odd/even slots alternate their accent colour. */
export const AgendaComponent = ({ no, startTime, endTime, title, description, speaker }) => (
    <li className="flex gap-4 rounded-3xl border py-5 pr-5 pl-4 odd:bg-softwhite-ui even:bg-white sm:pr-8">
        <span aria-hidden="true" className={cn("w-0.5 shrink-0 rounded-full", no % 2 !== 0 ? "bg-green-500" : "bg-purple-text")} />
        <div className="min-w-0 flex-1 space-y-3">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground lg:text-base">
                <Clock className="size-4" aria-hidden="true" />
                {startTime} - {endTime}
            </p>
            <h3 className="font-medium lg:text-xl">{title}</h3>
            {description && (
                <div className="space-y-2 border-t pt-3">
                    <p className="max-w-2xl text-sm text-muted-foreground lg:text-base">{description}</p>
                    {speaker && (
                        <p className="flex items-center gap-1.5 text-sm lg:text-base">
                            <Mic className="size-4 text-muted-foreground" aria-hidden="true" />
                            <span className="font-medium">Speaker:</span> {speaker}
                        </p>
                    )}
                </div>
            )}
        </div>
    </li>
)
