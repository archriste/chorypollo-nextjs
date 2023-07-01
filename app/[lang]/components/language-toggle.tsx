"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/i18n-config";

export default function LanguageToggle() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex justify-center font-londrina_solid text-2xl text-white lg:text-3xl">
      {i18n.locales.map((locale) => {
        return (
          <div
            key={locale}
            className="opacity-50 transition hover:opacity-100 contrast-more:opacity-100"
          >
            <Link href={redirectedPathName(locale)} className="active:bg-transparent">
              <span className="mx-5 rounded-lg border border-white p-2">
                {locale == "en" ? "English" : "Español"}
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
