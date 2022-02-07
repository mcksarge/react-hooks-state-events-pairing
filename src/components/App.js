import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import Title from "./Title";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video videoData={ video } />
      <Title videoData={ video } />
    </div>
  );
}

export default App;
