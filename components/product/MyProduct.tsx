import type { ProductDetailsPage } from "apps/commerce/types.ts";
import HorizontalProductCard from "deco-sites/campleite/components/product/HorizontalProductCard.tsx";

export interface Props {
  productPage: ProductDetailsPage | null;
}

export default function MyProduct({ productPage }: Props) {
  if (productPage === null) {
    return <div>Loading...</div>;
  }
  const { product } = productPage;

  return (
    <div class="lg:py-32 ">
      <HorizontalProductCard product={product} />
    </div>
  );
}
