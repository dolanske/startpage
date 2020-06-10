import React, {Component} from 'react'
import Commands from "./components/Commands"
import Title from "./components/Title"

//import './data/app.scss'


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Title />
                <Commands />
            </div>
        )
    }
}

export default App
