'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { VerifyComponent } from "@/features/auth/reset-password";

const VerifyPage = () => {
    const router = useRouter();

    // show the success state briefly, then go to the login page
    useEffect(() => {
        const timer = setTimeout(() => router.push('/login'), 1000);
        return () => clearTimeout(timer);
    }, [router]);

    return <VerifyComponent />;
}

export default VerifyPage;
