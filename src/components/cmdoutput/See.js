import React, {Component} from "react"
import About from "./SeeComponents/About"
import Contact from "./SeeComponents/Contact"
import Cv from "./SeeComponents/Cv"

function See(props) {
    let arg2 = props.arg2;

    switch (arg2) {
        case "all":
            return (
                <div>
                    <About />
                    <Contact />
                    <Cv />
                </div>
            )
            break;
        case "about":
            return (
                <div>
                    <About />
                </div>
            )
            break;
        case "contact":
            return (
                <div>
                    <Contact />
                </div>
            )
            break;
        case "cv":
            return (
                <div>
                    <Cv />
                </div>
            )
            break;
        default:
            return (
                <p>Commnand doesn't exist</p>
            ) 
    }
}

export default See
