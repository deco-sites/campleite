
import {  FnContext } from "deco/mod.ts";

export interface Quotes {
    data: string[]; 
}

export interface Prop {
    quantity?: number; 
}

/**
 * Fetches a random quote from the ZenQuotes API and returns it.
 *
 * @param prop - An optional object with a `quantity` property that specifies the number of quotes to fetch.
 * @returns A `Quotes` object containing the fetched quote(s).
 */
export default async function zenquotes(
  prop: Prop,
  _req: Request,
  _ctx: FnContext,
): Promise<Quotes> {
  const quantity = prop.quantity ?? 1;
  const promises = Array.from({ length: quantity }).map(() =>
    fetch("https://zenquotes.io/api/random")
  );

  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((res) => res.json()));
  return { data: data.map((quote) => quote[0].q) };
}
