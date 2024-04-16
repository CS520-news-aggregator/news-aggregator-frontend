import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Comment } from "@/types";
import { BACKEND_URL } from "@/utils/constants";
import { useEffect, useRef } from "react";
import { UserAvatar } from "./UserAvatar";
import { numberFormatter } from "@/utils/funcs";

function CommentCard(CommentCardProp: { comment: Comment }) {
  const comment = CommentCardProp.comment;
  const author = useRef("");
  const authorAvatar = useRef(0);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    fetch(`${BACKEND_URL}/user/get-user?user_id=${comment.author_id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        author.current = json.username;
        authorAvatar.current = json.avatar;
      });
  });

  return (
    <>
      <Card>
        <CardHeader className="flex justify-between">
          {/* <CardTitle>This is comment</CardTitle> */}
          <div className="flex">
            <UserAvatar avatarIndex={authorAvatar.current} />
            <h1>{author.current}</h1>
          </div>
          <h2>
            {numberFormatter(Math.abs(comment.upvotes - comment.downvotes))}
          </h2>
        </CardHeader>
        <CardContent>
          <p>{comment.content}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default CommentCard;
