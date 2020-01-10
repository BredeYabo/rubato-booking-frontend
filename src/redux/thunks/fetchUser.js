import {fetchUserPending, fetchUserSuccess, fetchUserError, fetchAllUsersSuccess} from "../actions/userActions";
import {get} from "../../util/ApiRequests";

export function fetchUser(id) {
    return async dispatch => {
        let url = "http://localhost:8080/api/person/searchById/" + id;
        await get(dispatch, fetchUserPending, fetchUserError, fetchUserSuccess, url);
    }
}

export function fetchAllUsersPaged(pageNumber, sort) {
    return async dispatch => {
        let url = "http://localhost:8080/api/person/list-all?page=" + pageNumber + "&sort=" + sort;
        await get(dispatch, fetchUserPending, fetchUserError, fetchAllUsersSuccess, url);
    }
}
