import React, { useState } from 'react';

function Likes({ likeData }) {
    const likes = likeData.upvotes;
    const dislikes = likeData.downvotes;
    const [addLikes, setAddLikes] = useState(likes)
    const [addDislikes, setAddDislikes] = useState(dislikes)

    function handleLikes(e) {
        setAddLikes(addLikes + 1)
    }

    function handleDislikes(e) {
        setAddDislikes(addDislikes + 1)
    }

    return (
        <div id="like-buttons">
            <button id="likes" onClick={handleLikes}>{addLikes}👍</button>
            <button id='dislikes' onClick={handleDislikes}>{addDislikes}👎</button>
        </div>
    )
}

export default Likes