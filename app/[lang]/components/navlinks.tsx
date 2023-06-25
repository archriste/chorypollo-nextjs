import Link from "next/link";
import LanguageToggle from "./language-toggle";
import OutlinedText from "./outlined-text";

export default async function NavLinks({ dictionary }: { dictionary: Record<string, any> }) {
  return (
      <div className="absolute right-2 flex h-full w-full items-center justify-between">
        <div className="h-20 w-full"></div>
        <Link className="flex h-full w-full justify-center" href={dictionary.links.home}>
          <OutlinedText fontsize="24px">{dictionary.nav.home}</OutlinedText>
        </Link>
        <Link className="flex h-full w-full justify-center" href={dictionary.links.menu}>
          <OutlinedText fontsize="24px">{dictionary.nav.menu}</OutlinedText>
        </Link>
        <Link className="flex h-full w-full justify-center" href={dictionary.links.contact}>
          <OutlinedText fontsize="24px">{dictionary.nav.contact}</OutlinedText>
        </Link>
        <LanguageToggle />
      </div>
  );
}
