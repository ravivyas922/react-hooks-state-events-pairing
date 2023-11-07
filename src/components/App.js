import React from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import CommentList from "./CommentList.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
     <VideoDetails title = {video.title} views = {video.views} uploaded = {video.createdAt} 
     upvotes = {video.upvotes} downvotes = {video.downvotes}/>
     <br></br>
     <CommentList comments = {video.comments}/> 
    </div>
  );
}

export default App;

