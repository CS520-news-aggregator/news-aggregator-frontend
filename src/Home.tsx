import { useState, useEffect } from "react";
import { HomeInfo, PostInfo, HomeView, UserInfo, UserVotes } from "./types";
import { BACKEND_URL } from "./utils/constants";
import PostCard from "./custom/PostCard";
import { HomeProfile } from "./custom/HomeProfile";
import PostView from "./PostView";

function Home(HomeProps: HomeInfo) {
  const authToken = HomeProps.authToken;
  const setLoginState = HomeProps.setLoginState;

  const [posts, setPosts] = useState<PostInfo[]>([]);
  const [view, setView] = useState<HomeView>(HomeView.Content);
  const [currentPost, setCurrentPost] = useState<PostInfo>();
  const [userProfile, setUserProfile] = useState<UserInfo>({
    username: "Loading",
    email: "Loading",
    avatarIndex: 0,
  });
  const [userVotes, setUserVotes] = useState<UserVotes>({
    postUpvotes: [],
    postDownvotes: [],
    commentUpvotes: [],
    commentDownvotes: [],
  });

  useEffect(() => {
    // fetch home data inside here
    fetch(`${BACKEND_URL}/recommender/get-recommendations`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // const postIds = json.list_recommendations;
        // Promise.all(postIds.map((postId: string) => getPost(postId))).then(
        //   (posts) => {
        //     setPosts(posts);
        //   }
        // );
        
        setPosts(json["list_recommendations"])
      });

    fetch(`${BACKEND_URL}/user/view`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        const user = json.user;
        setUserProfile({
          email: user.email_address,
          username: user.username,
          avatarIndex: user.avatar,
        });

        const userVotes = json.votes;
        setUserVotes({
          postUpvotes: userVotes.list_of_posts_upvotes,
          postDownvotes: userVotes.list_of_posts_downvotes,
          commentUpvotes: userVotes.list_of_comments_upvotes,
          commentDownvotes: userVotes.list_of_comments_downvotes,
        });
      });
  }, [view]);

  // async function getPost(postId: string) {
  //   return fetch(
  //     `${BACKEND_URL}/recommender/get-recommendations?post_id=${postId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${authToken}`
  //       }
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const post = json.post;
  //       console.log(post);
  //       return post;
  //     });
  // }

  const handleLogoClick = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setView(HomeView.Content);
  };

  const topHeader = (
    <div className="flex justify-between bg-[rgb(22,22,22)] pb-3 sticky top-0 z-50">
      <h1
        className="font-anton text-4xl mt-7 ml-10 text-white hover:cursor-pointer"
        onClick={handleLogoClick}
      >
        AGORA
      </h1>
      <div className="w-2/3 h-1/2 rounded-sm border-gray-500 mt-7 flex justify-center">
        <input className=" w-10/12 text-lg rounded-sm focus:outline-none bg-slate-600 text-white p-2"></input>
        <img
          src="./search-btn.png"
          className="h-5/6 ml-1 hover:cursor-pointer"
          alt="search"
          onClick={() => console.log("ok")}
        ></img>
      </div>
      <HomeProfile
        side="right"
        avatarIndex={userProfile.avatarIndex}
        userProfile={userProfile}
        setLoginState={setLoginState}
      />
    </div>
  );

  const contentView = (
    <div className="flex-row ">
      {posts.map((post) => (
        <PostCard
          post={post}
          authToken={authToken}
          userVotes={userVotes}
          setView={setView}
          setCurrentPost={setCurrentPost}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className="grid grid-rows-home h-screen max-h-screen overflow-y-scroll">
        {topHeader}
        <div className="bg-gradient-to-b from-[#161616] to-slate-900 grid grid-cols-home rounded-sm">
          <div className=""></div>
          {view == HomeView.Content ? (
            contentView
          ) : posts.length === 0 ? (
            <></>
          ) : (
            <PostView
              post={currentPost}
              authToken={authToken}
              userVotes={userVotes}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
