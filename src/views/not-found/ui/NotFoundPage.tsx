import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/shared/ui/kit/button";

const ART = { src: "/images/404.jpg", width: 6912, height: 4468 };

// From md the artwork (which has "404! Page not found" painted in) covers the screen. Phones get
// the text as HTML and only the lower part of the artwork, so nothing is shrunk or cut mid-sentence.
export default function NotFoundPage() {
    return (
        <main className="relative flex min-h-dvh flex-col overflow-hidden bg-primary-purple">
            <Image src={ART.src} alt="" fill priority sizes="100vw" className="hidden object-cover md:block" />

            <Button asChild variant="outline" className="relative z-10 m-4 h-11 w-fit rounded-xl border-0 bg-white px-4 shadow-sm sm:m-8">
                <Link href="/">
                    <ChevronLeft className="size-5" aria-hidden="true" /> Go back to Home
                </Link>
            </Button>

            <div className="mt-8 px-6 text-center md:sr-only">
                <h1 className="text-7xl font-extrabold text-[#7a16df]">404!</h1>
                <p className="mt-4 font-medium">Page not found. Looks like this link took a wrong turn!</p>
            </div>

            <div aria-hidden="true" className="relative mt-auto h-[45dvh] overflow-hidden md:hidden">
                <Image
                    src={ART.src}
                    alt=""
                    width={ART.width}
                    height={ART.height}
                    sizes="130vh"
                    className="absolute bottom-0 left-1/2 h-[180%] w-auto max-w-none -translate-x-1/2"
                />
            </div>
        </main>
    )
}
