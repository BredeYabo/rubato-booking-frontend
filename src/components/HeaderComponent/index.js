import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf'
import { Link } from "react-router-dom";

// import ExampleComponent from "./components/ExampleComponent";

export default class HeaderComponent extends Component{
    render() {
        return(
            <div className='headerContainer' id="header">
                <Link to="/"><img src="rubato_logo.png"  alt="Rubato logo" id="header_logo"/></Link>
                <ul id="menu_list">
                    {/* Nav buttons */}
                    <Link to="/login">
                        <li id="menu_item">Login</li>
                    </Link>
                    <li id="menu_item">Kontakt</li>
                    <li id="menu_item">Om</li>

                    {/* SoMe Buttons */}
                    <li id="menu_item"><a href="https://www.youtube.com/channel/UCzcOitxRRjSq7Lmd3_P8j1g"><img src="sm_icons/yt_icon.svg" className="sm_icon" alt="YT"/></a></li>
                    <li id="menu_item"><a href="https://www.instagram.com/rubato.no/"><img src="sm_icons/ig_icon.svg" className="sm_icon" alt="IG"/></a></li>
                    <li id="menu_item"><a href="https://www.facebook.com/rubato.no/"><img src="sm_icons/fb_icon.svg" className="sm_icon" alt="FB"/></a></li>
                </ul>
            </div>
        )
    }
}