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
import eventData from "../../data/event.json";
import { EventList } from "./_componenets/EventList";
import { SearchBar } from "./_componenets/SearchBar";

export default function Home() {
  return (
    <div className="container">
      {/* hero section */}
      <section className="bg-pattern bg-cover md:bg-contain relative lg:top-0 xl:-top-20">
        <div className="text-center space-y-8 mt-16 lg:mt-0 lg:relative lg:top-24">
          <div className="space-y-8 mb-8">
            <h1 className="!leading-snug font-bold text-5xl md:text-6xl lg:text-[64px] w-full lg:w-3/4 2xl:w-1/2 mx-auto">Bringing everyone <br className="hidden lg:block"></br>all together</h1>
            <p className="text-sm md:text-base w-full md:w-3/4 lg:w-1/3 xl:w-1/3 mx-auto font-medium">Unite, Celebrate, Create: Bringing Everyone Together
              for Unforgettable Events, Perfectly Realized with Seamless
              Planning and Exquisite Execution.
            </p>
          </div>
          <a href="#content">
            <button className="bg-purple-text text-white px-10 py-3 rounded-full text-base lg:text-lg font-semibold relative">
              Let's Explore
            </button>
          </a>
        </div>
        <div className="hidden lg:grid grid-cols-5 gap-6">
          <Image height={450} width="auto" src={festivalImage} placeholder='blur' className="rounded-3xl relative -top-32 h-[450px] object-cover" alt="festivalImage" />
          <div className="flex items-end">
            <Image height={450} width="auto" src={conferenceImage} placeholder='blur' className="rounded-3xl h-[350px] object-cover" alt="conferenceImage" />
          </div>
          <div className="flex items-end">
            <Image height={255} width="auto" src={chillImage} placeholder='blur' className="rounded-3xl h-1/2 object-cover" alt="chillImage" />
          </div>
          <div className="flex items-end">
            <Image height={450} width="auto" src={skiImage} placeholder='blur' className="rounded-3xl h-[350px] object-cover" alt="skiImage" />
          </div>
          <Image height={450} width="auto" src={racingImage} placeholder='blur' className="rounded-3xl relative -top-32 h-[450px] object-cover" alt="racingImage" />
        </div>
        <div className="hidden lg:block bg-gradient-to-t from-white to-transparent h-[200px] w-full absolute -bottom-0 left-0"></div>
      </section>
      {/* category section */}
      <section className="space-y-12 py-32">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-semibold w-full sm:w-2/3 lg:w-1/2 mx-auto">Popular events you may like also.</h2>
          <p className="text-sm md:text-base font-medium">explore new thing by gathering with people.</p>
        </div>
        <CategoryCardListComponent />
      </section>

      <section className="mb-16">
        {/* <div className="mb-8">
          <TitleComponent title={"Search Your Favorite Event"} />
        </div> */}
        <SearchBar />
      </section>
      {/* event section */}
      <section id="content" className="space-y-16">
        {/* {eventData.payload.map((x, index) => (
          <EventList title={x.conference}  />
        ))} */}
        <EventList title={"Conference"} data={eventData.conference} />
        <EventList title={"Marathons and Races"} data={eventData.sport} />
        <EventList title={"Festival"} data={eventData.festival} />
      </section>
      {/* cta section */}
      <section>
        <CTAComponent />
      </section>
    </div>
  );
}
