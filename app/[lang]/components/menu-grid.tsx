import { Key } from "react"

export default function MenuGrid({ dictionary }: { dictionary: Record<string, any> }) {
    return (
        <>
        <div>
        <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.special}</h2>
            {dictionary.specials.map((item: any, index: Key) => {
                return (
                    <div key={index} className="mx-2 my-5 md:mx-10 lg:mx-20 flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                        <h2 className="font-karla text-3xl lg:text-4xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                        <span className="font-karla text-xl lg:text-2xl text-neutral-50">{item.description}</span>
                        <div className="flex flex-row flex-wrap gap-2 items-left justify-start">
                            {item.types ? item.types.map((type: any, index: Key) => {
                                return (
                                    <a className="font-karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg" key={index}>{type}</a>
                                )
                            }) : null}
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div>
        <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.carte}</h2>
            {dictionary.carte.map((item: any, index: Key) => {
                return (
                    <div key={index} className="mx-2 my-5 md:mx-10 lg:mx-20 flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                        <h2 className="font-karla text-3xl lg:text-4xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                        <span className="font-karla text-xl lg:text-2xl text-neutral-50">{item.description}</span>
                        <div className="flex flex-row flex-wrap gap-2 items-left justify-start">
                            {item.types ? item.types.map((type: any, index: Key) => {
                                return (
                                    <a className="font-karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg" key={index}>{type}</a>
                                )
                            }) : null}
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div>
        <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.entree}</h2>
            {dictionary.entrees.map((item: any, index: Key) => {
                return (
                    <div key={index} className="mx-2 my-5 md:mx-10 lg:mx-20 flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                        <h2 className="font-karla text-3xl lg:text-4xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                        <span className="font-karla text-xl lg:text-2xl text-neutral-50">{item.description}</span>
                        <div className="flex flex-row flex-wrap gap-2 items-left justify-start">
                            {item.types ? item.types.map((type: any, index: Key) => {
                                return (
                                    <a className="font-karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg" key={index}>{type}</a>
                                )
                            }) : null}
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div>
            <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.appetizer}</h2>
            {dictionary.appetizers.map((item: any, index: Key) => {
                return (
                    <div key={index} className="mx-2 my-5 md:mx-10 lg:mx-20 flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                        <h2 className="font-karla text-3xl lg:text-4xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                        <span className="font-karla text-xl lg:text-2xl text-neutral-50">{item.description}</span>
                        <div className="flex flex-row flex-wrap gap-2 items-left justify-start">
                            {item.types ? item.types.map((type: any, index: Key) => {
                                return (
                                    <a className="font-karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg" key={index}>{type}</a>
                                )
                            }) : null}
                        </div>
                    </div>
                )
            })
            }
        </div>
        <div>
            <h2 className="font-londrina_solid text-5xl lg:text-6xl font-bold text-neutral-50 text-center">{dictionary.menu.drink}</h2>
            {dictionary.drinks.map((item: any, index: Key) => {
                return (
                    <div key={index} className="mx-2 my-5 md:mx-10 lg:mx-20 flex flex-col items-left justify-center border p-5 rounded-xl bg-black bg-opacity-10">
                        <h2 className="font-karla text-3xl lg:text-4xl font-bold text-neutral-50">{item.name} - {item.price}</h2>
                        <span className="font-karla text-xl lg:text-2xl text-neutral-50">{item.description}</span>
                        <div className="flex flex-row flex-wrap gap-2 items-left justify-start">
                            {item.types ? item.types.map((type: any, index: Key) => {
                                return (
                                    <a className="font-karla text-lg lg:text-xl text-neutral-50 bg-black bg-opacity-20 p-1 rounded-lg" key={index}>{type}</a>
                                )
                            }) : null}
                        </div>
                    </div>
                )
            })
            }
        </div>
        </>
    )
}