import React from "react"
import "./styles/index.css"
import artistImage from '../../res/images/artist1.jpeg';

export default class AboutComponent extends React.Component {

    render() {
        return(
            <div className="about-page">
                <div className="about-image-container">
                    <img className="about-image" src={artistImage} alt="About bilde"/>
                </div>
                <div className="about-content">
                    <div className="about-header">
                        Om oss
                    </div>
                    <div className="about-text">
                        <p className="paragraph">
                            Rubato ble startet i 2015 med et mål om å fremme unge, lovende norske artister. Siden oppstart har fokuset vært på å fremme ny, norsk musikk gjennom redaksjonelt innhold. I 2019 ønsker vi å gi artister en trygg plattform å markedsføre seg selv på, samt legge til rette for at disse blir booket av profesjonelle aktører på en bedre og mer effektiv måte. Slik hjelper vi norske artister med å komme seg opp og frem mens våre kunder alltid vet at de får kvalitet og talent. Gjennom innovasjon og digitalisering skal vi finne nye måter at artister kan livnære seg på musikk, og gjøre det enklere og tryggere, både for arrangør og artist å avtale spillejobber.
                        </p>
                        <p className="paragraph">
                            Er du interessert i å bidra? Eller ønsker artistprofil?
                            <br/>
                            Send en e-post til <a className="about-email" href="mailto:jorgen@rubato.no">jorgen@rubato.no</a>
                        </p>
                        <p className="paragraph">
                            Rubato Booking er startet opp på NTNUs Entreprenørskole og støttet av TrønderEnergi-bidraget i regi av Spark NTNU*.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}