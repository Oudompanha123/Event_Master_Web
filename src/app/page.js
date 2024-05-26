import Image from "next/image";
import { CategoryCardComponent } from "./_componenets/CategoryCardComponent";
import { EventCardComponent } from "./_componenets/EventCardComponent";
import { NavbarComponent } from "./_componenets/NavbarComponent";
import skiImage from "../../public/images/ski.jpg"
import chillImage from "../../public/images/sea-chill.jpg"
import festivalImage from "../../public/images/festival.jpg"
import racingImage from "../../public/images/racing.jpg"
import conferenceImage from "../../public/images/conference.jpg"
import { CategoryCardListComponent } from "./_componenets/CategoryCardListComponent";

export default function Home() {
  return (
    <div className="container">
      <NavbarComponent />
      {/* hero section */}
      <section className="bg-pattern bg-contain relative">
        <div className="text-center space-y-12 mt-16">
          <div className="space-y-8">
            <h1 className="font-bold text-7xl w-1/2 mx-auto">Bringing everyone all together</h1>
            <p className="w-1/3 mx-auto font-light">Unite, Celebrate, Create: Bringing Everyone Together
              for Unforgettable Events, Perfectly Realized with Seamless
              Planning and Exquisite Execution.
            </p>
          </div>
          <button className="bg-purple-text text-white px-8 py-4 rounded-full text-xl font-semibold">Let's Explore</button>
        </div>
        <div className="grid grid-cols-5 gap-6">
          <Image src={festivalImage} className="rounded-3xl relative -top-32 h-[450px] object-cover" />
          <div className="flex items-end">
            <Image src={conferenceImage} className="rounded-3xl h-[350px] object-cover" />
          </div>
          <div className="flex items-end">
            <Image src={chillImage} className="rounded-3xl h-1/2 object-cover" />
          </div>
          <div className="flex items-end">
            <Image src={skiImage} className="rounded-3xl h-[350px] object-cover" />
          </div>
          <Image src={racingImage} className="rounded-3xl relative -top-32 h-[450px] object-cover" />
        </div>
        <div className="bg-gradient-to-t from-white to-transparent h-[200px] w-full absolute -bottom-0 left-0"></div>
      </section>
      {/* category section */}
      <section className="space-y-12 py-32">
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-semibold w-1/2 mx-auto">Find event base on category you love.</h2>
          <p className="text-xl font-light">explore new thing by gathering with people.</p>
        </div>
        <CategoryCardListComponent />
      </section>
      {/* event section */}
      <section>
        <div className="grid grid-cols-3 gap-8">
          <EventCardComponent />
          <EventCardComponent />
          <EventCardComponent />
        </div>
      </section>
    </div>
  );
}
