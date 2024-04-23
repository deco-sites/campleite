import type { ProductDetailsPage } from "apps/commerce/types.ts";
import HorizontalProductCard from "deco-sites/campleite/components/product/HorizontalProductCard.tsx";
import Image from "apps/website/components/Image.tsx";
import { AppContext } from "deco-sites/campleite/apps/site.ts";

export interface Layout {
  maxWidth:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

export interface Props {
  productPage: ProductDetailsPage | null;

  layout: Layout;

  /** @description Ativar o zoom */
  animateImage: boolean;
}

export default function MyProduct(
  { productPage, layout, animateImage }: Props,
) {
  if (productPage === null) {
    return <div>Loading...</div>;
  }
  const { product } = productPage;

  return (
    <div class="lg:py-32 ">
      <HorizontalProductCard
        product={product}
        layout={layout}
        animateImage={animateImage}
      />
    </div>
  );
}

export const loader = (props: Props, req: Request, ctx: AppContext) => {
  if (props.productPage === null) {
    return <ErrorFallback error={new Error("Product not found")} />;
  }

  return {
    ...props,
  };
};

function ErrorFallback({ error }: { error?: Error }) {
  return (
    <div role="alert" class="container w-full px-5 ">
      <div class="w-full flex flex-col items-center gap-4 justify-center">
        <div>
          <Image
            src={`https://www.djapa.com.br/wp-content/uploads/2022/12/IMGP3634-980x654.jpg`}
            width={400}
            height={400}
            alt="Image error"
          />
          <h3 class="text-2xl font-semibold underline my-4">Comida Japonesa</h3>
          <p class="text-sm font-normal">
            Sushi: Preparado com arroz temperado com vinagre e combinado com
            peixe fresco, frutos do mar, vegetais ou ovo. Pode ser apresentado
            em formas como nigiri (fatia de peixe sobre arroz) ou maki (rolinho
            de alga com arroz e recheio).
          </p>
        </div>

        <div class="flex">
          <a href="/">
            <button class="btn text-sm">
              Descubra
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
