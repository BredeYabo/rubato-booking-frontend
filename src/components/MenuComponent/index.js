import React,{Component} from 'react';
import styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf';
import {ReactComponent as CrossIcon} from '../../res/icons/cross.svg';
import {ReactComponent as BurgerIcon} from '../../res/icons/burgermenu.svg'
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import windowSize from 'react-window-size';
import cx from 'classnames';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class MenuComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            menuOpen:false
        }
    }

    openMenu = () => {
        this.setState({menuOpen:true});
    };


    closeMenu = () => {
        this.setState({menuOpen:false});
    };

    logInOutBurger = () =>{
        // logic can be added here if needed
        this.closeMenu()
    };

    render() {
        return(
            <div className={styles.menu_list}>
                {this.props.windowWidth < 780 ?
                    <div>
                        <BurgerIcon className={this.state.menuOpen ? styles.burgerIconHidden : styles.burgerIconNormal}
                                    onClick={this.openMenu}/>
                        <Modal
                            isOpen={this.state.menuOpen}
                            onRequestClose={this.closeMenu}
                            className={styles.modalMenu}
                            contentLabel={"test"}
                        >
                            <div>
                                <CrossIcon className={styles.crossIcon} onClick={this.closeMenu}/>
                                <div className={styles.menu_button_wrapper}>
                                    {
                                        this.props.username ?
                                            <Link to="/" className={cx(styles.nav_button, styles.is_logged_in)}
                                                  onClick={() => this.logInOutBurger}>logg ut</Link>
                                            :
                                            <Link to="/login" className={cx(styles.nav_button_burger, styles.is_not_logged_in)}
                                                  onClick={this.logInOutBurger}>logg inn</Link>
                                    }
                                    <Link to="/kontakt" className={styles.nav_button_burger} onClick={this.closeMenu} >kontakt</Link>
                                    <Link to="/om" className={styles.nav_button_burger} onClick={this.closeMenu}>om</Link>
                                    <a href="https://rubato.no/"
                                       className={styles.nav_button_burger}
                                       onClick={this.closeMenu}
                                       target="_blank" rel="noopener noreferrer"
                                    >
                                        blogg
                                    </a>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    :
                    <div className={styles.menu_list}>
                        { this.props.username ?
                            <Link to="/" className={cx(styles.nav_button, styles.is_logged_in)} onClick={() => this.props.logout()} >logg ut</Link>
                            :
                            <Link to="/login" className={cx(styles.nav_button,styles.is_not_logged_in)}>logg inn</Link>
                        }
                        <Link to="/kontakt" className={styles.nav_button}>kontakt</Link>
                        <Link to="/om" className={styles.nav_button}>om</Link>
                        <a href="https://rubato.no/"
                           className={styles.nav_button}
                           onClick={this.closeMenu}
                           target="_blank" rel="noopener noreferrer"
                        >
                            blogg
                        </a>
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

export default connect(mapStateToProps, mapDispatchToProps) (windowSize(MenuComponent));