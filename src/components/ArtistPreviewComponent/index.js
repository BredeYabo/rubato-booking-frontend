import React,{Component} from 'react';
import artistImage from '../../res/images/rubato.jpg';
import shadowGradient from '../../res/images/shadow_gradient.png';
import  styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf'
import {Link} from "react-router-dom";

export default class ArtistPreviewComponent extends Component{

    render() {
        let profileImage = artistImage;
        for (let i in this.props.artist.images) {
            if (this.props.artist.images[i].type === "profile") {
                profileImage = this.props.artist.images[i].base64
            }
        }

        return(
            <div className={styles.artistPreviewContainer}>
                <Link to={"/artist/" + this.props.artist.personId}>
                    <div className={styles.artistInfoContainer}>
                        <div className={styles.artistText} >
                            <div className={styles.artistName}>{this.props.artist.name}</div>
                            <div>{this.props.artist.artistType}, {this.props.artist.location}</div>
                        </div>
                        <img className={styles.shadowGradient} src={shadowGradient} alt={'shadowGradient'}/>
                    </div>
                    <img className={styles.artistImage} src={profileImage} alt={'artistImage'}/>
                </Link>
            </div>
        )
    }
}