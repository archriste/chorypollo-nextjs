import Link from "next/link";
import Header from "../components/header";
import type { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";


export default async function Menu({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
    const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} />
      
    </>
  );
}
