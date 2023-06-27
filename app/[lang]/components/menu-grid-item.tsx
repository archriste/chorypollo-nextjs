"use client";

import { Key, useState } from "react";
import Image, { StaticImageData } from "next/image";
import choripollo from "@/public/choripollo.jpeg";
import tacos from "@/public/tacos.jpeg";
import fries from "@/public/fries.jpeg";
import quesibirria from "@/public/quesibirria.jpeg";
import camarones from "@/public/camarones.jpeg";
import quesadilla from "@/public/quesadilla.jpeg";
import happyburritos from "@/public/happyburritos.jpeg";
import quesadillafajita from "@/public/quesadillafajita.jpeg";
import enchiladas from "@/public/enchiladas.jpeg";
import jarritos from "@/public/jarritos.png";

const images: { [key: string]: StaticImageData } = {
  choripollo: choripollo,
  tacos: tacos,
  fries: fries,
  quesibirria: quesibirria,
  camarones: camarones,
  quesadilla: quesadilla,
  happyburritos: happyburritos,
  quesadillafajita: quesadillafajita,
  enchiladas: enchiladas,
  jarritos: jarritos,
};

const imagePicker = (imageName: string) => {
  return images[imageName];
};

export default function MenuItem({ item, index }: { item: any; index: Key }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      key={index}
      id="item-container"
      onClick={handleClick}
      className={`flex h-40 w-full select-none flex-row gap-2 overflow-hidden border-b border-black border-opacity-30 p-3 text-white transition-all md:h-auto md:min-h-[200px] ${
        isActive ? "h-auto min-h-[200px] bg-black bg-opacity-20 md:bg-opacity-0" : ""
      }`}
    >
      <div
        id="item-info"
        className={`flex h-full grow flex-col justify-between md:gap-3 ${isActive ? "gap-3" : ""}`}
      >
        <div id="item-title" className="outlined block font-londrina_solid text-3xl">
          {item.name}
        </div>
        <div
          id="item-description"
          className={`line-clamp-2 w-full font-karla text-lg transition-all md:line-clamp-none ${
            isActive ? "line-clamp-none" : ""
          }`}
        >
          {item.description}
        </div>
        <div id="item-bottom" className="flex grow-0 flex-row justify-start">
          <div
            id="item-price"
            className={`outlined box-border flex pr-2 font-londrina_solid text-2xl md:items-start ${
              isActive ? "items-start" : ""
            }`}
          >
            {item.price}
          </div>
          {item.types ? (
            <div
              id="item-varieties"
              className={`line-clamp-1 h-[30px] self-center transition-all md:line-clamp-none md:h-auto ${
                isActive ? "line-clamp-none h-auto" : ""
              }`}
            >
              {item.types.map((type: string) => {
                return (
                  <span
                    id="variety"
                    key={type}
                    className={`mx-0.5 inline-block rounded border border-black border-opacity-30 bg-black bg-opacity-20 p-1 font-karla text-sm font-bold transition-all md:mb-1 ${
                      isActive ? "mb-1" : ""
                    }`}
                  >
                    {type}
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
      {item.image ? (
        <div
          id="item-image"
          className={`relative border border-black border-opacity-30 h-32 w-32 shrink-0 self-center overflow-hidden rounded-xl transition-all md:h-48 md:w-48 xl:h-56 xl:w-56`}
        >
          <Image src={imagePicker(item.image)} alt={item.name} fill />
        </div>
      ) : null}
    </div>
  );
}
