export { default } from "deco-sites/campleite/components/ui/BannerTextImg.tsx";

export function LoadingFallback() {
    return (
      <div style={{ height: "621px" }} class="flex justify-center items-center animate-spin">
        <span  class="loading loading-spinner" />
      </div>
    );
  }
  