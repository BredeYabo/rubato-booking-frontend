import React,{Component} from 'react';
import './styles/styles.css';
import '../../res/fonts/futura.ttf'

// import ExampleComponent from "./components/ExampleComponent";

export default class ArtistPreviewComponent extends Component{
    render() {
        return(
            <div className='artistPreviewContainer'>
                <div className='artistText' >
                    <div className={'artistName'}> Navn</div>
                    <div className={'artistInfo'}> DJ, Oslo</div>
                </div>
            </div>
        )
    }
}