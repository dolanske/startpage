import React, {Component} from "react"
import { clipboardCopy } from '../../Utilities.js';
import Texts from '../../Texts.js';

class Contact extends Component {
    constructor() {
        super()
    }

    render() {
        let email = Texts[0].email;

        return (
            <div className="see-block">
                <h2>Where to fnd me?</h2>
                <a href={"mailto:"+email}>Write me at <strong>{email}</strong></a>
                <ul>
                    <li></li>
                    <li><a href={Texts[0].insta}>Instagram</a></li>
                    <li><a href={Texts[0].linked}>LinkedIn</a></li>
                </ul>
            </div>
        )
    }
}

export default Contact
