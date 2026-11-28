import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/kit/avatar"

const initials = (name: string) =>
    name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("")

/** Team member: photo (initials if it can't load), name and quote. */
export const TeamCardComponent = ({ img, name, quote }: { img: string; name: string; quote: string }) => (
    <figure className="w-full max-w-72 space-y-5">
        <Avatar className="aspect-[280/304] size-auto w-full rounded-3xl">
            <AvatarImage src={img} alt={name} className="object-cover" />
            <AvatarFallback className="rounded-3xl bg-secondary text-5xl font-semibold text-secondary-foreground">
                {initials(name)}
            </AvatarFallback>
        </Avatar>
        <figcaption className="space-y-2">
            <p className="text-xl font-semibold lg:text-2xl">{name}</p>
            <blockquote className="text-sm text-muted-foreground lg:text-base">&ldquo;{quote}&rdquo;</blockquote>
        </figcaption>
    </figure>
)
