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
        }, 200);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div>
            <div>
                <Image
                    className="absolute sm:mt-[320px] md:mt-[420px] lg:mt-[300px] sm:ml-[15%] md:ml-[25%] lg:ml-[38%]"
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
