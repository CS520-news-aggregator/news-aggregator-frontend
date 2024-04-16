import { CardFooter } from "@/components/ui/card";
// import { handeLike, handleDislike } from "@/utils/funcs";
import { BACKEND_URL } from "@/utils/constants";

export function CustomCardFooter(CardFooterProp: {
  id: string;
  authToken: string;
  liked: boolean;
  disliked: boolean;
  setLiked: (state: boolean) => void;
  setDisliked: (state: boolean) => void;
  isPost: boolean;
}) {
  const id = CardFooterProp.id;
  const authToken = CardFooterProp.authToken;
  const liked = CardFooterProp.liked;
  const disliked = CardFooterProp.disliked;
  const setLiked = CardFooterProp.setLiked;
  const setDisliked = CardFooterProp.setDisliked;
  const isPost = CardFooterProp.isPost;

  const handeLike = (id: string, authToken: string, isPost: boolean) => {
    console.log("here");
    const route = `upvote-${isPost ? "post?post_id" : "comment?comment_id"}`;
    if (liked) {
      setLiked(false);
      fetch(`${BACKEND_URL}/aggregator/remove-${route}=${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${authToken}` },
      });
    } else {
      setLiked(true);
      setDisliked(false);
      fetch(`${BACKEND_URL}/aggregator/${route}=${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${authToken}` },
      });
    }
  };
  const handleDislike = (id: string, authToken: string, isPost: boolean) => {
    const route = `downvote-${isPost ? "post?post_id" : "comment?comment_id"}`;
    if (disliked) {
      setDisliked(false);
      fetch(`${BACKEND_URL}/aggregator/remove-${route}=${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${authToken}` },
      });
    } else {
      setLiked(false);
      setDisliked(true);
      fetch(`${BACKEND_URL}/aggregator/${route}=${id}`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${authToken}` },
      });
    }
  };

  return (
    <CardFooter className="flex justify-between ">
      <div className="flex gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={liked ? "green" : "white"}
          className="w-6 h-6 hover:cursor-pointer"
          onClick={() => handeLike(id, authToken, isPost)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={disliked ? "red" : "white"}
          className="w-6 h-6 hover:cursor-pointer"
          onClick={() => handleDislike(id, authToken, isPost)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
          />
        </svg>
        {isPost && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
        />
      </svg>
    </CardFooter>
  );
}
