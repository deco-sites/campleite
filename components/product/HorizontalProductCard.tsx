import type { Product } from "apps/commerce/types.ts";
import { useOffer } from "deco-sites/campleite/sdk/useOffer.ts";
import Image from "apps/website/components/Image.tsx";
import AddToCartButtonVTEX from "deco-sites/campleite/islands/AddToCartButton/vtex.tsx";
import { usePlatform } from "deco-sites/campleite/sdk/usePlatform.tsx";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import { formatPrice } from "deco-sites/campleite/sdk/format.ts";

export interface Props {
  product: Product;
}

export default function HorizontalProductCard({ product }: Props) {
  const platform = usePlatform();

  if (!product) return null;

  const { url, productID, name, image: images, offers, isVariantOf } = product;
  const description = product.description || isVariantOf?.description;

  const [front, back] = images ?? [];
  const { listPrice, price = 0, installments, availability, seller = "1" } =
    useOffer(offers);

  const eventItem = mapProductToAnalyticsItem({
    product,
    price,
    listPrice,
  });

  return (
    <div class="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto py-4 px-4">
      <div class="flex items-center justify-center lg:w-1/3">
        <a href={url} alt="link to product">
          <Image
            src={front.url!}
            width={200}
            height={279}
            alt={name}
            class="bg-base-100 col-span-full row-span-full rounded w-full"
            sizes="(max-width: 640px) 50vw, 20vw"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>

      <div class="lg:w-1/3 flex flex-col items-center justify-center">
        <div class="flex flex-col gap-5">
          <h3 class="text-center text-2xl font-bold">{name}</h3>
          <p class="text-center text-sm">{description}</p>
        </div>
      </div>

      <div class=" flex flex-col items-center justify-center lg:w-1/3">
        <div class="flex flex-col gap-5">
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              {(listPrice ?? 0) > price && (
                <span class="line-through text-base-300 text-xs">
                  {formatPrice(listPrice, offers?.priceCurrency)}
                </span>
              )}
              <span class="font-medium text-xl text-secondary">
                {formatPrice(price, offers?.priceCurrency)}
              </span>
            </div>
            <span class="text-sm text-base-300">{installments}</span>
          </div>
          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2">
            {availability
              ? (
                <>
                  {platform === "vtex" && (
                    <>
                      <AddToCartButtonVTEX
                        eventParams={{ items: [eventItem] }}
                        productID={productID}
                        seller={seller}
                      />
                    </>
                  )}
                </>
              )
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
