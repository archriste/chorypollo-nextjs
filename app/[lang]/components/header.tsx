import Link from "next/link";
import Image from "next/image";
import logo_src from "@/public/chorypollo-logo.png";
import NavLinks from "./navlinks";
import LanguageToggle from "./language-toggle";

export default function Header({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <header
      className="fixed top-0 flex h-16 w-full bg-lime-300 z-20"
    >
      <div className="absolute -top-2 left-2 h-20 w-20 sm:left-10 sm:h-32 sm:w-32 lg:h-44 lg:w-44">
        <Image className="z-30" src={logo_src} alt="The chorypollo logo: our name over a taco" fill />
      </div>
      <NavLinks dictionary={dictionary} />
    </header>
  );
}
