import Image from "next/image";
import { EventCardComponent } from "./_componenets/EventCardComponent";
import skiImage from "../../../public/images/ski.jpg"
import chillImage from "../../../public/images/sea-chill.jpg"
import festivalImage from "../../../public/images/festival.jpg"
import racingImage from "../../../public/images/racing.jpg"
import conferenceImage from "../../../public/images/conference.jpg"
import { CategoryCardListComponent } from "./_componenets/CategoryCardListComponent";
import { TitleComponent } from "./_componenets/TitleComponent";
import { CTAComponent } from "./_componenets/CTAComponent";

export default function Home() {
  return (
    <div className="container">
      {/* hero section */}
      <section className="bg-pattern bg-cover md:bg-contain relative">
        <div className="text-center space-y-12 mt-16">
          <div className="space-y-8">
            <h1 className="!leading-tight font-bold text-5xl md:text-6xl lg:text-7xl w-full lg:w-3/4 2xl:w-1/2 mx-auto">Bringing everyone all together</h1>
            <p className="text-sm md:text-base w-full md:w-3/4 lg:w-2/3 xl:w-1/3 mx-auto">Unite, Celebrate, Create: Bringing Everyone Together
              for Unforgettable Events, Perfectly Realized with Seamless
              Planning and Exquisite Execution.
            </p>
          </div>
          <button className="bg-purple-text text-white px-8 py-4 rounded-full text-base lg:text-lg font-semibold relative">
            <a href="#content">Let's Explore</a>
          </button>
        </div>
        <div className="hidden lg:grid grid-cols-5 gap-6">
          <Image width="auto" height="auto" src={festivalImage} className="rounded-3xl relative -top-32 h-[450px] object-cover" alt="festivalImage" />
          <div className="flex items-end">
            <Image width="auto" height="auto" src={conferenceImage} className="rounded-3xl h-[350px] object-cover" alt="conferenceImage" />
          </div>
          <div className="flex items-end">
            <Image width="auto" height="auto" src={chillImage} className="rounded-3xl h-1/2 object-cover" alt="chillImage" />
          </div>
          <div className="flex items-end">
            <Image width="auto" height="auto" src={skiImage} className="rounded-3xl h-[350px] object-cover" alt="skiImage" />
          </div>
          <Image width="auto" height="auto" src={racingImage} className="rounded-3xl relative -top-32 h-[450px] object-cover" alt="racingImage" />
        </div>
        <div className="hidden lg:block bg-gradient-to-t from-white to-transparent h-[200px] w-full absolute -bottom-0 left-0"></div>
      </section>
      {/* category section */}
      <section className="space-y-12 py-32">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-semibold w-full sm:w-2/3 lg:w-1/2 mx-auto">Find event base on category you love.</h2>
          <p className="text-sm md:text-base">explore new thing by gathering with people.</p>
        </div>
        <CategoryCardListComponent />
      </section>
      {/* event section */}
      <section id="content">
        <TitleComponent title="Conference" />
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 mt-8">
          <EventCardComponent />
          <EventCardComponent />
          <EventCardComponent />
        </div>
      </section>
      {/* cta section */}
      <section>
        <CTAComponent />
      </section>
    </div>
  );
}
