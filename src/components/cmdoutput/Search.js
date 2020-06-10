import React from "react"
import { getValidUrl } from '../Utilities.js';

function Search(props) {
    let arg2 = props.arg2;
    let out;

    if (arg2.indexOf('.') !== -1) {
        window.open(getValidUrl(props.arg2), '_blank')
    } else {
        window.open("//" + "google.com/search?q=" + props.arg2, '_blank')
    }

    out = "Opened new tab and searched for: "+props.arg2

    return <div>{out}</div>
}

export default Search
