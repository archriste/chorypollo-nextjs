import Link from "next/link";
import Header from "../components/header";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import ScrollIndicator from "../components/scroll-indicator";
import LanguageToggle from "../components/language-toggle";
import { LooseMenuGrid, StructureMenuGrid } from "../components/menu-grid";

export default async function Menu({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} />
      <ScrollIndicator>
        <div className="my-20">
          <div className="inline-block h-[60px] lg:h-[72px] w-full text-center font-londrina_solid text-[60px] leading-none text-neutral-50 lg:text-[72px]">
            {dictionary.nav.menu}
          </div>
          <div className="my-8 flex items-center justify-center">
            <LanguageToggle />
          </div>
          <div className="my-10">
            <StructureMenuGrid dictionary={dictionary} />
          </div>
        </div>
      </ScrollIndicator>
    </>
  );
}
