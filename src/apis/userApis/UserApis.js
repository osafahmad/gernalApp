const Axios = require('axios');
// ---------------------****User Actions****-----------------------------

//----------------------****Sign Up User****-----------------------------
function signUpUserInit() {
    return {
        type: "SIGN_UP_USER_INIT"
    };
}
function signUpUserSuccess(resp) {
    return {
        type: "SIGN_UP_USER_SUCCESS",
        payload: resp.data
    };
}
function signUpUserFail(body) {
    return {
        type: "SIGN_UP_USER_FAIL",
        payload: body
    };
}

export function signUpUser(userDara) {
    return async dispatch => {
        dispatch(signUpUserInit());
        const url = `http://192.168.100.24:3000/notes`;

        try {
            const response = await Axios.post(url, userDara);
            dispatch(signUpUserSuccess(response));
        } catch (err) {
            const { body } = err.response || {};
            dispatch(signUpUserFail(body));
        }
    };
}

//----------------------****LogIn User****-----------------------------
function logInUserInit() {
    return {
        type: "LOG_IN_USER_INIT"
    };
}
function logInUserSuccess(resp) {
    return {
        type: "LOG_IN_USER_SUCCESS",
        payload: resp.data
    };
}
function logInUserFail(body) {
    return {
        type: "LOG_IN_USER_FAIL",
        payload: body
    };
}

export function logInUser(data) {
    return async dispatch => {
        dispatch(logInUserInit());
        const url = `http://192.168.100.24:3000/notes`;

        try {
            const response = await Axios.post(url, data);
            dispatch(logInUserSuccess(response));
        } catch (err) {
            const { body } = err.response || {};
            dispatch(logInUserFail(body));
        }
    };
}

//----------------------****Update User****-----------------------------
function updateUserInit() {
    return {
        type: "UPDATE_USER_INIT"
    };
}
function updateUserSuccess(resp) {
    return {
        type: "UPDATE_USER_SUCCESS",
        payload: resp.data
    };
}
function updateUserFail(body) {
    return {
        type: "UPDATE_USER_FAIL",
        payload: body
    };
}

export function updateUser(data) {
    return async dispatch => {
        dispatch(updateUserInit());
        const url = `http://192.168.100.24:3000/notes`;

        try {
            const response = await Axios.post(url, data);
            dispatch(updateUserSuccess(response));
        } catch (err) {
            const { body } = err.response || {};
            dispatch(updateUserFail(body));
        }
    };
}

//----------------------****Delete User****-----------------------------
function deleteUserInit() {
    return {
        type: "DELETE_USER_INIT"
    };
}
function deleteUserSuccess(resp) {
    return {
        type: "DELETE_USER_SUCCESS",
        payload: resp.data
    };
}
function deleteUserFail(body) {
    return {
        type: "DELETE_USER_FAIL",
        payload: body
    };
}

export function deleteUser(data) {
    return async dispatch => {
        dispatch(deleteUserInit());
        const url = `http://192.168.100.24:3000/notes`;

        try {
            const response = await Axios.post(url, data);
            dispatch(deleteUserSuccess(response));
        } catch (err) {
            const { body } = err.response || {};
            dispatch(deleteUserFail(body));
        }
    };
}