import { Key } from "react"
import Image from "next/image"
import choripollo from "@/public/choripollo.jpeg"


const menuItemStyle = "lg:w-1/3 flex flex-col items-left justify-start border p-5 rounded-xl bg-black bg-opacity-10";
const menuItemTitleStyle = "font-karla text-3xl lg:text-3xl font-bold text-neutral-50";
const menuItemDescriptionStyle = "font-karla text-xl lg:text-xl text-neutral-50";
const menuItemVarietyContainerStyle = "flex flex--row flex-wrap gap-2 items-left justify-start";
const menuItemVarietyStyle = "font--karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg";


export function LooseMenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
    return (
        <>
            <div className="flex flex-wrap">
                {dictionary.carte.map((item: any, index: Key) => {
                    return (
                        <div key={index} className={menuItemStyle}>
                            <h2 className={menuItemTitleStyle}>{item.name} - {item.price}</h2>
                            <div>
                                <div>
                                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                                    <div className={menuItemVarietyContainerStyle}>
                                        {item.types ? item.types.map((type: any, index: Key) => {
                                            return (
                                                <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                            )
                                        }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {dictionary.specials.map((item: any, index: Key) => {
                    return (
                        <div key={index} className={menuItemStyle}>
                            <h2 className={menuItemTitleStyle}>{item.name} - {item.price}</h2>
                            <div>
                                <div>
                                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                                    <div className={menuItemVarietyContainerStyle}>
                                        {item.types ? item.types.map((type: any, index: Key) => {
                                            return (
                                                <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                            )
                                        }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {dictionary.entrees.map((item: any, index: Key) => {
                    return (
                        <div key={index} className={menuItemStyle}>
                            <h2 className={menuItemTitleStyle}>{item.name} - {item.price}</h2>
                            <div>
                                <div>
                                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                                    <div className={menuItemVarietyContainerStyle}>
                                        {item.types ? item.types.map((type: any, index: Key) => {
                                            return (
                                                <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                            )
                                        }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {dictionary.appetizers.map((item: any, index: Key) => {
                    return (
                        <div key={index} className={menuItemStyle}>
                            <h2 className={menuItemTitleStyle}>{item.name} - {item.price}</h2>
                            <div>
                                <div>
                                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                                    <div className={menuItemVarietyContainerStyle}>
                                        {item.types ? item.types.map((type: any, index: Key) => {
                                            return (
                                                <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                            )
                                        }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {dictionary.drinks.map((item: any, index: Key) => {
                    return (
                        <div key={index} className={menuItemStyle}>
                            <h2 className={menuItemTitleStyle}>{item.name} - {item.price}</h2>
                            <div>
                                <div>
                                    <span className={menuItemDescriptionStyle}>{item.description}</span>
                                    <div className={menuItemVarietyContainerStyle}>
                                        {item.types ? item.types.map((type: any, index: Key) => {
                                            return (
                                                <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                            )
                                        }) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}
/**/

const images = {
    "choripollo": choripollo
}

export function StructureMenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
    return (
        <>
            <div className="flex flex-wrap sm:mx-10 lg:mx-36">
                <div className="w-full box-border">
                    <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.special}</h2>
                    {dictionary.specials.map((item: any, index: Key) => {
                        return (
                            <div key={index} className="mx-2 my-5  flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                                <h2 className="font-karla text-2xl lg:text-3xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                                <div className="flex w-full h-full">
                                    <div className="">
                                        <span className={menuItemDescriptionStyle}>{item.description}</span>
                                        <div className={menuItemVarietyContainerStyle}>
                                            {item.types ? item.types.map((type: any, index: Key) => {
                                                return (
                                                    <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                                )
                                            }) : null}
                                        </div>
                                    </div>
                                    {/*item.image ? <div className=""><Image src={images[item.image]} alt={item.name} className="object-contain" height={150} width={150} /></div> : null*/}
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="w-full box-border">
                    <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.carte}</h2>
                    {dictionary.carte.map((item: any, index: Key) => {
                        return (
                            <div key={index} className="mx-2 my-5   flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                                <h2 className="font-karla text-2xl lg:text-3xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                                <div>
                                    <div>
                                        <span className={menuItemDescriptionStyle}>{item.description}</span>
                                        <div className={menuItemVarietyContainerStyle}>
                                            {item.types ? item.types.map((type: any, index: Key) => {
                                                return (
                                                    <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                                )
                                            }) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full">
                    <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.entree}</h2>
                    {dictionary.entrees.map((item: any, index: Key) => {
                        return (
                            <div key={index} className="mx-2 my-5   flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                                <h2 className="font-karla text-2xl lg:text-3xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                                <div>
                                    <div>
                                        <span className={menuItemDescriptionStyle}>{item.description}</span>
                                        <div className={menuItemVarietyContainerStyle}>
                                            {item.types ? item.types.map((type: any, index: Key) => {
                                                return (
                                                    <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                                )
                                            }) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full">
                    <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.appetizer}</h2>
                    {dictionary.appetizers.map((item: any, index: Key) => {
                        return (
                            <div key={index} className="mx-2 my-5   flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                                <h2 className="font-karla text-2xl lg:text-3xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                                <div>
                                    <div>
                                        <span className={menuItemDescriptionStyle}>{item.description}</span>
                                        <div className={menuItemVarietyContainerStyle}>
                                            {item.types ? item.types.map((type: any, index: Key) => {
                                                return (
                                                    <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                                )
                                            }) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-full">
                    <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.drink}</h2>
                    {dictionary.drinks.map((item: any, index: Key) => {
                        return (
                            <div key={index} className="mx-2 my-5 flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                                <h2 className="font-karla text-2xl lg:text-3xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                                <div>
                                    <div>
                                        <span className={menuItemDescriptionStyle}>{item.description}</span>
                                        <div className={menuItemVarietyContainerStyle}>
                                            {item.types ? item.types.map((type: any, index: Key) => {
                                                return (
                                                    <a className={menuItemVarietyStyle} key={index}>{type}</a>
                                                )
                                            }) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

/**/