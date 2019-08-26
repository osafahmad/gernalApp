
const INIT_STATE = {
    loader: false,
    error: null,
    successMsg: null,
    user: {}
};

export default function (state = INIT_STATE, action) {
    switch (action.type) {

        //----------------------****Sign Up User****-----------------------------
        case "SIGN_UP_USER_INIT":
            return {
                ...state,
                error: null,
                loader: true,
            }
            break;

        case "SIGN_UP_USER_SUCCESS":
            return {
                ...state,
                error: null,
                loader: false,
                user: action.payload
            }

            break;

        case "SIGN_UP_USER_FAIL":
            return {
                ...state,
                loader: false,
                // error: action.payload

            }
            break;

        //----------------------****Log In User****-----------------------------
        case "LOG_IN_USER_INIT":
            return {
                ...state,
                error: null,
                loader: true,
            }
            break;

        case "LOG_IN_USER_SUCCESS":
            return {
                ...state,
                error: null,
                loader: false,
                user: action.payload
            }
            break;

        case "LOG_IN_USER_FAIL":
            return {
                ...state,
                loader: false,
                // error: action.payload

            }
            break;

        //----------------------****Update User****-----------------------------
        case "UPDATE_USER_INIT":
            return {
                ...state,
                error: null,
                loader: true,
            }
            break;

        case "UPDATE_USER_SUCCESS":
            return {
                ...state,
                error: null,
                loader: false,
                user: action.payload
            }
            break;

        case "UPDATE_USER_FAIL":
            return {
                ...state,
                loader: false,
                // error: action.payload

            }
            break;

        //----------------------****Delete User****-----------------------------
        case "DELETE_USER_INIT":
            return {
                ...state,
                error: null,
                loader: true,
            }
            break;

        case "DELETE_USER_SUCCESS":
            return {
                ...state,
                error: null,
                loader: false,
                user: action.payload
            }
            break;

        case "DELETE_USER_FAIL":
            return {
                ...state,
                loader: false,
                // error: action.payload

            }
            break;

    }
    return state;
}
