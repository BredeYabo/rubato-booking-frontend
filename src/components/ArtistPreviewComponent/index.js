import React,{Component} from 'react';
import artistImage from '../../res/images/artist1.jpeg';
import shadowGradient from '../../res/images/shadow_gradient.png';
import  styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf';
import cx from 'classnames';

export default class ArtistPreviewComponent extends Component{

    render() {
        return(
            <div className={styles.artistPreviewContainer}>
                <div className={styles.artistInfoContainer}>
                    <div className={styles.artistText} >
                        <div className={styles.artistName}>{this.props.artistName}</div>
                        <div>{this.props.artistInfo}</div>
                    </div>
                    <img className={cx(styles.artistImage,styles.shadowGradient)} src={shadowGradient} alt={'shadowGradient'}/>
                </div>
                <img className={styles.artistImage} src={artistImage} alt={'artistImage'}/>
            </div>
        )
    }
}