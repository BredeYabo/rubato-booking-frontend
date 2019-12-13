import React,{Component} from 'react';
import artistImage from '../../res/images/artist1.jpeg';
import shadowGradient from '../../res/images/shadow_gradient.png';
import  styles from './styles/styles.module.css';
import '../../res/fonts/futura.ttf'
import {Link} from "react-router-dom";
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
        let profileImage = artistImage;
        for (let i in this.props.artist.images) {
            if (this.props.artist.images[i].type === "profile") {
                profileImage = this.props.artist.images[i].base64
            }
        }

        return(
            <div className={styles.artistPreviewContainer}>
                <Link to={"/artist/" + this.props.artist.personId}>
                    <div className={this.state.isHovered ?  cx(styles.artistInfoContainer,styles.artistHover): styles.artistInfoContainer}
                         onMouseEnter={this.handleOnHover}
                         onMouseLeave={this.handleMouseLeave}
                    >
                        <div className={styles.artistText} >
                            <div className={styles.artistName}>{this.props.artist.name}</div>
                            <div className={styles.artistInfo}>{this.props.artist.artistType}, {this.props.artist.location}</div>
                        </div>
                        <img className={cx(styles.artistImage,styles.shadowGradient)} src={shadowGradient} alt={'shadowGradient'}/>
                    </div>
                    <img className={styles.artistImage} src={profileImage} alt={'artistImage'}/>
                </Link>
            </div>
        )
    }
}