import React,{Component} from 'react';
import styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf';
import crossIcon from '../../res/icons/cross.svg';
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {slide as BurgerMenu} from 'react-burger-menu';
import windowSize from 'react-window-size';


class HeaderComponent extends Component{
    render() {
        return(
            <nav className={styles.headerContainer} >
                <Link to="/">
                    <img src="http://localhost:3000/rubato_logo.png"  alt="Rubato logo" className={styles.headerLogo}/>
                </Link>
                {this.props.windowWidth < 780 ?
                    <BurgerMenu
                        right
                        disableAutoFocus
                        noOverlay
                        customCrossIcon={ <img src={crossIcon} alt={'X'}/> }
                    >
                        { this.props.username ?
                            <Link to="/">
                                <button className={styles.nav_button}
                                        id="button_logout"
                                        onClick={() => this.props.logout()}>
                                    Logout
                                </button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className={styles.nav_button} id="button_login">Login</button>
                            </Link>
                        }
                        <Link to="/kontakt">
                            <button className={styles.nav_button}>Kontakt</button>
                        </Link>

                        <Link to="/om">
                            <button className={styles.nav_button}>Om</button>
                        </Link>
                    </BurgerMenu>
                    :
                    <div id="menu_list">
                        {/* Nav buttons */}
                        { this.props.username ?
                            <Link to="/">
                                <button className={styles.nav_button}
                                        id="button_logout"
                                        onClick={() => this.props.logout()}>
                                    Logout
                                </button>
                            </Link>
                            :
                            <Link to="/login">
                                <button className={styles.nav_button} id="button_login">Login</button>
                            </Link>
                        }

                        <Link to="/kontakt">
                            <button className={styles.nav_button}>Kontakt</button>
                        </Link>


                        <Link to="/om">
                            <button className={styles.nav_button}>Om</button>
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

};

export default connect(mapStateToProps, mapDispatchToProps) ( windowSize(HeaderComponent));