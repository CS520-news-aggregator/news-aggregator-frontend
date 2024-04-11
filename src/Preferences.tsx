import { TOPICS } from "./utils/constants";
import { useState } from "react";
import { BACKEND_URL } from "./utils/constants";
import { PreferencesInfo } from "./types";

function Preferences(PreferencesProps: PreferencesInfo) {
  const authToken = PreferencesProps.authToken;
  const setFirstTimeUser = PreferencesProps.setFirstTimeUser;
  const [currentTopics, setCurrentTopics] = useState<string[]>([]);

  /*
background-color: #8BC6EC;
background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);

*/

  const handleTopicSelection = (event: React.SyntheticEvent, topic: string) => {
    event.preventDefault();
    if (currentTopics.includes(topic)) {
      console.log("trying to remove");
      setCurrentTopics(currentTopics.filter((t) => t !== topic));
    } else {
      setCurrentTopics([...currentTopics, topic]);
      console.log("added");
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (currentTopics.length < 5) {
      alert("Not enough topics selected");
    } else {
      fetch(`${BACKEND_URL}/user/add-preferences`, {
        method: "POST",
        body: JSON.stringify({ preferences: currentTopics }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then(() => setFirstTimeUser(false))
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="bg-gradient-to-b from-indigo-500 via-indigo-600 to-indigo-700 background-animate w-screen h-screen flex items-center ">
        <div className="overflow-y-scroll overflow-x-hidden top-5 h-5/6 w-4/5 relative mx-auto bottom-10 bg-slate-700 text-white rounded-md">
          <div className="font-anton m-10">
            <h1 className="font-anton text-4xl mb-2">Hello!</h1>
            <h1 className="font-anton text-3xl">
              Select at least 5 topics you're interested in.
            </h1>
          </div>
          <div className=" grid grid-cols-5 m-5">
            {TOPICS.map((topic) => (
              <div
                id={topic}
                className={`${
                  !currentTopics.includes(topic)
                    ? "bg-cyan-600 hover:bg-cyan-700"
                    : "bg-red-600 hover:bg-red-700"
                } flex flex-col w-auto border-black border-1 h-14 text-center justify-center align-middle rounded-lg m-5 font-sans`}
                onClick={(e) => handleTopicSelection(e, topic)}
              >
                <div className="m-2">{topic} </div>
              </div>
            ))}
          </div>
          <button
            className="m10 bg-cyan-700 hover:bg-cyan-800 absolute bottom-0 right-0 w-24 m-5 p-2 text-xl rounded-lg font-anton md:tracking-wider"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Preferences;
