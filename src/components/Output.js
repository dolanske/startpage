import React, {Component} from "react"
import Help from "./cmdoutput/Help"
import Search from "./cmdoutput/Search"
import Youtube from "./cmdoutput/Youtube"
import See from "./cmdoutput/See"

class Output extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let cmd = sortInput(this.props.commands)
        let out = ""

        if (cmd.arg2 === undefined && cmd.arg1 != "help") {
            return (
                <p>Please enter second argument or type 'help {cmd.arg1}' for help</p>
            )
        } else {
            switch(cmd.arg1) {
                case "help":
                    return (<Help arg2={cmd.arg2} />)
                    break
                case "search":
                    return (<Search arg2={cmd.arg2} />)
                    break
                case "yt":
                    return (<Youtube arg2={cmd.arg2} />)
                    break
                case "see":
                    return (<See arg2={cmd.arg2} />)
                    break
                default:
                    return (
                        <p>Commnand doesn't exist</p>
                    )
            }
        }
    }
}

function sortInput(cmd) {
    if (cmd[0] === "") {
        return false
    } else {
        if (cmd[1] === "" || cmd[1] === undefined) {
            return { arg1: cmd[0] }
        } else {
            return {
                arg1: cmd[0],
                arg2: cmd[1]
            }
        }
    }
}

export default Output
