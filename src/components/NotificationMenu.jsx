"use client"

import { useState, useRef, useEffect } from "react";
import {
    KnockProvider,
    KnockFeedProvider,
    NotificationIconButton,
    NotificationFeedPopover,
} from "@knocklabs/react";
// import { useSession } from "next-auth/react";

// Required CSS import, unless you're overriding the styling
import "@knocklabs/react/dist/index.css";

export const NotificationMenu = () => {
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef(null);
    // const { session, status, data } = useSession();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        // isClient && status === 'authenticated' ? (
        <KnockProvider
            apiKey={'pk_test_JO65C9v8tNEf2aLZMMjjEbmp_c4Hos2D8U6wCHzzswI'}
        // userId={data?.user.email}
        >
            <KnockFeedProvider feedId={'fc0460b0-11f7-46fa-bd57-6c9e31e53896'}>
                <>
                    <NotificationIconButton
                        ref={notifButtonRef}
                        onClick={(e) => setIsVisible(!isVisible)}
                    />
                    <NotificationFeedPopover
                        buttonRef={notifButtonRef}
                        isVisible={isVisible}
                        onClose={() => setIsVisible(false)}
                    />
                </>
            </KnockFeedProvider>
        </KnockProvider>)
    // : <p>GG not notification</p>
    // );
};