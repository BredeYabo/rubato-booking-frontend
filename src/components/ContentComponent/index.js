import React,{Component} from 'react';
import styles from './styles/styles.module.css'
import ArtistPreviewComponent from "../ArtistPreviewComponent";

export default class ContentComponent extends Component{

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className={styles.contentContainer}>
                <div className={styles.artistGrid}>
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