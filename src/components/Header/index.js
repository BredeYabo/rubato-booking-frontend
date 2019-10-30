import React from "react";
import "./index.css"

function Header () {

    return (
        <div id="header">
            <img src="rubato_logo.png"  alt="Rubato logo" id="header_logo"/>
            <ul id="menu_list">
                <li id="menu_item"><a href="#">Hjem</a></li>
                <li id="menu_item"><a href="#">Kontakt</a></li>
                <li id="menu_item"><a href="#">Om</a></li>
                <li id="menu_item"><a href="#">YT</a></li>
                <li id="menu_item"><a href="#">IG</a></li>
                <li id="menu_item"><a href="#">FB</a></li>
            </ul>
        </div>
    )
}

export default Header;

