import React,{Component} from 'react';
import artistImage from '../../res/images/artist1.jpeg';
import shadowGradient from '../../res/images/shadow_gradient.png';
import  styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf';
import cx from 'classnames';

export default class ArtistPreviewComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isHovered:false
        }
    }

    handleOnHover = () =>{
        this.setState({isHovered:true})
    };

    handleMouseLeave = () =>{
        this.setState({isHovered:false})
    };

    render() {
        return(
            <div className={styles.artistPreviewContainer}>
                <div className={this.state.isHovered ?  cx(styles.artistInfoContainer,styles.artistHover): styles.artistInfoContainer}
                     onMouseEnter={this.handleOnHover}
                     onMouseLeave={this.handleMouseLeave}
                >
                    <div className={styles.artistText} >
                        <div className={styles.artistName}>{this.props.artistName}</div>
                        <div className={styles.artistInfo}>{this.props.artistInfo}</div>
                    </div>
                    <img className={cx(styles.artistImage,styles.shadowGradient)} src={shadowGradient} alt={'shadowGradient'}/>
                </div>
                <img className={styles.artistImage} src={artistImage} alt={'artistImage'}/>
            </div>
        )
    }
}