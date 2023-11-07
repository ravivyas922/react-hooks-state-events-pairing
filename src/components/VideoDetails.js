import React, {useState}from "react";
function VideoDetails({title, views, uploaded, upvotes, downvotes})
{
const [upVoteValue,setUpvoteValue] = useState(upvotes);
const [downVoteValue,setDownvoteValue] = useState(downvotes);

function handleUpVote()
{
setUpvoteValue((upVote) => upVote+1);
}

function handleDownVote()
{
setDownvoteValue((downVote) => downVote +1);
}

return(
<div id = "video-details">
    <h1>{title}</h1>
    <p>{views} Views | Uploaded: {uploaded}</p>    
    <button id = "upvote" onClick = {handleUpVote}>{upVoteValue}</button>
    <button id = "downvote" onClick = {handleDownVote}>{downVoteValue}</button>
    <br></br>
    <br></br>
    <button id = "hide-comments">Hide Comments</button>

</div>

);

}

export default VideoDetails;