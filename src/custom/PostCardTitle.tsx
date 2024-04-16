import { CardTitle } from "@/components/ui/card";
import { PostInfo } from "@/types";
import { numberFormatter } from "@/utils/funcs";

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
        {post.upvotes >= post.downvotes ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.0}
            stroke="currentColor"
            className="w-4 h-4 mt-2"
            color="green"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.0}
            stroke="currentColor"
            className="w-4 h-4 mt-2"
            color="red"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        )}
      </div>
    </CardTitle>
  );
}
