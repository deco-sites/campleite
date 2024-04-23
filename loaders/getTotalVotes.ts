import { FnContext } from "deco/mod.ts";

export interface Prop {
  data: string[];
}
export default async function getTotalVotes(
  _prop: Prop,
  _req: Request,
  _ctx: FnContext,
): Promise<Prop> {
  const response = await fetch("https://camp-api.deco.cx/events", {
    headers: {
      "x-api-key": "teste123",
      "Content-Type": "application/json",
      "x-api-token": "deco-camp-leite",
    },
  });

  if (!response.ok) return { data: [] };

  const data = await response.json();

  return data;
}
