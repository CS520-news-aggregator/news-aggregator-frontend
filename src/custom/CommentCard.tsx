import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { Comment } from "@/types";
import { BACKEND_URL } from "@/utils/constants";
import { useEffect, useRef, useState } from "react";
import { UserAvatar } from "./UserAvatar";
import { numberFormatter } from "@/utils/funcs";
import { CustomCardFooter } from "./CustomCardFooter";

function CommentCard(CommentCardProp: { comment: Comment; authToken: string }) {
  const comment = CommentCardProp.comment;
  const authToken = CommentCardProp.authToken;
  const author = useRef("");
  const authorAvatar = useRef(0);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [gotData, setGotData] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/user/get-user?user_id=${comment.author_id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        author.current = json.username;
        authorAvatar.current = json.avatar;
        if (!gotData) {
          setGotData(true);
        }
      });
  }, [gotData]);

  return (
    <>
      <Card>
        <CardHeader className="flex justify-between">
          {/* <CardTitle>This is comment</CardTitle> */}
          <div className="flex">
            <UserAvatar avatarIndex={authorAvatar.current} />
            <h1>{author.current}</h1>
          </div>
          <div className="">
            {numberFormatter(Math.abs(comment.upvotes - comment.downvotes))}
          </div>
        </CardHeader>
        <CardContent>
          <p>{comment.content}</p>
        </CardContent>
        <CustomCardFooter
          id={comment.id}
          authToken={authToken}
          liked={liked}
          disliked={disliked}
          setLiked={setLiked}
          setDisliked={setDisliked}
          isPost={false}
        />
      </Card>
    </>
  );
}

export default CommentCard;
