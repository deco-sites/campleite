import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { Country } from "deco-sites/campleite/loaders/countries.ts";

import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Image {
  image: ImageWidget;
  alt: string;
}
export interface Props {
  images: Image[];
  itemsPerPage: number;
}
export default function PartialImageGallery(
  { images, itemsPerPage = 3 }: Props & { currentPage: number },
) {
  if (images.length <= 0) return null;

  const visibleImages = images.slice(0, itemsPerPage);

  const hasMoreImages = images.length > itemsPerPage;

  return (
    <div class="w-full flex flex-col items-center justify-center">
      <p class="text-2xl font-bold text-primary">Gallery Images</p>
      <div class="container px-5">
        <ul class="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
          {visibleImages.map((image, index) => (
            <li
              key={index}
              class="flex items-center justify-center w-full overflow-hidden"
            >
              <Image
                src={image.image}
                alt={image.alt}
                width={400}
                height={400}
                class="w-full h-full cursor-pointer hover:scale-125  transition-all duration-500 ease-in-out"
              />
            </li>
          ))}
        </ul>

        {hasMoreImages && (
          <div class={`flex w-full  items-center justify-center mt-4`}>
            <button
              class={`btn cursor-pointer`}
              {...usePartialSection({
                props: { itemsPerPage: itemsPerPage + itemsPerPage },
              })}
            >
              ver mais
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
