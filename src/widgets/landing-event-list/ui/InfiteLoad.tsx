"use client";

import { getEventByCategoryNameAction } from "@/entities/event/api/landingAction";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
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
                <div
                    className="flex invisible justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
                    ref={ref}
                >
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                    >
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </div>}
        </>
    );
}