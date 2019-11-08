import React from "react";
import "./styles/index.css"
import transport from "nodemailer"
import creds from "../../config";


export default class ContactComponent extends React.Component {

    sendEmail = (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("contact-message").value;

        const htmlBody = `
            <div>
                <p>You have a new contact request</p>
                <h3>Contact information:</h3>
                <ul>
                   <li>Name: ${name} </li>
                   <li>From: ${email}</li>
                   <li>Subject: ${subject}</li>
                </ul>
                <h3>Message from sender:</h3>
                <p>${message}</p>
            </div>
        `;

        const transporter = transport.createTransport({
            host: "mail.one.com",
            port: 465,
            secure: true,
            auth: {
                user: creds.USER,
                pass: creds.PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mail = {
            from: creds.USER,
            to: "sverre@rubato.no",
            subject: subject,
            html: htmlBody
        };

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log("Failed to send...\n" + err)
            } else {
                console.log("Sent it...")
            }
        })


    };


    render() {
        return (
            <div id="contact-component">
                <div id="contact-image">
                    <img src="" alt="Kontakt bilde"/>
                </div>
                <form id="contact-form" metod="POST" onSubmit={this.sendEmail.bind(this)} >
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