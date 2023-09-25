import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions";

const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export {fetchDataRequest, fetchDataSuccess, fetchDataFailure};