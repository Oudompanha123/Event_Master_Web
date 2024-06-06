'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import VerifyComponent from "@/app/(reset-password)/_components/VerifyComponent";
import Image from "next/image";

const VerifyPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/overview');
        }, 2000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <div>
                <Image
                    className="absolute mt-[15%] left-[39%]"
                    src="/images/verify-success.gif"
                    alt="Verification success image"
                    width={400}
                    height={200}
                />
            </div>

            <VerifyComponent />
        </div>
    );
}

export default VerifyPage;
