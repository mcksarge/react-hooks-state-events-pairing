import React, { useState } from "react";

function Comments({ user, comment }) {
    const likes = 0
    const dislikes = 0
    const [addLikes, setAddLikes] = useState(likes)
    const [addDislikes, setAddDislikes] = useState(dislikes)

    function handleLikes(e) {
        setAddLikes(addLikes + 1)
    }

    function handleDislikes(e) {
        setAddDislikes(addDislikes + 1)
    }
    
    return (
        <div id="comment">
            <h3 className="user">{user}</h3>
            <div className="comment">{comment}</div>
            <button id="likes" onClick={handleLikes}>{addLikes}👍</button>
            <button id='dislikes' onClick={handleDislikes}>{addDislikes}👎</button>
        </div>
    )
}

export default Comments