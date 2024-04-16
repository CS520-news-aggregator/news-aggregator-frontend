import { CardTitle } from "@/components/ui/card";
import { PostInfo } from "@/types";
import { numberFormatter } from "@/utils/funcs";
import UpDownVotes from "./UpDownVotes";

export function PostCardTitle(PostCardTitleProp: { post: PostInfo }) {
  const post = PostCardTitleProp.post;
  return (
    <CardTitle className="flex justify-between">
      <h1>{post.title}</h1>
      <div className="flex gap-2">
        {" "}
        <h3 className="text-lg">
          {numberFormatter(Math.abs(post.upvotes - post.downvotes))}
        </h3>
        <UpDownVotes
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          width={4}
          height={4}
        />
      </div>
    </CardTitle>
  );
}
