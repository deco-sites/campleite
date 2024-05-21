export {
  default,
  loader,
} from "deco-sites/campleite/components/product/MyProduct.tsx";

export function LoadingFallback() {
  return (
    <div
      style={{ height: "527.73px" }}
      class="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto py-4 px-4"
    >
      <div class="flex items-center justify-center lg:w-1/3">
        <div class="w-200 h-279 bg-gray-300 animate-pulse rounded"></div>
      </div>

      <div class="lg:w-1/3 flex flex-col items-center justify-center">
        <div class="flex flex-col gap-5">
          <div class="h-6 bg-gray-300 animate-pulse w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-300 animate-pulse w-2/4"></div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center lg:w-1/3">
        <div class="flex flex-col gap-5">
          <div class="h-6 bg-gray-300 animate-pulse w-full"></div>
          <div class="h-4 bg-gray-300 animate-pulse w-3/4 mt-2"></div>
        </div>
      </div>

    </div>
  );
}
