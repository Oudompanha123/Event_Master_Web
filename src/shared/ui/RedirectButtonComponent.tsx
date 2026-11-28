import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/shared/ui/kit/button"

export const RedirectBackComponent = ({ link, label = "Go back to Home" }: { link: string; label?: string }) => (
    <Button asChild variant="outline" className="mt-4 mb-6 h-11 rounded-full px-4 shadow-xs sm:mb-8">
        <Link href={link}>
            <ChevronLeft className="size-5" aria-hidden="true" /> {label}
        </Link>
    </Button>
)
