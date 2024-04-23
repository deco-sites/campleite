import { FnContext } from "deco/mod.ts";

export interface Prop {
  productId: string;
}

export default async function getProductVotes(
  prop: Prop,
  _req: Request,
  _ctx: FnContext,
) {
  const response = await fetch(
    `https://camp-api.deco.cx/event/${prop.productId, {
      headers: {
        "x-api-key": "teste123",
        "Content-Type": "application/json",
        "x-api-token": "deco-camp-leite",
      },
    }}`,
  );

  if (!response.ok) return { status: "failure" };

  const data = await response.json();

  return data;
}
