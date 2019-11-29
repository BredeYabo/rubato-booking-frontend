import axios from 'axios'

export async function get(dispatch, pendingAction, errorAction, successAction, url) {
    dispatch(pendingAction());
    let res = await axios.get(url);
    if (res.error) {
        dispatch(errorAction(res.error));
        return res.error
    }
    dispatch(successAction(res.data));
    return res.data
}

export function post(url, body) {
    axios.post(url, body)
        .then(res => {
            if (res.error) {
                throw res.error
            }
            return res.status
        })
}

export function put(url, body) {
    axios.put(url, body)
        .then(res => {
            if (res.error) {
                throw res.error
            }
            return res.status
        })
}

export function del(url) {
    axios.delete(url)
        .then(res => {
            if (res.error) {
                throw res.error
            }
            return res.status
        })
}
