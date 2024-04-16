import { BACKEND_URL } from "./constants";

const numberFormatter = (num: number) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);

const handeLike = (
  id: string,
  authToken: string,
  liked: boolean,
  setLiked: (state: boolean) => void,
  setDisliked: (state: boolean) => void,
  isPost: boolean
) => {
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
const handleDislike = (
  id: string,
  authToken: string,
  disliked: boolean,
  setLiked: (state: boolean) => void,
  setDisliked: (state: boolean) => void,
  isPost: boolean
) => {
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

export { numberFormatter, handeLike, handleDislike };
