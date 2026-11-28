import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, MapPin } from "lucide-react"
import { AgendaComponent } from "@/entities/agenda/ui/AgendaComponent";
import { getEventById } from "@/entities/event/api/landingService"
import { getFormAction } from "@/entities/event/api/landingAction"
import { cn } from "@/shared/lib/utils"
import { formatEventDate, posterSrc } from "@/shared/lib/poster"
import { RedirectBackComponent } from "@/shared/ui/RedirectButtonComponent"
import { Badge } from "@/shared/ui/kit/badge"
import { Button } from "@/shared/ui/kit/button"
import { Card } from "@/shared/ui/kit/card"

const Page = async (props) => {
    const { id } = await props.params;
    const [data, form] = await Promise.all([getEventById(id), getFormAction(id)]);
    const event = data?.payload;
    if (!event) notFound();

    const agenda = event.agenda?.data?.agenda ?? [];
    const full = form?.status == 400;

    return (
        <div className="container">
            <RedirectBackComponent link="/" />

            <Card className="gap-0 overflow-hidden rounded-3xl border-slate-100 p-4 shadow-xs sm:p-6">
                <div className="relative aspect-video max-h-112.5 w-full overflow-hidden rounded-2xl bg-muted">
                    <Image src={posterSrc(event.poster)} alt="" fill priority sizes="(min-width: 1380px) 1350px, 100vw" className="object-cover" />
                </div>
                <div className="mt-6 space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                        <h1 className="text-2xl font-semibold lg:text-3xl">{event.eventName}</h1>
                        <Badge
                            className={cn(
                                "rounded-full px-4 py-1 text-sm",
                                event.isOpen ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800",
                            )}
                        >
                            {event.isOpen ? "Open" : "Closed"}
                        </Badge>
                    </div>
                    <p className="max-w-3xl text-sm text-muted-foreground lg:text-base">{event.description}</p>
                    <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm lg:text-base">
                        <div className="flex items-center gap-2">
                            <dt><MapPin className="size-5 text-muted-foreground" aria-hidden="true" /><span className="sr-only">Location</span></dt>
                            <dd>{event.location}</dd>
                        </div>
                        <div className="flex items-center gap-2">
                            <dt><CalendarDays className="size-5 text-muted-foreground" aria-hidden="true" /><span className="sr-only">Date</span></dt>
                            <dd>{formatEventDate(event.startDateTime)}</dd>
                        </div>
                    </dl>
                </div>
            </Card>

            <section className="space-y-6 py-8">
                <h2 className="text-xl font-semibold lg:text-2xl">Agenda</h2>
                {agenda.length ? (
                    <ol className="space-y-4">
                        {agenda.map((x, index) => (
                            <AgendaComponent
                                key={index}
                                no={index + 1}
                                startTime={x?.startTime}
                                endTime={x?.endTime}
                                title={x?.topic}
                                description={x?.description}
                                speaker={x?.speaker}
                            />
                        ))}
                    </ol>
                ) : (
                    <p className="text-sm text-muted-foreground">The agenda hasn&apos;t been published yet.</p>
                )}

                <div className="flex justify-end pt-4">
                    {!event.isOpen ? (
                        <p className="font-medium text-destructive">Registration is closed for this event.</p>
                    ) : full ? (
                        <p className="font-medium text-destructive">This event is full.</p>
                    ) : (
                        <Button asChild className="h-12 w-full rounded-full px-9 font-bold sm:w-auto">
                            <Link href={`/register/${id}`}>Join Event</Link>
                        </Button>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Page
