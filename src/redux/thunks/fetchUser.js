import {fetchUserPending, fetchUserSuccess, fetchUserError} from "../actions/userActions";
import {get} from "../../util/ApiRequests";

function fetchUser(id) {
    return async dispatch => {
        let url = "http://localhost:8080/api/person/searchById/" + id;
        await get(dispatch, fetchUserPending, fetchUserError, fetchUserSuccess, url);
    }
}

export default fetchUser;