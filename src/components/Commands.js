import React, {Component} from "react"
import Output from "./Output"

class Commands extends Component {
    constructor() {
        super();

        this.state = {
            cmd: "",
            output: "",
            isSubmitted: false
        }

        this.writeCmd = this.writeCmd.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    writeCmd (event) {
        this.setState({
            cmd: event.target.value,
            isSubmitted: false
        })
    }

    handleSubmit (event) {
        event.preventDefault();
        let output = event.target.cmd.value.toLowerCase();
        //let finalOutput = output.split(" ", 2);
        let finalOutput = output.split(/ (.*)/)

        this.setState({
            output: finalOutput,
            isSubmitted: true
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p className="line-element">
                        <input
                            type="text"
                            name="cmd"
                            maxlength = "100"
                            value={this.state.cmd}
                            onChange={this.writeCmd}
                            placeholder="type 'help' for commands" />
                    </p>
                </form>
                {this.state.isSubmitted && <Output commands={this.state.output} />}
            </div>
        )
    }
}

export default Commands
