import React, { useState } from "react";

function CommentButton({ comments }) {
    const {isButton, setIsButton} = useState(false)
    const [buttonText, setButtonText] = useState("Hide Comments")

    function handleButton(e) {
        console.log("Clicked")
        
        if (buttonText === "Hide Comments") {
            setButtonText("Show Comments")
        } else {
            setButtonText("Hide Comments")
        }

        comments(buttonText)
    }

    return (
        <div>
            <button id="hide-comments"onClick={handleButton}>
                {buttonText}
            </button>
        </div>
    )
}

export default CommentButton