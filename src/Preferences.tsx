import { TOPICS } from "./utils/constants";
import { useState } from "react";

function Preferences() {
  const [currentTopics, setCurrentTopics] = useState([]);

  return (
    <>
      <div className="bg-slate-600 w-screen h-screen flex items-center ">
        <div className="overflow-y-scroll overflow-x-hidden top-10 h-5/6 w-4/5 mx-auto bottom-10 grid grid-flow-row grid-rows-2 bg-slate-700">
          <div className="flex">
            <h1 className="font-anton m-5 text-3xl ">
              Select at least 5 topics you're interested in
            </h1>
            <p className="">x</p>
          </div>
          <div className=" grid grid-cols-5">
            {TOPICS.map((topic) => (
              <div className="relative w-auto h-5 border-black border-2 m-5">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Preferences;
