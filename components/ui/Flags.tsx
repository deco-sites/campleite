import { Country } from "deco-sites/campleite/loaders/countries.ts";

export interface Props {
    title: string;
    countries:  Country[];
}



export default function Example({ title, countries}:Props){
    return(
        <div class=' flex flex-col itmes-center w-1/2 mx-auto gap-4  p-16'>
            <h1 class="py-10 textarea-lg">{title}</h1>

            { countries.map((country) => (
                <div class="rounded-lg w-full border flex gap-4 items-center bg-base-300 p-4">
                    <img src={country.media.flag} alt={country.name} class="h-12"/>
                    <p class="text-sm">{country.name}</p>
                </div>
            ))}
        </div>
    )
}