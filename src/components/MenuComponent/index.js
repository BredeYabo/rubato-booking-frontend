import React,{Component} from 'react';
import styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf';
import crossIcon from '../../res/icons/cross.svg';
import burgerIcon from '../../res/icons/burgermenu.svg'
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {slide as BurgerMenu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import windowSize from 'react-window-size';
import cx from 'classnames';

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
            <div className={styles.menu_list}>
                {this.props.windowWidth < 780 ?
                    <BurgerMenu menuClassName={styles.burgerMenu}
                                burgerButtonClassName={this.state.menuOpen? styles.burgerIconHidden: styles.burgerIconNormal}
                                crossButtonClassName={styles.burgerCrossIcon}
                                itemListClassName={styles.burgerItem}
                                right
                                noOverlay
                                disableAutoFocus
                                disableOverlayClick
                                isOpen={this.state.menuOpen}
                                width={this.props.windowWidth}
                                onStateChange = {(state) => this.handleStateChange(state)}
                                customCrossIcon={ <img src={crossIcon} alt={'X'}/>}
                                customBurgerIcon={<img src={burgerIcon} alt={'='}/>}
                    >
                        { this.props.username ?
                            <Link to="/" className={cx(styles.nav_button, styles.is_logged_in)} onClick={() => this.logoutBurger()} >logg ut</Link>
                            :
                            <Link to="/login" className={ cx(styles.nav_button_burger,styles.is_not_logged_in)} onClick={this.closeMenu} >logg inn</Link>
                        }
                        <Link to="/kontakt" className={styles.nav_button_burger} onClick={this.closeMenu} >kontakt</Link>
                        <Link to="/om" className={styles.nav_button_burger} onClick={this.closeMenu}>om</Link>
                    </BurgerMenu>
                    :
                    <div className={styles.menu_list}>
                        { this.props.username ?
                            <Link to="/" className={cx(styles.nav_button, styles.is_logged_in)} onClick={() => this.props.logout()} >logg ut</Link>
                            :
                            <Link to="/login" className={cx(styles.nav_button,styles.is_not_logged_in)}>logg inn</Link>
                        }
                        <Link to="/kontakt" className={styles.nav_button}>kontakt</Link>
                        <Link to="/om" className={styles.nav_button}>om</Link>
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

};

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(reduxBurgerMenu(MenuComponent)));