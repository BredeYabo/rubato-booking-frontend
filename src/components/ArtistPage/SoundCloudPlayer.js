import React from 'react';
import './styles/soundcloudplayer.css';
import '../../res/fonts/futura.ttf'


class SoundCloudPlayer extends React.Component {

    render() {
        return(
            <iframe className={"soundcloud"}
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    title={"soundcloud"}
                    src={"https://w.soundcloud.com/player/?" +
                    "url=https%3A//api.soundcloud.com/" + this.props.playId +
                    "&color=%23ff5500" +
                    "&auto_play=false" +
                    "&hide_related=false" +
                    "&show_comments=true" +
                    "&show_user=true" +
                    "&show_reposts=false" +
                    "&show_teaser=true" +
                    "&visual=true"}
            />
        )
    }
}

export default SoundCloudPlayer;