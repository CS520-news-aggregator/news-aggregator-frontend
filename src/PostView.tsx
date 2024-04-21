import { PostInfo, Comment, UserVotes } from "./types";

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
import UserCommentBox from "./custom/UserCommentBox";

function PostView(PostViewProp: {
  post: PostInfo;
  userVotes: UserVotes;
  authToken: string;
}) {
  const post: PostInfo = PostViewProp.post;
  const authToken = PostViewProp.authToken;
  const userVotes = PostViewProp.userVotes;

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (userVotes.postUpvotes.includes(post.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }

    if (userVotes.postDownvotes.includes(post.id)) {
      setDisliked(true);
    } else {
      setDisliked(false);
    }
  }, [userVotes]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/aggregator/get-comments?post_id=${post.id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setComments(() => [...json.comments]));
  }, [newComment]);

  return (
    <Card className="overflow-y-scroll mt-3 rounded-md bg-[#161616] border-slate-200">
      <CardHeader className="text-white">
        <PostCardTitle post={post} liked={liked} disliked={disliked} />
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent className="text-white flex-row">
        <div className="flex justify-center">
          <img src={post.media} alt="" width={"75%"} />
        </div>
        <p>Card Content</p>
      </CardContent>

      <CustomCardFooter
        id={post.id}
        authToken={authToken}
        liked={liked}
        disliked={disliked}
        setLiked={setLiked}
        setDisliked={setDisliked}
        isPost={true}
      />
      <UserCommentBox
        authToken={authToken}
        newComment={newComment}
        setNewComment={setNewComment}
        postId={post.id}
      />
      {comments.map((comment) => (
        <CommentCard
          comment={comment}
          authToken={authToken}
          userVotes={userVotes}
        />
      ))}
    </Card>
  );
}

export default PostView;
