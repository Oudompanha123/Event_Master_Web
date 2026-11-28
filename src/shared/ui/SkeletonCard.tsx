import { Skeleton } from "@/shared/ui/kit/skeleton"

/** Loading placeholder with the same shape as the public event card. */
export const SkeletonCard = () => (
    <div className="overflow-hidden rounded-3xl shadow-md" aria-hidden="true">
        <Skeleton className="aspect-16/10 w-full rounded-none" />
        <div className="space-y-4 p-5 sm:p-6">
            <div className="flex items-center gap-3">
                <Skeleton className="size-9 rounded-full" />
                <Skeleton className="h-3 w-1/4" />
            </div>
            <div className="flex justify-between">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-3 w-1/5" />
            </div>
            <Skeleton className="h-5 w-2/5" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <div className="flex justify-between pt-2">
                <Skeleton className="h-9 w-28 rounded-full" />
                <Skeleton className="h-9 w-28 rounded-full" />
            </div>
        </div>
    </div>
)
