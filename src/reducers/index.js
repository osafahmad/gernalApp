import { reducer as formReducer } from 'redux-form';
import {combineReducers} from 'redux';
import UserReducer from "./UserReducer";


const reducers = combineReducers({
    form: formReducer,
    user: UserReducer
});

export default reducers;