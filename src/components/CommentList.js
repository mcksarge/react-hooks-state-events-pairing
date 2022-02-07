import React from "react";
import Comments from "./Comments";

function CommentList({ commentData }) {
    const numComments = commentData.length

    const allComments = commentData.map((comment) => {
        return (
            <Comments
                key={comment.id}
                user={comment.user}
                comment={comment.comment}
            />
        )
    })


    return (
        <div id="comment-section">
            <h2>
              {numComments} Comments 
            </h2>
            {allComments}
        </div>
    )
}

export default CommentList