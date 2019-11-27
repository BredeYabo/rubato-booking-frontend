import React,{Component} from 'react';
import artistImage from '../../res/images/rubato.jpg';
import shadowGradient from '../../res/images/shadow_gradient.png';
import  styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf'

export default class ArtistPreviewComponent extends Component{

    render() {
        return(
            <div className={styles.artistPreviewContainer}>
                <div className={styles.artistInfoContainer}>
                    <div className={styles.artistText} >
                        <div className={styles.artistName}> Navn</div>
                        <div> DJ, Oslo</div>
                    </div>
                    <img className={styles.shadowGradient} src={shadowGradient} alt={'shadowGradient'}/>
                </div>
                <img className={styles.artistImage} src={artistImage} alt={'artistImage'}/>
            </div>
        )
    }
}