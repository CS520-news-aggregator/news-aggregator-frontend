// import { useState } from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login";

function App() {
  // const [count, setCount] = useState(0);

  const [loginState, setLoginState] = useState(false);
  const [authToken, setAuthToken] = useState("");

  if (loginState == false) {
    return (
      <>
        <Login setLoginState={setLoginState} setAuthToken={setAuthToken} />
      </>
    );
  }
  else {
    return (
      <>
        <h1>LOGGED IN SUCCESSFULLY</h1>
        <h2>Auth token is {authToken}</h2>
      </>
    )
  }
}

export default App;
