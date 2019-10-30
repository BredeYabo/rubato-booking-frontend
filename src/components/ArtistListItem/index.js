import React from "react";
import "./index.css"

function ArtistListItem ({img_source, artist_name}) {

    const inline_styling = {
        height: "260px",
        width: "260px",
        backgroundImage: "url(" + img_source + ")",
        backgroundPosition: "center",

    };

    return (
        <div id="artist_list_item" style={inline_styling}>
            <h1>{artist_name}</h1>
        </div>
    )
}

export default ArtistListItem;
