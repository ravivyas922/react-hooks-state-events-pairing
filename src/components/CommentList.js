import React from "react";
import Comment from "./Comment";

function CommentList({comments})
{

const commentArray = comments.map((item) => {
    return <Comment key = {item.id} user = {item.user} comment = {item.comment}/> 
});

return (
<div>
<h1>{comments.length} comments</h1>
<ul>{commentArray}</ul>
</div>
);
}

export default CommentList; 