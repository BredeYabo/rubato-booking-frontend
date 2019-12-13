import React from "react"
import styles from './styles/styles.module.css'
import {ReactComponent as MailIcon} from "../../res/icons/mail.svg";


export const EmployeeComponent = ({ firstname, restOfName, title,  email }) => {
    return(
        <div className={styles.employeeCard}>
            <img className={styles.employeePicture} src={`./employees/${firstname}.png`} alt={firstname + "bilde"} />
            <div className={styles.employee}>
                <p className={styles.employeeHeader}>{restOfName}</p>
                <p className={styles.employeeTitle}>{title}</p>
                <a className={styles.employeeEmail} href={`mailto:${email}`}>
                    <MailIcon/>
                </a>
            </div>
        </div>
    )
};