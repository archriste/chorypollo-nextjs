import { Key } from "react";
import MenuItem from "./menu-grid-item";

export function ResponsiveMenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-56">
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.special}
        </span>
        {dictionary.specials.map((item: any, index: Key) => {
          return <MenuItem item={item} key={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.carte}
        </span>
        {dictionary.carte.map((item: any, index: Key) => {
          return <MenuItem item={item} key={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.entree}
        </span>
        {dictionary.entrees.map((item: any, index: Key) => {
          return <MenuItem item={item} key={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.appetizer}
        </span>
        {dictionary.appetizers.map((item: any, index: Key) => {
          return <MenuItem item={item} key={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.drink}
        </span>
        {dictionary.drinks.map((item: any, index: Key) => {
          return <MenuItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}