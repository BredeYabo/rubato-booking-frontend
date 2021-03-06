import React from 'react';
import SpotifyPlayer from "react-spotify-player";
import YouTube from "react-youtube";
import {Link, Element} from 'react-scroll'
import styles from './styles/style.module.css';
import '../../res/fonts/futura.ttf'
import BookingForm from "./BookingForm";
import SoundCloudPlayer from "./SoundCloudPlayer";
import InstaGrid from "../InstaFeed";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators, compose } from 'redux';
import {getUser, getUserPending} from "../../redux/reducers/userReducer";
import fetchUserAction from '../../redux/thunks/fetchUser'


class ArtistPage extends React.Component {

    componentDidMount() {
        const {fetchUser} = this.props;
        const artistId = this.props.match.params.artistId;
        this.props.doWhileLoading(() => fetchUser(artistId));
    }

    render() {
        return (
            <div className={styles.artistPageRoot}>
                <div className={styles.profileGrid}>
                    <img src={this.props.user.coverImage}
                         className={styles.coverImage}
                         alt={''}/>
                    <div className={styles.artistInfo}>
                        <div className={styles.placeholder}/>
                        <img src={this.props.user.profileImage}
                             className={styles.profileImage}
                             alt={''}/>
                        <span className={styles.artistName} >{this.props.user.name}</span>
                        <span>{this.props.user.artistType}, {this.props.user.location}</span>

                        <Link to={"formAnchor"} smooth={true}>
                            <button className={styles.bookButton}>
                                Book {this.props.user.name}
                            </button>
                        </Link>
                    </div>

                    <div className={styles.socialMedia} >
                        <div className={styles.socialMediaHandles}>
                            {this.props.user.instagram != null ?
                                <a className={styles.smHandle}
                                   href={"https://www.instagram.com/" + this.props.user.instagram}>
                                    <img src={"http://localhost:3000/sm_icons/ig_icon.svg"} alt={""}/>
                                    <span>{this.props.user.instagram}</span>
                                </a>
                                : null
                            }

                            {this.props.user.facebook != null ?
                                <a className={styles.smHandle} href={this.props.user.facebook}>
                                    <img src={"http://localhost:3000/sm_icons/fb_icon.svg"} alt={""}/>
                                    <span>{this.props.user.name}</span>
                                </a>
                                : null
                            }
                        </div>
                        <div className={styles.instaFeedWrapper} >
                            {
                                this.props.user.instagram != null ?
                                    <InstaGrid account={this.props.user.instagram} numberOfMediaElements={4}/>
                                : null
                            }
                        </div>
                    </div>

                    <div className={styles.artistDescription}>
                        <h3>Om {this.props.user.name}:</h3>
                        {this.props.user.about.split('\n').map((item, i) => {
                            return <p key={i}>{item}</p>
                        })}
                    </div>

                    { this.props.user.spotify && this.props.user.spotify.length > 0 ?
                        <div className={styles.spotify}>
                            <SpotifyPlayer uri={this.props.user.spotify[0].path}
                                           size={{width: '100%', height: '100%'}}
                                           theme={"black"}
                                           view={"list"}
                            />
                        </div>
                        : null
                    }
                </div>

                {this.renderMedia()}

                <Element name={'formAnchor'}/>
                <BookingForm name={this.props.user.name} />

                <div className={styles.footerPlaceholder}/>
            </div>
        )
    }

    renderMedia = () => {
        let shouldRenderSoundCloud = this.props.user.soundcloud && this.props.user.soundcloud > 0;
        let shouldRenderYoutube = this.props.user.video && this.props.user.video > 0;

        let soundcloud = shouldRenderSoundCloud ?
            <div>
                <h1 className={styles.sectionDivider}> SoundCloud </h1>
                {this.props.user.soundcloud.map(item => {
                    return <SoundCloudPlayer key={item.idAudio} playId={item.path} />
                })}
            </div>
            : null;

        let youtube = shouldRenderYoutube ?
            <div>
                <h1 className={styles.sectionDivider}> Youtube </h1>
                {this.props.user.video.map(item => {
                    return <YouTube key={item.idVideo} className={styles.youtube} videoId={item.path} />
                })}
            </div>
            : null;

        return (
            <div className={styles.media} >
                {soundcloud}
                {youtube}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: getUser(state),
    pending: getUserPending(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUserAction,
}, dispatch);

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ArtistPage);
