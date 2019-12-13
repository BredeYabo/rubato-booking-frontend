import React from "react"
import styles from './styles/styles.module.css'
import {Link} from "react-router-dom";
import rubato_logo from "../../res/images/rubato_logo.png";
import InstaFeed from "../InstaFeed";
import {ReactComponent as InstaIcon} from '../../res/icons/instagram.svg';
import {ReactComponent as FaceIcon} from '../../res/icons/facebook.svg';
import {ReactComponent as YoutubeIcon} from '../../res/icons/youtube.svg';

export  default class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footerContainer}>
                <div className={styles.footerContent}>
                    <Link to="/" >
                        <img src={rubato_logo} alt="Rubato logo" className={styles.footerLogo}/>
                    </Link>
                    <div className={styles.menuList}>
                        <Link to="/" className={styles.navButton}>hjem</Link>
                        <Link to="/kontakt" className={styles.navButton}>kontakt</Link>
                        <Link to="/om" className={styles.navButton}>om</Link>
                        <a href="https://rubato.no/"
                           className={styles.navButton}
                           target="_blank" rel="noopener noreferrer"
                        >blogg</a>
                    </div>
                    <div className={styles.socialContainer}>
                        <a href={"https://www.facebook.com/rubato.no/"}
                           target="_blank" rel="noopener noreferrer"
                           >
                            <FaceIcon className={styles.socialIcon} />
                        </a>
                        <a href={"https://www.instagram.com/rubato.no/"}
                           target="_blank" rel="noopener noreferrer"
                           >
                            <InstaIcon className={styles.socialIcon} />
                        </a>
                        <a href={"https://www.youtube.com/channel/UCzcOitxRRjSq7Lmd3_P8j1g"}
                           target="_blank" rel="noopener noreferrer"
                           >
                            <YoutubeIcon className={styles.socialIcon} />
                        </a>

                    </div>
                    <div className={styles.instaFeedWrapper}>
                        <InstaFeed account={"rubato.no"} numberOfMediaElements={4}/>
                    </div>

                </div>
            </div>
        )
    }
}
