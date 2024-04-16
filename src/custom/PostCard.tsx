import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { PostInfo } from "@/types";
import { useState } from "react";
import { PostCardTitle } from "./PostCardTitle";
import { PostCardFooter } from "./PostCardFooter";

function PostCard(PostProp: { post: PostInfo; authToken: string }) {
  const post = PostProp.post;
  const authToken = PostProp.authToken;

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  return (
    <Card className="m-2 text-white bg-[#161616]">
      <CardHeader>
        <PostCardTitle post={post} />
        <CardDescription className="gap-4">
          <p>{post.author}</p> <p>{post.link}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>

      <PostCardFooter
        post={post}
        authToken={authToken}
        liked={liked}
        disliked={disliked}
        setLiked={setLiked}
        setDisliked={setDisliked}
      />
    </Card>
  );
}

export default PostCard;
