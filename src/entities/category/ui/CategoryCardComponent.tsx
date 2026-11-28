import Image from "next/image"
import Link from "next/link"
import { Button } from "@/shared/ui/kit/button"

/** Popular-event slide: poster with title on top and description + link at the bottom. */
export const CategoryCardComponent = ({ cate, img, title, content, eventId }) => (
    <article className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-200 sm:h-[350px]">
        <Image src={img} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 90vw" className="object-cover brightness-75" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
        <div className="absolute inset-x-0 top-0 p-6">
            {cate && <p className="text-xs font-medium tracking-wide text-white/80 uppercase">{cate}</p>}
            <h3 className="line-clamp-2 text-2xl font-bold text-white">{title}</h3>
        </div>
        <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
            <p className="line-clamp-3 text-sm text-white lg:text-base">{content}</p>
            <Button asChild variant="outline" className="h-11 rounded-full border-0 bg-white px-6 font-semibold text-primary-text hover:bg-white/90">
                <Link href={`/detail/${eventId}`}>See Details</Link>
            </Button>
        </div>
    </article>
)
