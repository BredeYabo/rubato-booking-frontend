import React, { Component } from "react"
import ArtistListItem from "../ArtistListItem";
import "./index.css"

class ArtistList  extends Component  {

    render() {
        return (
            <div id="artist_list">
                <ArtistListItem
                    img_source={"artist1.jpeg"}
                    artist_name={"artist1"}
                />
                <ArtistListItem
                    img_source={"artist2.jpeg"}
                    artist_name={"artist2"}
                />
                <ArtistListItem
                    img_source={"artist3.jpeg"}
                    artist_name={"artist3"}
                />
                <ArtistListItem
                    img_source={"artist4.jpeg"}
                    artist_name={"artist4"}
                />
                <ArtistListItem
                    img_source={"artist5.jpeg"}
                    artist_name={"artist5"}
                />
            </div>
        )
    }
}

export default ArtistList;
