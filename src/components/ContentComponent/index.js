import React,{Component} from 'react';
import './styles/styles.css';
import ArtistPreviewComponent from "../ArtistPreviewComponent";

// import ExampleComponent from "./components/ExampleComponent";

export default class ContentComponent extends Component{
    render() {
        return(
            <div className={'contentContainer'} >
                <div className={'artistGrid'}>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>
                    <ArtistPreviewComponent/>


                </div>
            </div>
        )
    }
}