import {
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from "../actions/userActions.js"

const initialState = {
    pending: false,
    user: {
        name: "Name",
        artistType: "Artist",
        location: "Oslo",
        instagram: null,
        facebook: null,
        about: "",
        coverImage: "https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/11/UniversalCoverings_2880x1220.gif",
        profileImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    error: null
};

export function userReducer (state = initialState, action) {
    switch (action.type) {

        case FETCH_USER_PENDING:
            return {
                ...state,
                pending: true
            };

        case FETCH_USER_SUCCESS:
            let user = action.user;
            for (let i in user.images) {
                if (user.images[i].type === "cover") {
                    user.coverImage = user.images[i].base64;
                } else if (user.images[i].type === "profile") {
                    user.profileImage = user.images[i].base64;
                }
            }

            let spotifyList = [];
            let soundcloudList = [];
            for (let i in user.audio) {
                if (user.audio[i].type === "spotify") {
                    spotifyList.push(user.audio[i])
                } else if (user.audio[i].type === "soundcloud") {
                    soundcloudList.push(user.audio[i])
                }
            }
            user.spotify = spotifyList;
            user.soundcloud = soundcloudList;

            return {
                ...state,
                pending: false,
                user: user,
            };

        case FETCH_USER_ERROR:
            return {
                ...state,
                error: action.error,
            };


        default:
            return state;
    }
}

export const getUser = state => state.user.user;
export const getUserPending = state => state.user.pending;
export const getUserError = state => state.user.error;
