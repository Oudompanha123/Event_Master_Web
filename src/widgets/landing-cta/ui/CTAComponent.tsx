import Image from "next/image"
import Link from "next/link"
import haloEmoji from "../../../../public/images/halo-emoji.png"
import sunglassEmoji from "../../../../public/images/sunglass-emoji.png"
import { Button } from "@/shared/ui/kit/button"

export const CTAComponent = () => (
    <div className="relative mt-24 w-full overflow-hidden rounded-3xl bg-noice bg-cover px-6 py-12 text-center text-white lg:mt-32">
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Get Ready To Manage Your Event</h2>
        <p className="mt-4 font-semibold lg:text-xl">Join Free Today</p>
        <Button asChild variant="outline" className="mt-8 h-12 rounded-full border-0 bg-white px-8 font-semibold text-primary-text hover:bg-white/90 lg:h-14 lg:text-lg">
            <Link href="/signup">Register now</Link>
        </Button>
        <Image src={haloEmoji} width={40} height={40} alt="" className="absolute top-10 right-[18%] hidden xl:block" />
        <Image src={sunglassEmoji} width={114} height={114} alt="" className="absolute bottom-0 left-[18%] hidden xl:block" />
    </div>
)
