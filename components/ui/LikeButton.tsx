import Icon from "deco-sites/campleite/components/ui/Icon.tsx";
import { signal, useSignal, useSignalEffect } from "@preact/signals";
import { invoke } from "deco-sites/campleite/runtime.ts";

export interface Props {
  initialVoteCount?: number;
  productGroupID?: string;
}

export const updateTotalVotes = signal(0);

export default function LikeButton(
  { initialVoteCount = 0, productGroupID }: Props,
) {
  const liked = useSignal(false);
  const voteCount = useSignal(initialVoteCount);

  const handleUpdateTotalVotes = async (
    voteCount: number,
    productGroupID: string,
  ) => {
    updateTotalVotes.value = voteCount;
    await invoke["deco-sites/campleite"].actions.sendVote({
      total: voteCount,
      productId: productGroupID,
    });
  };

  const addLiked = (productGroupID: string) => {
    voteCount.value++;
    handleUpdateTotalVotes(voteCount.value, productGroupID);
  };

  const removeLiked = (productGroupID: string) => {
    if (voteCount.value > 0) {
      voteCount.value--;
    }
    handleUpdateTotalVotes(voteCount.value, productGroupID);
  };

  const handleClick = () => {
    liked.value = !liked.value;
    if (liked.value) {
      addLiked(productGroupID || "");
    } else {
      removeLiked(productGroupID || "");
    }
  };

  return (
    <div onClick={handleClick} class="flex">
      <button
        class="btn flex gap-6 items-center justify-center"
        style={{ color: liked.value ? "blue" : "" }}
      >
        <Icon
          id={`${liked.value ? "moodCheck" : "moodSmile"}`}
          size={24}
          strokeWidth={2}
        />
        <span class="font-bold">{voteCount.value}</span>
      </button>
    </div>
  );
}
