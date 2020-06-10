import React from "react"
import { isValidURL } from '../Utilities.js';

function Youtube(props) {
    let out;

    if (isValidURL(props.arg2)) {
        out = "Please dont search with url. Use the search command."
    } else {
        let arg2 = props.arg2.replace(/\s+/g, '+').toLowerCase();
        window.open("//" + "youtube.com/results?search_query=" + arg2, '_blank')
        out = "Opened new tab in youtube searched for: "+ props.arg2
    }

    return <div>{out}</div>
}

export default Youtube
