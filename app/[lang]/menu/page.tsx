import Header from "../components/header";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import ScrollIndicator from "../components/scroll-indicator";
import LanguageToggle from "../components/language-toggle";
import { ResponsiveMenuGrid } from "../components/menu-grid";

export default async function Menu({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} />
      <ScrollIndicator>
        <div className="py-20 relative" id="menu">
          <div className="outlined inline-block h-[60px] w-full text-center font-londrina_solid text-[60px] leading-none text-neutral-50 lg:h-[72px] lg:text-[72px]">
            {dictionary.nav.menu}
          </div>
          <div id="language-selector" className="my-8 lg:absolute lg:right-0 lg:top-16">
            <LanguageToggle />
          </div>
          <div className="my-10">
            <span className="outlined block text-center font-londrina_solid text-3xl text-stone-100 md:hidden">
              {dictionary.menu.touch}
            </span>
            <ResponsiveMenuGrid dictionary={dictionary} />
          </div>
        </div>
      </ScrollIndicator>
    </>
  );
}
