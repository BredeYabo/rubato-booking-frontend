export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_ALL_USERS_PENDING = "FETCH_ALL_USERS_PENDING";
export const FETCH_ALL_USERS_SUCCESS = "FETCH_ALL_USERS_SUCCESS";
export const FETCH_ALL_USERS_ERROR = "FETCH_ALL_USERS_ERROR";


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

export const fetchAllUsersSuccess = (users) => {
    return {
        type: FETCH_ALL_USERS_SUCCESS,
        users: users[0],
        numUsers: users[1]
    }
};

export const fetchAllUsersPending = () => {
    return {
        type: FETCH_ALL_USERS_PENDING,
    }
};

export const fetchAllUsersError = (error) => {
    return {
        type: FETCH_ALL_USERS_ERROR,
        error: error
    }
};