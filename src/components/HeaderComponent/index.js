import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf'
import { Link } from "react-router-dom";
import {login, logout} from "../../redux/actions/userActions";
import {connect} from "react-redux";


// import ExampleComponent from "./components/ExampleComponent";
class HeaderComponent extends Component{

    render() {
        return(
            <nav className='headerContainer' id="header">
                <Link to="/"><img src="rubato_logo.png"  alt="Rubato logo" id="header_logo"/></Link>
                <div id="menu_list">
                    {/* Nav buttons */}
                    { this.props.username ?
                        <Link to="/">
                            <button className="nav_button" id="button_logout menu_item" onClick={() => this.props.logout()}>Logout</button>
                        </Link>
                        :
                        <Link to="/login">
                            <button className="nav_button" id="button_login menu_item">Login</button>
                        </Link>

                    }

                    <Link to="/">
                        <button className="nav_button">Kontakt</button>
                    </Link>

                    <Link to="/">
                        <button className="nav_button">Om</button>
                    </Link>

                    {/* SoMe Buttons */}
                    <li id="menu_item"><a href="https://www.youtube.com/channel/UCzcOitxRRjSq7Lmd3_P8j1g"><img src="sm_icons/yt_icon.svg" className="sm_icon" alt="YT"/></a></li>
                    <li id="menu_item"><a href="https://www.instagram.com/rubato.no/"><img src="sm_icons/ig_icon.svg" className="sm_icon" alt="IG"/></a></li>
                    <li id="menu_item"><a href="https://www.facebook.com/rubato.no/"><img src="sm_icons/fb_icon.svg" className="sm_icon" alt="FB"/></a></li>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.user.username
    };
}

const mapDispatchToProps = {
    login,
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)