import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf';
import rubato_logo from '../../res/images/rubato_logo.png'
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
            <nav className='headerContainer'>
                <Link to="/">
                    <img src={rubato_logo} alt="Rubato logo" className="header_logo"/>
                </Link>
                {this.props.windowWidth < 780 ?
                    <BurgerMenu
                        right
                        disableAutoFocus
                        noOverlay
                        customCrossIcon={ <img src={crossIcon} alt={'X'}/> }
                    >
                        { this.props.username ?
                            <Link to="/" className="nav_button is-logged-in" onClick={() => this.props.logout()} >logg ut</Link>
                            :
                            <Link to="/login" className="nav_button is-not-logged-in">logg inn</Link>
                        }
                        <Link to="/" className={'nav_button'}>kontakt</Link>
                        <Link to="/" className="nav_button">om</Link>
                    </BurgerMenu>
                    :
                    <div className="menu_list">
                        {/* Nav buttons */}
                        { this.props.username ?
                            <Link to="/" className="nav_button is-logged-in" onClick={() => this.props.logout()} >logg ut</Link>
                            :
                            <Link to="/login" className="nav_button is-not-logged-in">logg inn</Link>
                        }
                        <Link to="/" className={'nav_button'}>kontakt</Link>
                        <Link to="/" className="nav_button">om</Link>
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

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(HeaderComponent));