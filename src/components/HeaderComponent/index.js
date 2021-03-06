import React,{Component} from 'react';
import styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf';
import rubato_logo from '../../res/images/rubato_logo.png'
import { Link } from "react-router-dom";
import MenuComponent from "../MenuComponent/index"

// import ExampleComponent from "./components/ExampleComponent";
export default class HeaderComponent extends Component{
    render() {
        return(
            <nav className={styles.headerContainer} >
                <Link to="/" onClick={this.closeMenu}>
                    <img src={rubato_logo} alt="Rubato logo" className={styles.headerLogo}/>
                </Link>
                <MenuComponent/>
            </nav>
        )
    }
}
