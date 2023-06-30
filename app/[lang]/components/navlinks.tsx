import Link from "next/link";
import LanguageToggle from "./language-toggle";
import OutlinedText from "./outlined-text";

export default async function NavLinks({ dictionary }: { dictionary: Record<string, any> }) {
  return (
      <div className="absolute flex h-full w-full items-center justify-around">
        <div className="h-20 w-full"></div>
        <a className="flex h-full w-full justify-center" href={dictionary.links.home}>
          <OutlinedText fontsize="24px">{dictionary.nav.home}</OutlinedText>
        </a>
        <a className="flex h-full w-full justify-center" href={dictionary.links.menu}>
          <OutlinedText fontsize="24px">{dictionary.nav.menu}</OutlinedText>
        </a>
      </div>
  );
}
