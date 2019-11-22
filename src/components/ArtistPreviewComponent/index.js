import React,{Component} from 'react';
import artistImage from '../../res/images/rubato.jpg';
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
                        <div className={'artistName'}> Navn</div>
                        <div className={'artistInfo'}> DJ, Oslo</div>
                    </div>
                    <img className={'shadowGradient'} src={shadowGradient} alt={'shadowGradient'}/>
                </div>
                <img className={'artistImage'} src={artistImage} alt={'artistImage'}/>
            </div>
        )
    }
}