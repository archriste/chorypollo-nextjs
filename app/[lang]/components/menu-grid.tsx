import { Key } from "react";
import Image from "next/image";
import choripollo from "@/public/choripollo.jpeg";
import MenuItem from "./menu-grid-item";

const menuItemStyle =
  "lg:w-1/3 flex flex-col items-left justify-start border p-5 rounded-xl bg-black bg-opacity-10";
const menuItemTitleStyle = "font-karla text-3xl lg:text-3xl font-bold text-neutral-50";
const menuItemDescriptionStyle = "font-karla text-xl lg:text-xl text-neutral-50";
const menuItemVarietyContainerStyle = "flex flex--row flex-wrap gap-2 items-left justify-start";
const menuItemVarietyStyle =
  "font--karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg";

export function ResponsiveMenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <div className="sm:mx-10 md:mx-20 lg:mx-36 xl:mx-56">
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.special}
        </span>
        {dictionary.specials.map((item: any, index: Key) => {
          return <MenuItem item={item} index={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.carte}
        </span>
        {dictionary.carte.map((item: any, index: Key) => {
          return <MenuItem item={item} index={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.entree}
        </span>
        {dictionary.entrees.map((item: any, index: Key) => {
          return <MenuItem item={item} index={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.appetizer}
        </span>
        {dictionary.appetizers.map((item: any, index: Key) => {
          return <MenuItem item={item} index={index} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="outlined my-10 text-center font-londrina_solid text-4xl font-bold text-neutral-50">
          {dictionary.menu.drink}
        </span>
        {dictionary.drinks.map((item: any, index: Key) => {
          return <MenuItem item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export function LooseMenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <>
      <div className="flex flex-wrap">
        {dictionary.carte.map((item: any, index: Key) => {
          return (
            <div key={index} className={menuItemStyle}>
              <h2 className={menuItemTitleStyle}>
                {item.name} - {item.price}
              </h2>
              <div>
                <div>
                  <span className={menuItemDescriptionStyle}>{item.description}</span>
                  <div className={menuItemVarietyContainerStyle}>
                    {item.types
                      ? item.types.map((type: any, index: Key) => {
                          return (
                            <a className={menuItemVarietyStyle} key={index}>
                              {type}
                            </a>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dictionary.specials.map((item: any, index: Key) => {
          return (
            <div key={index} className={menuItemStyle}>
              <h2 className={menuItemTitleStyle}>
                {item.name} - {item.price}
              </h2>
              <div>
                <div>
                  <span className={menuItemDescriptionStyle}>{item.description}</span>
                  <div className={menuItemVarietyContainerStyle}>
                    {item.types
                      ? item.types.map((type: any, index: Key) => {
                          return (
                            <a className={menuItemVarietyStyle} key={index}>
                              {type}
                            </a>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dictionary.entrees.map((item: any, index: Key) => {
          return (
            <div key={index} className={menuItemStyle}>
              <h2 className={menuItemTitleStyle}>
                {item.name} - {item.price}
              </h2>
              <div>
                <div>
                  <span className={menuItemDescriptionStyle}>{item.description}</span>
                  <div className={menuItemVarietyContainerStyle}>
                    {item.types
                      ? item.types.map((type: any, index: Key) => {
                          return (
                            <a className={menuItemVarietyStyle} key={index}>
                              {type}
                            </a>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dictionary.appetizers.map((item: any, index: Key) => {
          return (
            <div key={index} className={menuItemStyle}>
              <h2 className={menuItemTitleStyle}>
                {item.name} - {item.price}
              </h2>
              <div>
                <div>
                  <span className={menuItemDescriptionStyle}>{item.description}</span>
                  <div className={menuItemVarietyContainerStyle}>
                    {item.types
                      ? item.types.map((type: any, index: Key) => {
                          return (
                            <a className={menuItemVarietyStyle} key={index}>
                              {type}
                            </a>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {dictionary.drinks.map((item: any, index: Key) => {
          return (
            <div key={index} className={menuItemStyle}>
              <h2 className={menuItemTitleStyle}>
                {item.name} - {item.price}
              </h2>
              <div>
                <div>
                  <span className={menuItemDescriptionStyle}>{item.description}</span>
                  <div className={menuItemVarietyContainerStyle}>
                    {item.types
                      ? item.types.map((type: any, index: Key) => {
                          return (
                            <a className={menuItemVarietyStyle} key={index}>
                              {type}
                            </a>
                          );
                        })
                      : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
/**/

const images = {
  choripollo: choripollo,
};

export function StructureMenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
  return (
    <>
      <div className="flex flex-wrap sm:mx-10 lg:mx-36">
        <div className="box-border w-full">
          <h2 className="outlined text-center font-londrina_solid text-5xl font-bold text-neutral-50 lg:text-6xl">
            {dictionary.menu.special}
          </h2>
          {dictionary.specials.map((item: any, index: Key) => {
            return (
              <div
                key={index}
                className="items-left mx-2  my-5 flex flex-col justify-center rounded-xl border bg-black bg-opacity-10 p-5"
              >
                <h2 className="font-karla text-2xl font-bold text-neutral-50 lg:text-3xl">
                  {item.name} - {item.price}
                </h2>
                <div className="flex h-full w-full">
                  <div className="">
                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                    <div className={menuItemVarietyContainerStyle}>
                      {item.types
                        ? item.types.map((type: any, index: Key) => {
                            return (
                              <a className={menuItemVarietyStyle} key={index}>
                                {type}
                              </a>
                            );
                          })
                        : null}
                    </div>
                  </div>
                  {/*item.image ? <div className=""><Image src={images[item.image]} alt={item.name} className="object-contain" height={150} width={150} /></div> : null*/}
                </div>
              </div>
            );
          })}
        </div>
        <div className="box-border w-full">
          <h2 className="outlined text-center font-londrina_solid text-5xl font-bold text-neutral-50 lg:text-6xl">
            {dictionary.menu.carte}
          </h2>
          {dictionary.carte.map((item: any, index: Key) => {
            return (
              <div
                key={index}
                className="items-left mx-2   my-5 flex flex-col justify-center rounded-xl border bg-black bg-opacity-10 p-5"
              >
                <h2 className="font-karla text-2xl font-bold text-neutral-50 lg:text-3xl">
                  {item.name} - {item.price}
                </h2>
                <div>
                  <div>
                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                    <div className={menuItemVarietyContainerStyle}>
                      {item.types
                        ? item.types.map((type: any, index: Key) => {
                            return (
                              <a className={menuItemVarietyStyle} key={index}>
                                {type}
                              </a>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h2 className="outlined text-center font-londrina_solid text-5xl font-bold text-neutral-50 lg:text-6xl">
            {dictionary.menu.entree}
          </h2>
          {dictionary.entrees.map((item: any, index: Key) => {
            return (
              <div
                key={index}
                className="items-left mx-2   my-5 flex flex-col justify-center rounded-xl border bg-black bg-opacity-10 p-5"
              >
                <h2 className="font-karla text-2xl font-bold text-neutral-50 lg:text-3xl">
                  {item.name} - {item.price}
                </h2>
                <div>
                  <div>
                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                    <div className={menuItemVarietyContainerStyle}>
                      {item.types
                        ? item.types.map((type: any, index: Key) => {
                            return (
                              <a className={menuItemVarietyStyle} key={index}>
                                {type}
                              </a>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h2 className="outlined text-center font-londrina_solid text-5xl font-bold text-neutral-50 lg:text-6xl">
            {dictionary.menu.appetizer}
          </h2>
          {dictionary.appetizers.map((item: any, index: Key) => {
            return (
              <div
                key={index}
                className="items-left mx-2   my-5 flex flex-col justify-center rounded-xl border bg-black bg-opacity-10 p-5"
              >
                <h2 className="font-karla text-2xl font-bold text-neutral-50 lg:text-3xl">
                  {item.name} - {item.price}
                </h2>
                <div>
                  <div>
                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                    <div className={menuItemVarietyContainerStyle}>
                      {item.types
                        ? item.types.map((type: any, index: Key) => {
                            return (
                              <a className={menuItemVarietyStyle} key={index}>
                                {type}
                              </a>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h2 className="outlined text-center font-londrina_solid text-5xl font-bold text-neutral-50 lg:text-6xl">
            {dictionary.menu.drink}
          </h2>
          {dictionary.drinks.map((item: any, index: Key) => {
            return (
              <div
                key={index}
                className="items-left mx-2 my-5 flex flex-col justify-center rounded-xl border bg-black bg-opacity-10 p-5"
              >
                <h2 className="font-karla text-2xl font-bold text-neutral-50 lg:text-3xl">
                  {item.name} - {item.price}
                </h2>
                <div>
                  <div>
                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                    <div className={menuItemVarietyContainerStyle}>
                      {item.types
                        ? item.types.map((type: any, index: Key) => {
                            return (
                              <a className={menuItemVarietyStyle} key={index}>
                                {type}
                              </a>
                            );
                          })
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

/**/
