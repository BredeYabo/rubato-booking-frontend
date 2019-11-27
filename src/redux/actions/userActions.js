export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_IMAGE_SUCCESS = "FETCH_USER_IMAGE_SUCCESS";
export const FETCH_USER_AUDIO_SUCCESS = "FETCH_USER_AUDIO_SUCCESS";
export const FETCH_USER_VIDEO_SUCCESS = "FETCH_USER_VIDEO_SUCCESS";


export const fetchUserPending = () => {
    return {
        type: FETCH_USER_PENDING
    }
};

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        user: user
    }
};

export const fetchUserError = (error) => {
    return {
        type: FETCH_USER_ERROR,
        error: error
    }
};

export const fetchUserImagesSuccess = (images) => {
    return {
        type: FETCH_USER_IMAGE_SUCCESS,
        images: images
    }
};

export const fetchUserAudioSuccess = (audio) => {
    return {
        type: FETCH_USER_AUDIO_SUCCESS,
        audio: audio
    }
};

export const fetchUserVideoSuccess = (video) => {
    return {
        type: FETCH_USER_VIDEO_SUCCESS,
        video: video
    }
};