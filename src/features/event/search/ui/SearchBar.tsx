'use client'

import { Fragment, useEffect, useState, type FormEvent } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Loader2, Search } from "lucide-react"
import { callingServiceAction } from "@/features/event/search/api/findEventAction"
import { SelectDropdownLanding } from "@/features/event/search/ui/SelectDropDownLanding"
import { SelectStatusLanding } from "@/features/event/search/ui/SelectStatusLanding"
import { EventCard } from "@/entities/event"
import { TitleComponent } from "@/shared/ui/TitleComponent"
import { Button } from "@/shared/ui/kit/button"
import { Input } from "@/shared/ui/kit/input"
import { Label } from "@/shared/ui/kit/label"

const fieldClass = "h-12 rounded-full bg-white px-4"

/** Landing-page search: filters + results. Results replace the category lists (`?search=true`). */
export const SearchBar = () => {
    const [findData, setFindData] = useState<any>();
    const [search, setSearch] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [dropDownValue, setDropDownValue] = useState('');
    const [statusValue, setStatusValue] = useState<boolean | ''>('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    const fetchData = async (event: FormEvent) => {
        event.preventDefault();
        if (search === '' && startTime === '' && endTime === '' && statusValue === '' && dropDownValue === '') {
            setFindData(undefined);
            router.push(`/`, { scroll: false });
            return;
        }
        setIsLoading(true)
        const data = await callingServiceAction({
            eventName: search,
            startDateTime: `${startTime}T12:00:00`,
            endDateTime: `${endTime}T12:00:00`,
            status: statusValue,
            categoryName: dropDownValue,
        });
        router.replace('/?search=true', { scroll: false });
        setFindData(data);
        setIsLoading(false)
    };

    // clearing every filter brings the category lists back
    useEffect(() => {
        const allEmpty = [search, startTime, endTime, statusValue, dropDownValue].every((v) => v === '');
        if (allEmpty) {
            router.push('/', { scroll: false });
            setFindData(undefined)
        }
    }, [search, startTime, endTime, statusValue, dropDownValue]);

    const groups = Array.isArray(findData?.payload) ? findData.payload : [];

    return (
        <div>
            <form onSubmit={fetchData} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                    <SelectDropdownLanding func={setDropDownValue} />
                    <SelectStatusLanding func={setStatusValue} />
                    <div className="space-y-2">
                        <Label htmlFor="startDate" className="font-semibold text-primary-text">Start Date</Label>
                        <Input id="startDate" name="startDate" type="date" value={startTime} onChange={(e) => setStartTime(e.target.value)} className={fieldClass} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="endDate" className="font-semibold text-primary-text">End Date</Label>
                        <Input id="endDate" name="endDate" type="date" value={endTime} onChange={(e) => setEndTime(e.target.value)} className={fieldClass} />
                    </div>
                </div>

                <div className="flex gap-3 sm:gap-5">
                    <div className="relative min-w-0 flex-1">
                        <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                        <Input
                            id="search"
                            name="search"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search events..."
                            aria-label="Search events by name"
                            className={`${fieldClass} pl-11`}
                        />
                    </div>
                    <Button type="submit" disabled={isLoading} className="h-12 shrink-0 rounded-full px-6 sm:w-40">
                        {isLoading ? <Loader2 className="animate-spin" aria-hidden="true" /> : <Search className="sm:hidden" aria-hidden="true" />}
                        <span className="sr-only sm:not-sr-only">Search</span>
                    </Button>
                </div>
            </form>

            {/* results */}
            <section aria-live="polite">
                {groups.map((group) => (
                    <Fragment key={group.cateName}>
                        <div className="mt-10">
                            <TitleComponent title={group.cateName} />
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                            {group.events?.map((x) => (
                                <EventCard
                                    key={x.eventId}
                                    id={x.eventId}
                                    poster={x.poster}
                                    title={x.eventName}
                                    description={x.description}
                                    location={x.address}
                                    company={x.orgName}
                                    date={x.startDate}
                                    status={x.isOpen}
                                />
                            ))}
                        </div>
                    </Fragment>
                ))}
                {findData && groups.length === 0 && (
                    <div className="mt-8 text-center">
                        <Image className="mx-auto h-auto w-full max-w-sm" src="/images/Search-pana.svg" alt="" width={512} height={512} />
                        <p className="mt-2 font-medium text-muted-foreground">No events match your search.</p>
                    </div>
                )}
            </section>
        </div>
    )
}
