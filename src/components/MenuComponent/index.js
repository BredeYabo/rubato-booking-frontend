import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf';
import crossIcon from '../../res/icons/cross.svg';
import { Link } from "react-router-dom";
import {login, logout} from "../../redux/actions/userActions";
import {connect} from "react-redux";
import {slide as BurgerMenu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu'
import windowSize from 'react-window-size';

// import ExampleComponent from "./components/ExampleComponent";
class MenuComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            menuOpen:false
        }
    }

    handleStateChange = (state) =>{
        this.setState({menuOpen: state.isOpen})
    };

    closeMenu = () => {
        console.log(this.state.menuOpen);
        this.setState({menuOpen:false})
    };

    logoutBurger = () =>{
        this.props.logout();
        this.closeMenu()
    };

    render() {
        return(
            <div className='menuContainer' >
                {this.props.windowWidth < 780 ?
                    <BurgerMenu menuClassName="burgerMenu"
                                burgerButtonClassName={this.state.menuOpen? "burgerIconHidden" : "burgerIconNormal"}
                                crossButtonClassName={"burgerCrossIcon"}
                                itemListClassName={"burgerItem"}
                                right
                                disableAutoFocus
                                disableOverlayClick
                                isOpen={this.state.menuOpen}
                                width={this.props.windowWidth}
                                onStateChange = {(state) => this.handleStateChange(state)}
                                customCrossIcon={ <img src={crossIcon} alt={'X'}/>}
                    >
                        { this.props.username ?
                            <Link to="/" className="nav_button_burger is-logged-in" onClick={() => this.logoutBurger()} >logg ut</Link>
                            :
                            <Link to="/login" className="nav_button_burger is-not-logged-in" onClick={this.closeMenu} >logg inn</Link>
                        }
                        <Link to="/kontakt" className={'nav_button_burger'} onClick={this.closeMenu} >kontakt</Link>
                        <Link to="/om" className="nav_button_burger" onClick={this.closeMenu}>om</Link>
                    </BurgerMenu>
                    :
                    <div className="menu_list">
                        { this.props.username ?
                            <Link to="/" className="nav_button is-logged-in" onClick={() => this.props.logout()} >logg ut</Link>
                            :
                            <Link to="/login" className="nav_button is-not-logged-in">logg inn</Link>
                        }
                        <Link to="/kontakt" className={'nav_button'}>kontakt</Link>
                        <Link to="/om" className="nav_button">om</Link>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        username: state.user.username,
    }
}

const mapDispatchToProps = {
    login,
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(reduxBurgerMenu(MenuComponent)));