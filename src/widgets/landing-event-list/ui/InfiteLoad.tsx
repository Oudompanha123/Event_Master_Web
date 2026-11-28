"use client";

import { getEventByCategoryNameAction } from "@/entities/event/api/landingAction";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Loader2 } from "lucide-react";
import { EventInCategory } from "@/widgets/landing-event-list/ui/EventInCategory";

export const InfiniteLoad = ({ name }) => {
    const [event, setEvent] = useState([]);
    const [currentPage, setCurrentrPage] = useState(1);
    const [trackLength, setTrackLength] = useState<any>();
    const [stopLoad, setStopLoad] = useState(false);

    const { ref, inView } = useInView();

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const loadMoreBeers = async () => {
        await delay(500);
        const page = currentPage + 1;
        const res = await getEventByCategoryNameAction({ name, page })
        // past the last page the API answers 404 with no payload: that just means "no more events"
        const more = Array.isArray(res) ? res : [];
        if (more.length === 0) {
            setStopLoad(true);
            return;
        }
        setEvent((prevEvent) => [...prevEvent, ...more])
        setCurrentrPage(page)
        setTrackLength(event.length)
        if (event.length == trackLength) { setStopLoad(true) }
    };

    useEffect(() => {
        if (inView) { loadMoreBeers(); }
    }, [inView]);

    return (
        <>
            <EventInCategory data={event} />
            {!stopLoad &&
                <div ref={ref} role="status" className="col-span-full flex items-center justify-center p-4 text-purple-text">
                    <Loader2 className="size-8 animate-spin motion-reduce:animate-none" aria-hidden="true" />
                    <span className="sr-only">Loading more events...</span>
                </div>}
        </>
    );
}