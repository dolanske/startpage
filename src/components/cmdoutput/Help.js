import React from "react"
import CommandList from "../CommandList"

function Help(props) {
    let out;

    if (props.arg2 === undefined) {
        // If no second argument is passed, display the basic info
        out = CommandList[0].desc;
        out += CommandList.map(key => {
            return " "+key.command
        })
    } else {
        // If second argument is passed, get the command object and render its description
        out = CommandList.filter(key => {
            if (key.command === props.arg2) {
                return key
            } else {
                return
            }
        }).map(key => {
            return key.desc
        })

        // In case nothing is returned, display error message
        if (out.length === 0) {
            out = "Invalid argument."
        }
    }

    return <div>{out}</div>
}

export default Help
