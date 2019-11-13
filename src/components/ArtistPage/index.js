import React from 'react';
import SpotifyPlayer from "react-spotify-player";
import YouTube from "react-youtube";
import {Link, Element} from 'react-scroll'
import './styles/style.css';
import '../../res/fonts/futura.ttf'
import BookingForm from "./BookingForm";
import SoundCloudPlayer from "./SoundCloudPlayer";
import InstaGrid from "../InstaFeed";



class ArtistPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Oscar A",
            location: "Oslo",
            type: "DJ",
            instagram: "jorgenbaase",
            soundcloud: "playlists/724153098",
            youtube: "2g811Eo7K8U",
            spotify: "spotify:playlist:37i9dQZF1DXcHDnlOJkQ1B",
            description: "Oscar A er en artist fra Tønsberg. Han er et musikalsk multitalent som produserer og " +
                "skriver sine egne låter. Tekstene hans er dype og reflekterte med et innhold som varierer mellom" +
                " tanker rundt personlige relasjoner, kritiske synspunkter på samfunnet og menneskelige verdier.\n" +
                "\n" +
                "Musikalsk kan musikken plasseres et sted i landskapet mellom hiphop, moderne" +
                "R&B og pop. Med følsomme tekster og melodiøse beats henter Oscar A inspirasjon fra allerede " +
                "etablerte artister samtidig som han utvikler sin egen sound.\n" +
                "\n" +
                "Til tross for sin unge alder har han allerede lagt bak seg over" +
                "hundre live-opptredener, som inkluderer oppvarming for en rekke kjente artister som Cezinando, " +
                "Gatas Parlament og Unge Beirut. Låta hans, «Nada», hadde musikkvideopremiere hos 730.no, samt at" +
                " den gikk rett inn på «Norsk rap» på Spotify og «Tidal Rising Norge»."
        }
    }

    render() {
        return(
            <div className={'artistPageRoot'}>
                <div className={"profileGrid"}>
                    <img src={'https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/11/UniversalCoverings_2880x1220.gif'}
                         className={"coverImage"}
                         alt={''}/>
                    <div className={"artistInfo"}>
                        <div className={"placeholder"}/>
                        <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                             className={"profileImage"}
                             alt={''}/>
                        <span className={"artistName"} >{this.state.name}</span>
                        <span className={"artistSubname"} >{this.state.type}, {this.state.location}</span>

                        <Link to={"formAnchor"} smooth={true}>
                            <button className={'bookButton'}>
                                Book {this.state.name}
                            </button>
                        </Link>
                    </div>

                    <div className={"instagramFeed"} >
                        <div className={"socialMedias"}>
                            <a className={"smHandle"} href="https://www.instagram.com/rubato.no/">
                                <img src={"sm_icons/ig_icon.svg"} alt={""}/>
                                <span>jorgenbaase</span>
                            </a>
                            <a className={"smHandle"} href="https://www.facebook.com/rubato.no/">
                                <img src={"sm_icons/fb_icon.svg"} alt={""}/>
                                <span>jorgenbaaseFB</span>
                            </a>
                        </div>
                        <div className={"instaFeedWrapper"} >
                            <InstaGrid account={this.state.instagram} numberOfMediaElements={4}/>
                        </div>
                    </div>

                    <div className={"artistDescription"}>
                        <h3>Om {this.state.name}:</h3>
                        {this.state.description.split('\n').map((item, i) => {
                            return <p key={i}>{item}</p>
                        })}
                    </div>
                    <div className={"spotify"}>
                        <SpotifyPlayer uri={this.state.spotify}
                                       size={{width: '100%', height: '100%'}}
                                       theme={"black"}
                                       view={"list"}
                        />
                    </div>
                </div>

                <div className={"media"} >
                    <h1 className={"sectionDivider"}> SoundCloud </h1>
                    <SoundCloudPlayer playId={this.state.soundcloud} />

                    <h1 className={"sectionDivider"}> Youtube </h1>
                    <YouTube className={"youtube"} videoId={this.state.youtube} />
                </div>

                <Element name={'formAnchor'}/>
                <BookingForm name={this.state.name} />

                <div className={"footerPlaceholder"}/>
            </div>
        )
    }
}

export default ArtistPage;