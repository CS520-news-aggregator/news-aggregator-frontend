import React, { useState } from "react";
import { loginInfo } from "./types.ts";

function Login(loginProps: loginInfo) {
  const setToken = loginProps.setAuthToken;
  const setLoginState = loginProps.setLoginState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn(event: React.SyntheticEvent) {
    event.preventDefault();

    // send fetch POST to backend to verify user and get back authentication token
    fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({ email_address: email, password: password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        setToken(json.token);
        setLoginState(true);
      })
      .catch(() => alert("Could not sign in"));
  }

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <h1 className="text-5xl font-bold text-left tracking-wide">
            News. All Sides. Your Discussion.
          </h1>
          <p className="text-3xl my-4">
            Join the Conversation. Get the Full Picture.
          </p>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
        style={{ backgroundColor: "#161616" }}
      >
        <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className="my-6 font-anton text-8xl">Agora</h1>
          <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-sm bg-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded-sm bg-black"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={email}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
              <a href="#">Forgot your password?</a>
            </div>
            <div className="px-4 pb-2 pt-4">
              <button
                className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none"
                onClick={handleSignIn}
              >
                sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
