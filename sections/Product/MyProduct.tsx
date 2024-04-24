export {
  default,
  loader,
} from "deco-sites/campleite/components/product/MyProduct.tsx";

export function LoadingFallback() {
  return (
    <div style={{ height: "527.73px" }} class="flex justify-center items-center animate-spin">
      <span  class="loading loading-spinner" />
    </div>
  );
}
