export const FETCH_BEGIN   = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH__FAILURE';

export const fetchBegin = () => ({
    type: FETCH_BEGIN
});

export const fetchSuccess = result => ({
    type: FETCH_SUCCESS,
    payload: { result }
});

export const fetchFailure = error => ({
    type: FETCH_FAILURE,
    payload: { error }
});