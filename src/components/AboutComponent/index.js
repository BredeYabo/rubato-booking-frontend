import React from "react"
import styles from "./styles/index.module.css"
import { EmployeeComponent } from "../EmployeeComponent";

export default class AboutComponent extends React.Component {


    render() {
        return(
            <div className={styles.aboutPage}>
                <div className={styles.aboutImage}>
                    <img src="" alt="About bilde"/>
                </div>
                <div className={styles.aboutContent}>
                    <h1 className={styles}>
                        Om oss
                    </h1>
                    <div className={styles}>
                        <p className={styles}>
                            Rubato ble startet i 2015 med et mål om å fremme unge, lovende norske artister. Siden oppstart har fokuset vært på å fremme ny, norsk musikk gjennom redaksjonelt innhold. I 2019 ønsker vi å gi artister en trygg plattform å markedsføre seg selv på, samt legge til rette for at disse blir booket av profesjonelle aktører på en bedre og mer effektiv måte. Slik hjelper vi norske artister med å komme seg opp og frem mens våre kunder alltid vet at de får kvalitet og talent. Gjennom innovasjon og digitalisering skal vi finne nye måter at artister kan livnære seg på musikk, og gjøre det enklere og tryggere, både for arrangør og artist å avtale spillejobber.
                        </p>
                        <p className={styles}>
                            Er du interessert i å bidra? Eller ønsker artistprofil?
                            <br/>
                            Send en e-post til <a href="mailto:jorgen@rubato.no">jorgen@rubato.no</a>
                        </p>
                        <p className={styles}>
                            Rubato Booking er startet opp på NTNUs Entreprenørskole og støttet av TrønderEnergi-bidraget i regi av Spark NTNU*.
                        </p>
                    </div>
                </div>
                <div className={styles.aboutEmployees}>
                    <EmployeeComponent firstname="jorgen"   restOfName="Jørgen Berntson Aase"       title="CEO"         email="jorgen@rubato.no"/>
                    <EmployeeComponent firstname="vegard"   restOfName="Vegard Blauenfeldt Næss"    title="CMO"         email="vegard@rubato.no"/>
                    <EmployeeComponent firstname="philip"   restOfName="Philip Dahlstrøm"           title="Developer"   email="philip@rubato.no"/>
                    <EmployeeComponent firstname="lars"     restOfName="Lars Kåre Syversen"         title="Developer"   email="lars@rubato.no"/>
                    <EmployeeComponent firstname="sverre"   restOfName="Sverre Francis Uijting"     title="Developer"   email="sverre@rubato.no"/>
                </div>
            </div>
        )
    }
}