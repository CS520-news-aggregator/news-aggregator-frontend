import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { HomeView, PostInfo, UserVotes } from "@/types";
import { useEffect, useState } from "react";
import { PostCardTitle } from "./PostCardTitle";
import { CustomCardFooter } from "./CustomCardFooter";

function PostCard(PostProp: {
  post: PostInfo;
  userVotes: UserVotes;
  authToken: string;
  setView: (state: HomeView) => void;
  setCurrentPost: (post: PostInfo) => void;
}) {
  const post = PostProp.post;
  const authToken = PostProp.authToken;
  const setCurrentPost = PostProp.setCurrentPost;
  const setView = PostProp.setView;
  const userVotes = PostProp.userVotes;

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    if (userVotes.postUpvotes.includes(post.id)) {
      setLiked(true);
    } else if (userVotes.postDownvotes.includes(post.id)) {
      setDisliked(true);
    }
  }, [userVotes])

  const handlePostClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setCurrentPost(post);
    setView(HomeView.Post);
  };

  return (
    <Card className="m-2 text-white bg-[#161616] hover:cursor-pointer">
      <div onClick={handlePostClick}>
        <CardHeader>
          <PostCardTitle post={post} />
          <CardDescription className="gap-4">
            <p>{post.author}</p> <p>{post.link}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </div>
      <CustomCardFooter
        id={post.id}
        authToken={authToken}
        liked={liked}
        disliked={disliked}
        setLiked={setLiked}
        setDisliked={setDisliked}
        isPost={true}
      />
    </Card>
  );
}

export default PostCard;
