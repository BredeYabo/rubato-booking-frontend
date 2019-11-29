import React,{Component} from 'react';
import artistImage from '../../res/images/artist1.jpeg';
import shadowGradient from '../../res/images/shadow_gradient.png';
import './styles/styles.css';
import '../../res/fonts/futura.ttf'

// import ExampleComponent from "./components/ExampleComponent";

export default class ArtistPreviewComponent extends Component{

    render() {
        return(
            <div className='artistPreviewContainer'>
                <div className={'artistInfoContainer'}>
                    <div className='artistText' >
                        <div className={'artistName'}> {this.props.artistName}</div>
                        <div className={'artistInfo'}> {this.props.artistInfo}</div>
                    </div>
                    <img className={'artistImage shadowGradient'} src={shadowGradient} alt={'shadowGradient'}/>
                </div>
                <img className={'artistImage'} src={artistImage} alt={'artistImage'}/>
            </div>
        )
    }
}