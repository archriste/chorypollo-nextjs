import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";
import Image from "next/image";
import Header from "./components/header";
import MainCarousel from "./components/main-carousel";
import tacos from "@/public/tacos.jpeg";
import fries from "@/public/fries.jpeg";
import choripollo from "@/public/choripollo.jpeg";
import quesibirria from "@/public/quesibirria.jpeg";
import LanguageToggle from "./components/language-toggle";
import ScrollIndicator from "./components/scroll-indicator";

const images = [tacos, fries, choripollo, quesibirria];

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {

  const dictionary = await getDictionary(lang);
  
  return (
    <>
      {/* Header */}
      <Header dictionary={dictionary} />
      <ScrollIndicator>
        {/* Main */}
        <div className="mt-20">
          {/* Title */}
          <div
            id="title"
            className="flex h-[60px] select-none flex-col items-center overflow-hidden lg:h-[72px]"
          >
            <span className="inline-block w-full animate-title_slide text-center font-londrina_solid text-[60px] leading-none text-neutral-50 lg:text-[72px] outlined">
              {dictionary.home.title_top}
              <br />
              {dictionary.home.title_bottom}
            </span>
          </div>

          {/* Language select */}
          <div id="language-selector" className="my-8 flex items-center justify-center">
            <LanguageToggle />
          </div>

          {/* Description */}
          <div id="about-us" className="my-10 flex flex-col items-center justify-center lg:mx-20">
            <span className="p-3 text-center font-londrina_solid text-4xl text-stone-100 sm:w-2/3 lg:text-5xl outlined">
              {dictionary.about.intro}
            </span>
            <span className="p-3 text-justify font-karla text-lg text-stone-100 sm:w-2/3 lg:text-2xl font-bold">
              {dictionary.about.p1}
            </span>
            <span className="p-3 text-justify font-karla text-lg text-stone-100 sm:w-2/3 lg:text-2xl font-bold">
              {dictionary.about.p2}
            </span>
            <span className="p-3 text-justify font-karla text-lg text-stone-100 sm:w-2/3 lg:text-2xl font-bold">
              {dictionary.about.p3}
            </span>
            <div className="outlined mt-5 h-20 w-3/4 border-b border-white border-opacity-0 text-center font-londrina_solid text-4xl text-stone-100 transition hover:border-opacity-100 md:w-1/2 lg:text-5xl">
              <a href={dictionary.links.menu}>
                {dictionary.about.menulink}
              </a>
            </div>
          </div>
          {/* Carousel skip */}
          <a href="#locations-and-hours" aria-hidden="true">The following is a carousel section with selected images from the menu. Click to skip the carousel</a>
          {/* Carousel */}
          <div id="carousel" className="relative flex flex-col items-center bg-black bg-opacity-20 pt-5">
            <div className="relative h-full w-full">
              <MainCarousel loop={true}>
                {images.map((image, key) => {
                  return (
                    <div
                      key={key}
                      className="relative h-[350px] max-w-[400px] flex-[0_0_100%] lg:h-[480px] lg:max-w-[500px]"
                    >
                      <Image
                        src={image}
                        alt={`A carousel picture of our offerings. Check out the menu to see them all!`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  );
                })}
              </MainCarousel>
            </div>
          </div>

          {/* Location */}
          <div id="locations-and-hours" className="flex flex-col items-center justify-center lg:mt-10">
            <span className="outlined m-5 p-3 text-justify font-londrina_solid text-4xl text-stone-100 lg:text-5xl">
              {dictionary.location.hours}
            </span>
            <span className="text-justify font-karla text-xl text-stone-100 lg:text-3xl">
              {dictionary.location.week}: 10:30am - 9:30pm
            </span>
            <span className="mt-3 text-justify font-karla text-xl text-stone-100 lg:text-3xl">
              {dictionary.location.weekend}: 10:30am - 10:00pm
            </span>
            <span className="outlined m-5 p-3 text-justify font-londrina_solid text-4xl text-stone-100 lg:text-5xl">
              {dictionary.location.locations}
            </span>
            <div className="mb-10 flex w-full flex-col justify-evenly  lg:flex-row">
              <div className="flex flex-col items-center py-5">
                <div className="pb-3 text-center font-karla text-2xl text-stone-100 lg:text-3xl">
                  1330 Keosauqua Way
                  <br />
                  <a className="text-3xl font-bold" href="tel:5157787513">
                    515-778-7513
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.8428480344805!2d-93.63776692428542!3d41.59428238313689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee99109adf953f%3A0xdc163346a141041d!2s1330%20Keosauqua%20Way%2C%20Des%20Moines%2C%20IA%2050309!5e0!3m2!1sen!2sus!4v1687746601101!5m2!1sen!2sus"
                  allowFullScreen={false}
                  width="400"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex flex-col items-center py-5">
                <div className="pb-3 text-center font-karla text-2xl text-stone-100 lg:text-3xl">
                  2427 E University Ave
                  <br />
                  <a className="text-3xl font-bold" href="tel:5154215652">
                    515-421-5652
                  </a>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.5670749135165!2d-93.57384012428514!3d41.600247582765476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee9765f869830b%3A0xf9bc93bc3d6c3a1!2s2427%20E%20University%20Ave%2C%20Des%20Moines%2C%20IA%2050317!5e0!3m2!1sen!2sus!4v1687746720058!5m2!1sen!2sus"
                  allowFullScreen={false}
                  loading="lazy"
                  width="400"
                  height="300"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </ScrollIndicator>
    </>
  );
}
