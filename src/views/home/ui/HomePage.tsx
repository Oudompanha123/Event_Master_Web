import Image from "next/image";
import { Suspense } from "react";
import skiImage from "../../../../public/images/ski.jpg"
import chillImage from "../../../../public/images/sea-chill.jpg"
import festivalImage from "../../../../public/images/festival.jpg"
import racingImage from "../../../../public/images/racing.jpg"
import conferenceImage from "../../../../public/images/conference.jpg"
import { CategoryCardListComponent } from "@/widgets/category-carousel/ui/CategoryCardListComponent";
import { CTAComponent } from "@/widgets/landing-cta/ui/CTAComponent";
import { EventList } from "@/widgets/landing-event-list/ui/EventList";
import { SearchBar } from "@/features/event/search/ui/SearchBar";
import { getAllCategory, getEventByCateName, getPopularEvent } from "@/entities/event/api/landingService";
import { ListOfSkeleton } from "@/shared/ui/ListOfSkeleton";
import { Button } from "@/shared/ui/kit/button";

const CategorySection = async ({ name }: { name: string }) => (
  <EventList title={name} data={await getEventByCateName(name)} />
);

export default async function Home(props) {
  const searchParams = await props.searchParams;
  // Fetched together so their timeouts overlap rather than stack.
  const [popularData, allCategory] = await Promise.all([
    getPopularEvent(),
    getAllCategory(),
  ]);
  const apiDown = popularData?.unreachable || allCategory?.unreachable;
  const hasPopular = (popularData?.payload?.length ?? 0) > 0;

  return (
    <div className="container">
      {/* hero */}
      <section className="relative bg-pattern bg-cover pt-12 md:bg-contain lg:pt-20">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center lg:space-y-8">
          <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-[64px]">
            Bringing everyone <br className="hidden sm:block" />all together
          </h1>
          <p className="mx-auto max-w-xl text-sm font-medium md:text-base">
            Unite, Celebrate, Create: Bringing Everyone Together for Unforgettable Events, Perfectly Realized with
            Seamless Planning and Exquisite Execution.
          </p>
          <Button asChild className="h-12 rounded-full px-10 text-base font-semibold lg:text-lg">
            <a href="#content">Let&apos;s Explore</a>
          </Button>
        </div>

        {/* photo collage: 3 photos on tablets, 5 from lg */}
        <div aria-hidden="true" className="relative mt-10 hidden grid-cols-3 items-end gap-4 md:grid lg:-mt-24 lg:grid-cols-5 lg:gap-6">
          <Image src={festivalImage} placeholder="blur" alt="" sizes="20vw" className="hidden h-112.5 rounded-3xl object-cover lg:block lg:-translate-y-32" />
          <Image src={conferenceImage} placeholder="blur" alt="" sizes="(min-width: 1024px) 20vw, 33vw" className="h-64 rounded-3xl object-cover lg:h-87.5" />
          <Image src={chillImage} placeholder="blur" alt="" sizes="(min-width: 1024px) 20vw, 33vw" className="h-48 rounded-3xl object-cover lg:h-56" />
          <Image src={skiImage} placeholder="blur" alt="" sizes="(min-width: 1024px) 20vw, 33vw" className="h-64 rounded-3xl object-cover lg:h-87.5" />
          <Image src={racingImage} placeholder="blur" alt="" sizes="20vw" className="hidden h-112.5 rounded-3xl object-cover lg:block lg:-translate-y-32" />
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 hidden h-48 w-full bg-linear-to-t from-white to-transparent md:block" />
      </section>

      {/* popular events */}
      <section className="space-y-10 py-20 lg:space-y-12 lg:py-28">
        <div className="space-y-4 text-center lg:space-y-6">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold sm:text-4xl lg:text-5xl">Popular events you may like also.</h2>
          <p className="text-sm font-medium text-muted-foreground md:text-base">Explore new things by gathering with people.</p>
        </div>
        {apiDown ? (
          <p className="text-center text-sm text-muted-foreground">Events can&apos;t be loaded right now. Please try again shortly.</p>
        ) : hasPopular ? (
          <CategoryCardListComponent data={popularData} />
        ) : (
          <p className="text-center text-sm text-muted-foreground">No popular events yet.</p>
        )}
      </section>

      <section aria-label="Search events" className="mb-16">
        <Suspense>
          <SearchBar />
        </Suspense>
      </section>

      {/* events by category (hidden while search results are shown) */}
      <section id="content" className={`scroll-mt-24 space-y-16 ${searchParams.search ? "hidden" : "block"}`}>
        {(allCategory?.payload ?? []).map((name) => (
          <Suspense key={name} fallback={<ListOfSkeleton />}>
            <CategorySection name={name} />
          </Suspense>
        ))}
      </section>

      <section>
        <CTAComponent />
      </section>
    </div>
  );
}
