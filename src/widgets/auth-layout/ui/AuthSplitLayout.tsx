import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { cn } from "@/shared/lib/utils"

type AuthSplitLayoutProps = {
    title: string
    subtitle: string
    /** purple wave behind the top of the page */
    background: string
    illustration: string
    backHref: string
    /** which side the form sits on from `lg` up; phones always show the heading first */
    formSide?: "left" | "right"
    children: ReactNode
}

/**
 * Login / sign-up frame: purple wave, a heading with an illustration, and the form card.
 * Phones and tablets stack heading then card; from `lg` they sit side by side.
 */
export function AuthSplitLayout({ title, subtitle, background, illustration, backHref, formSide = "right", children }: AuthSplitLayoutProps) {
    return (
        <div className="relative min-h-dvh overflow-x-hidden bg-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-5 h-[55vh] min-h-[380px] lg:h-[68vh]">
                <Image src={background} alt="" fill priority sizes="100vw" className="object-cover object-bottom" />
            </div>

            <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 sm:px-8">
                <header className="py-5">
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-1 rounded-full pr-2 text-lg text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        <ChevronLeft className="size-7" aria-hidden="true" />
                        Back
                    </Link>
                </header>

                <main className="grid flex-1 items-center gap-6 pb-12 lg:grid-cols-2 lg:gap-12 xl:gap-20">
                    <section className={cn("text-center text-white lg:self-start lg:pt-8 lg:text-left", formSide === "left" && "lg:order-2")}>
                        <h1 className="text-3xl font-medium leading-tight sm:text-4xl xl:text-5xl 2xl:text-[58px]">{title}</h1>
                        <p className="mx-auto mt-3 max-w-md text-base text-white/90 sm:text-lg lg:mx-0 lg:mt-6 xl:text-xl">{subtitle}</p>
                        <Image
                            src={illustration}
                            alt=""
                            width={520}
                            height={400}
                            priority
                            className="mt-8 hidden h-auto w-full max-w-md lg:block xl:max-w-lg"
                        />
                    </section>

                    <div className="flex justify-center">{children}</div>
                </main>
            </div>
        </div>
    )
}
