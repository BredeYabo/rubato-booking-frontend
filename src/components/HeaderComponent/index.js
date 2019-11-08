import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf';
import crossIcon from '../../res/icons/cross.svg';
import { Link } from "react-router-dom";
import {login, logout} from "../../redux/actions/userActions";
import {connect} from "react-redux";
import {slide as BurgerMenu} from 'react-burger-menu';
import windowSize from 'react-window-size';


// import ExampleComponent from "./components/ExampleComponent";
class HeaderComponent extends Component{
    render() {
        return(
            <nav className='headerContainer' id="header">
                <Link to="/"><img src="rubato_logo.png"  alt="Rubato logo" id="header_logo"/></Link>
                {this.props.windowWidth < 780 ?
                    <BurgerMenu
                        right
                        disableAutoFocus
                        noOverlay
                        customCrossIcon={ <img src={crossIcon} alt={'X'}/> }
                    >
                        { this.props.username ?
                            <Link to="/">
                                <button className="nav_button" id="button_logout" onClick={() => this.props.logout()}>Logout</button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className="nav_button" id="button_login">Login</button>
                            </Link>
                        }

                        <Link to="/">
                            <button className="nav_button">Kontakt</button>
                        </Link>

                        <Link to="/">
                            <button className="nav_button">Om</button>
                        </Link>
                    </BurgerMenu>
                    :
                    <div id="menu_list">
                        {/* Nav buttons */}
                        { this.props.username ?
                            <Link to="/">
                                <button className="nav_button" id="button_logout" onClick={() => this.props.logout()}>Logout</button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className="nav_button" id="button_login">Login</button>
                            </Link>
                        }
                        <Link to="/">
                            <button className="nav_button">Kontakt</button>
                        </Link>

                        <Link to="/">
                            <button className="nav_button">Om</button>
                        </Link>
                    </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps) ( windowSize(HeaderComponent));