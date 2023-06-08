import React from "react";
import { useParams } from "react-router-dom";

const DisplayText = (props) => {
    const { text } = useParams();
    if (isNaN(text)) {
        console.log(text);
        return (
            <h1>The word is: {text}</h1>
        )
    } else {
        return (
            <h1>The number is: {text}</h1>
        )
    }

}

export default DisplayText;