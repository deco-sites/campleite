import { FnContext } from "deco/mod.ts";
export interface Props {
  productId: string;
  total: number;
}

export default async function sendVote(
  props: Props,
  _req: Request,
  _ctx: FnContext,
) {
  const response = await fetch("https://camp-api.deco.cx/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "deco-camp-leite",
    },
    body: JSON.stringify({
      "productId": props.productId,
      "total": props.total,
    }),
  });

  if (response.ok) {
    return { status: "ok" };
  } else {
    return { status: "failure" };
  }
}
