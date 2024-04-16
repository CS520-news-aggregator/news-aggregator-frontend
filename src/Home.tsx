import { useState, useEffect } from "react";
import { HomeInfo, PostInfo, HomeView } from "./types";
import { BACKEND_URL, SAMPLE_POSTS } from "./utils/constants";
import PostCard from "./custom/PostCard";
import { HomeProfile } from "./custom/HomeProfile";
import PostView from "./PostView";

function Home(HomeProps: HomeInfo) {
  const authToken = HomeProps.authToken;
  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [view, setView] = useState<HomeView>(HomeView.Post);

  // let posts: Post[];
  // TEST POSTS
  useEffect(() => {
    setPosts(SAMPLE_POSTS);
  }, []);

  // useEffect(() => {
  //   // fetch home data inside here
  //   fetch(`${BACKEND_URL}/recommender/get-recommendations`, {
  //     method: "GET",
  //     headers: {
  // Authorization: `Bearer ${authToken}`,
  // }
  //   })
  //     .then((res) => res.json())
  //     .then((json) => {
  //       json.forEach((post) => setPosts([...posts, post]));
  //     });
  //   return () => setPosts([]);
  // }, []);

  const topHeader = (
    <div className="flex justify-between bg-[rgb(22,22,22)] pb-3 sticky top-0">
      <h1 className="font-anton text-4xl mt-7 ml-10 text-white">AGORA</h1>
      <div className="w-2/3 h-1/2 rounded-sm border-gray-500 mt-7 flex justify-center">
        <input className=" w-10/12 text-lg rounded-sm focus:outline-none bg-slate-600 text-white p-2"></input>
        <img
          src="./search-btn.png"
          className="h-5/6 ml-1 hover:cursor-pointer"
          alt="search"
          onClick={() => console.log("ok")}
        ></img>
      </div>
      <HomeProfile side="right" />
    </div>
  );

  const contentView = (
    <div className="flex-row overflow-y-scroll">
      {posts.map((post) => (
        <PostCard post={post} authToken={authToken} />
      ))}
    </div>
  );

  return (
    <>
      <div className="grid grid-rows-home h-screen max-h-screen ">
        {topHeader}
        <div className="bg-gradient-to-b from-[#161616] to-slate-900 grid grid-cols-home rounded-sm">
          <div className=""></div>
          {view == HomeView.Content ? (
            contentView
          ) : (
            <PostView post={SAMPLE_POSTS[0]} authToken={authToken} />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
