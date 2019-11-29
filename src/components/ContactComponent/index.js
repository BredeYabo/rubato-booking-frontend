import React from "react";
import "./styles/index.css"
import artistImage from '../../res/images/artist3.jpeg';

export default class ContactComponent extends React.Component {

    render() {
        return (
            <div className="contact-page">
                <div className="contact-image-container ">
                    <img className="contact-image" src={artistImage} alt="Kontakt bilde"/>
                </div>
                <div className="contact-form">
                    <form >
                        <div className="contact-header">
                            Kontakt oss
                        </div>
                        <div className="div_input">

                            <input placeholder={"navn"} type="text" className="standard-input name" required/>
                        </div>
                        <div className="div_email">

                            <input placeholder={"email"} type="email" className="standard-input email" required/>
                        </div>
                        <div className="div_subject">

                            <input placeholder={"emne"}className="standard-input subject" type="text"  required/>
                        </div>
                        <div className="div_message">

                            <textarea placeholder={"melding"} type="text" className="standard-input contact-message" rows="6" cols="46"  />
                        </div>
                        <button type="submit" className=" form-submit ">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}