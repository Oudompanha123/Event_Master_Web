import { SkeletonCard } from "@/shared/ui/SkeletonCard"

export const ListOfSkeleton = () => (
    <div role="status" aria-label="Loading events" className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
    </div>
)
