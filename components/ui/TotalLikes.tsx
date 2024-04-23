import { h } from "preact";
import Icon from "deco-sites/campleite/components/ui/Icon.tsx";
import { useSignal, useSignalEffect } from "@preact/signals";
import { updateTotalVotes } from "deco-sites/campleite/components/ui/LikeButton.tsx";
import { invoke } from "deco-sites/campleite/runtime.ts";

export interface Props {
  initialVote?: number;
}

export default function TotalLikes({ initialVote = 0 }: Props) {
  const voteCount = useSignal(initialVote);

  useSignalEffect(() => {
    const interval = setInterval(() => {
      voteCount.value++;
    }, 30000);

    return () => clearInterval(interval);
  });

  useSignalEffect(() => {
    voteCount.value = updateTotalVotes.value;
  });

  return (
    <div class="flex items-center justify-center gap-4">
      <Icon id="friends" size={24} strokeWidth={2} />
      <span>{voteCount.value}</span>
    </div>
  );
}
