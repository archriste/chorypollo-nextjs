import Link from 'next/link';

export default async function NavLinks({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <div className="absolute flex h-full w-full items-center justify-around">
      <div className="h-20 w-full"></div>
      <Link className="flex h-full w-full justify-center" href={`${dictionary.links.home}#home`} >
        <span className="align-center outlined flex items-center justify-center font-londrina_solid text-3xl text-white drop-shadow-md lg:text-4xl">
          {dictionary.nav.home}
        </span>
      </Link>
      <Link className="flex h-full w-full justify-center" href={`${dictionary.links.menu}#menu`}>
        <span className="align-center outlined flex items-center justify-center font-londrina_solid text-3xl text-white drop-shadow-md lg:text-4xl">
          {dictionary.nav.menu}
        </span>
      </Link>
    </div>
  );
}
