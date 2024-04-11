// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Preferences from "./Preferences";

function App() {
  const [loginState, setLoginState] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [firstTimeUser, setFirstTimeUser] = useState(false);

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
          <h1>LOGGED IN SUCCESSFULLY</h1>
          <h2>Auth token is {authToken}</h2>
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
}

export default App;
