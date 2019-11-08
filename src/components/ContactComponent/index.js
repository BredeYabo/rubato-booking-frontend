import React from "react";
import "./styles/index.css"


export default class ContactComponent extends React.Component {

    sendEmail = (event, name, email, subject, message) => {

        /*
        const htmlBody = `
            <p>You have a new contact request</p>
            <h3>Contact information:</h3>
            <ul>
               <li>Name: ${form.name} </li>
            </ul>
        `;

      const transporter = transport.createTransport()
        */

    };


    render() {
        return (
            <div id="contact-component">
                <div id="contact-image">
                    <img src="" alt="Kontakt bilde"/>
                </div>
                <form id="contact-form" metod="POST" action="">
                    <div id="div_input">
                        <label htmlFor="name-input">Name</label><br/>
                        <input type="text" className="standard-input" name="name" required/>
                    </div>
                    <div id="div_email">
                        <label htmlFor="email-input">E-post</label><br/>
                        <input type="email" className="standard-input" name="email" required/>
                    </div>
                    <div id="div_subject">
                        <label htmlFor="subject_input">Subject</label><br/>
                        <input type="text" className="standard-input" name="subject" required/>
                    </div>
                    <div id="div_message">
                        <label htmlFor="message_input">Message</label><br/>
                        <textarea type="text" id="contact-message" rows="15" cols="46" name="message" />
                    </div>
                    <button type="submit" className="nav-button" id="button_login" onClick={(e) => this.sendEmail()}>Send</button>
                </form>
            </div>
        )
    }
}