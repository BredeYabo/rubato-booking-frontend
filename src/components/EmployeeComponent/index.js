import React from "react"
import styles from './styles/styles.module.css'


export const EmployeeComponent = ({ firstname, restOfName, title,  email }) => {
    return(
        <div className={styles.employeeCard}>
            <img className={styles.employeePicture} src={`./employees/${firstname}.png`} alt={firstname + "bilde"} />
            <div className={styles.employee}>
                <h3 className={styles.employeeHeader}>{restOfName}</h3>
                <p className={styles.employeeTitle}>{title}</p>
                <a className={styles.employeeEmail} href={`mailto:${email}`}>
                    <img src="./sm_icons/email_icon.svg" alt="email"/>
                </a>
            </div>
        </div>
    )
};