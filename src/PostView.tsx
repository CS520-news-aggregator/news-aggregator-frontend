import { PostInfo, Comment } from "./types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { PostCardTitle } from "./custom/PostCardTitle";
import { CustomCardFooter } from "./custom/CustomCardFooter";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "./utils/constants";
import CommentCard from "./custom/CommentCard";

function PostView(PostViewProp: { post: PostInfo; authToken: string }) {
  const post: PostInfo = PostViewProp.post;
  const authToken = PostViewProp.authToken;

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/aggregator/get-comments?post_id=${post.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setComments((c) => [...c, json.comments]));
  });

  return (
    <Card className="overflow-y-scroll mt-3 rounded-md bg-[#161616] border-slate-200">
      <CardHeader className="text-white">
        <PostCardTitle post={post} />
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="text-white">
        <p>Card Content</p>
      </CardContent>

      <CustomCardFooter
        post={post}
        authToken={authToken}
        liked={liked}
        disliked={disliked}
        setLiked={setLiked}
        setDisliked={setDisliked}
      />
      {comments.map((comment) => (
        <CommentCard comment={comment}/>
      ))}
    </Card>
  );
}

export default PostView;
