// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Preferences from "./Preferences";
import Home from "./Home";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [firstTimeUser, setFirstTimeUser] = useState(false);

  // TODO - Persist login state through refresh
  if (loginState == false) {
    return (
      <>
        <Login
          setLoginState={setLoginState}
          setAuthToken={setAuthToken}
          setFirstTimeUser={setFirstTimeUser}
        />
      </>
    );
  } else {
    // TODO - Get first time user status from backend
    if (firstTimeUser) {
      return (
        <>
          <Preferences
            authToken={authToken}
            setFirstTimeUser={setFirstTimeUser}
          />
        </>
      );
    } else {
      return (
        <>
        <Home authToken={authToken} />
        </>
      );
    }
  }

  // TESTING Preferences
  // return (
  //   <>
  //     <Preferences authToken={authToken} setFirstTimeUser={setFirstTimeUser} />
  //   </>
  // );

  // TESTING Home
  // return (
  //   <>
  //   <Home authToken={authToken}/>
  //   </>
  // );
}

export default App;
