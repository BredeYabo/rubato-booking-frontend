import React from "react";
import "./styles/index.css"


export default class ContactComponent extends React.Component {

    render() {
        return (
            <div id="contact-component">
                <div id="contact-image">
                    <img src="" alt="Kontakt bilde"/>
                </div>
                <form id="contact-form">
                    <div id="div_input">
                        <label htmlFor="name-input">Name</label><br/>
                        <input type="text" className="standard-input" id="name" required/>
                    </div>
                    <div id="div_email">
                        <label htmlFor="email-input">E-post</label><br/>
                        <input type="email" className="standard-input" id="email" required/>
                    </div>
                    <div id="div_subject">
                        <label htmlFor="subject_input">Subject</label><br/>
                        <input type="text" className="standard-input" id="subject" required/>
                    </div>
                    <div id="div_message">
                        <label htmlFor="message_input">Message</label><br/>
                        <textarea type="text" id="contact-message" rows="15" cols="46"  />
                    </div>
                    <button type="submit" className="nav-button" id="button_login">Send</button>
                </form>
            </div>
        )
    }
}