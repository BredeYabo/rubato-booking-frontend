import React,{Component} from 'react';
import './styles/styles.css';
import ArtistPreviewComponent from "../ArtistPreviewComponent";

export default class ContentComponent extends Component{
    render() {
        return(
            <div className={'contentContainer'} >
                <div className={'artistGrid'}>
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Lars Kåre Syversen og Kompaniet"} artistInfo={"løvblåser"}/>
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Test"} artistInfo={"DJ, Oslo"} />
                    <ArtistPreviewComponent artistName={"Jørgen og bøllene"} artistInfo={"DJ, Oslo"} />
                </div>
            </div>
        )
    }
}