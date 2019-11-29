import React from "react";
import styles from './styles/styles.module.css'
import artistImage from '../../res/images/artist3.jpeg';
import cx from 'classnames';

export default class ContactComponent extends React.Component {

    render() {
        return (
            <div className={styles.contact_page}>
                <img className={styles.contact_image}src={artistImage} alt="Kontakt bilde"/>
                <div className="contact-form">
                    <form >
                        <div className={styles.contact_header}>
                            Kontakt oss
                        </div>
                        <div>
                            <input placeholder={"navn"} type="text" className={styles.standard_input} required/>
                        </div>
                        <div>
                            <input placeholder={"email"} type="email" className={styles.standard_input} required/>
                        </div>
                        <div>

                            <input placeholder={"emne"} className={styles.standard_input} type="text"  required/>
                        </div>
                        <div>
                            <textarea placeholder={"melding"} type="text" className={cx(styles.standard_input, styles.contact_message)} rows="6" cols="46"/>
                        </div>
                        <button type="submit" className={styles.form_submit}>send</button>
                    </form>
                </div>
            </div>
        )
    }
}