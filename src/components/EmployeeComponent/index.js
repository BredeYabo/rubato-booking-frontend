import React from "react"
import "./styles/index.css"


export const EmployeeComponent = ({ firstname, restOfName, title,  email }) => {
    return(
        <div className="employee-card">
            <img src={`./employees/${firstname}.png`} alt={firstname + "bilde"} id="employee-picture"/>
            <div className="employee">
                <h3 className="employee-header">{restOfName}</h3>
                <p className="employee-title">{title}</p>
                <a className="employee-email" href={`mailto:${email}`}>
                    <img src="./sm_icons/email_icon.svg" alt="emial"/>
                </a>
            </div>
        </div>
    )
};