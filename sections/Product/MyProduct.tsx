export {
  default,
  loader,
} from "deco-sites/campleite/components/product/MyProduct.tsx";

export function LoadingFallback() {
  return (
    <div style={{ height: "491px" }} class="flex justify-center items-center">
      <div class="flex flex-col lg:flex-row w-full max-w-screen-xl mx-auto py-4 px-4">
        <div class="flex items-center justify-center lg:w-1/3">
          <div class="skeleton bg-zinc-500 w-96 h-96 rounded-full"></div>
        </div>

        <div class="lg:w-1/3 flex flex-col items-center justify-center">
          <div class="flex flex-col gap-5">
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
          </div>
        </div>

        <div class=" flex flex-col items-center justify-center lg:w-1/3"></div>
      </div>
    </div>
  );
}
