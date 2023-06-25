import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Header from "./components/header";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} />
      <div>
        <div id="title" className="border border-white h-[52px] overflow-hidden select-none">
          <span className="animate-title_slide text-5xl leading-none inline-block w-full text-center text-white font-londrina_solid">{dictionary.home.title_top}<br />{dictionary.home.title_bottom}</span>
        </div>
      </div>
    </>
  );
}
