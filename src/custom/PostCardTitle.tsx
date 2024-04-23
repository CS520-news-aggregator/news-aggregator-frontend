import { CardTitle } from "@/components/ui/card";
import { PostInfo } from "@/types";
import { numberFormatter } from "@/utils/funcs";
import UpDownVotes from "./UpDownVotes";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@/utils/constants";

export function PostCardTitle(PostCardTitleProp: {
  post: PostInfo;
  liked: boolean;
  disliked: boolean;
}) {
  const post = PostCardTitleProp.post;
  const liked = PostCardTitleProp.liked;
  const disliked = PostCardTitleProp.disliked;
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [downvotes, setDownvotes] = useState(post.downvotes);
  const [agreementVal, setAgreementVal] = useState(upvotes - downvotes);

  useEffect(() => {
    fetch(`${BACKEND_URL}/annotator/get-aggregation?post_id=${post.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => json.post)
      .then((updatedPost) => {
        setUpvotes(updatedPost.upvotes);
        setDownvotes(updatedPost.downvotes);
        setAgreementVal(upvotes - downvotes);
      });
  }, [liked, disliked]);

  return (
    <CardTitle className="flex justify-between">
      <h1>{post.title}</h1>
      <div className="flex gap-2">
        {" "}
        <h3 className="text-lg">{numberFormatter(Math.abs(agreementVal))}</h3>
        <UpDownVotes
          upvotes={upvotes}
          downvotes={downvotes}
          width={4}
          height={4}
        />
      </div>
    </CardTitle>
  );
}
