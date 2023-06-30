export default async function NavLinks({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <div className="absolute flex h-full w-full items-center justify-around">
      <div className="h-20 w-full"></div>
      <a className="flex h-full w-full justify-center" href={dictionary.links.home}>
        <span className="align-center outlined flex items-center justify-center font-londrina_solid text-3xl text-white drop-shadow-md lg:text-4xl">
          {dictionary.nav.home}
        </span>
      </a>
      <a className="flex h-full w-full justify-center" href={dictionary.links.menu}>
        <span className="align-center outlined flex items-center justify-center font-londrina_solid text-3xl text-white drop-shadow-md lg:text-4xl">
          {dictionary.nav.menu}
        </span>
      </a>
    </div>
  );
}
