import { useState } from "react";
import { loginInfo } from "./types.ts";
import SignInForm from "./SignInForm.tsx";
import RegisterForm from "./RegisterForm.tsx";

function Login(loginProps: loginInfo) {
  const setAuthToken = loginProps.setAuthToken;
  const setLoginState = loginProps.setLoginState;
  const setFirstTimeUser = loginProps.setFirstTimeUser;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleRegister, setToggleRegister] = useState(false);

  return (
    <section
      id="full-body"
      className="min-h-screen flex items-stretch text-white "
    >
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
          <SignInForm
            setAuthToken={setAuthToken}
            setLoginState={setLoginState}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            toggleRegister={toggleRegister}
            setToggleRegister={setToggleRegister}
          />
          <RegisterForm
            setAuthToken={setAuthToken}
            setLoginState={setLoginState}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            toggleRegister={toggleRegister}
            setToggleRegister={setToggleRegister}
            setFirstTimeUser={setFirstTimeUser}
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
