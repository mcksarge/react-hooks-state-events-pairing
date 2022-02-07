import React, { useState } from "react";
import Likes from "./Likes";
import CommentButton from "./CommentButton";
import CommentList from "./CommentList";


function Title({ videoData }) {
    const vidTitle = videoData.title;
    const views = videoData.views;
    const uploadDate = videoData.createdAt;
    const [hideComments, setHideComments] = useState(<CommentList commentData={videoData.comments} />)


    function handleComments(e) {
        if (e === "Hide Comments"){
            setHideComments("")
        } else if (e === "Show Comments"){
            setHideComments(<CommentList commentData={videoData.comments} />)
        }
    }

    return (
        <div>    
            <h1>{vidTitle}</h1>
            <p>{views} Views | Uploaded {uploadDate}</p>
            <Likes likeData={videoData} />
            <CommentButton comments={handleComments}/>
            <hr></hr>
            {hideComments}
        </div>
    )
}

export default Title