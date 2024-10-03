import {UPDATE_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_USER_PROGRESS} from '../actions/user.action'


export default function userReducer (state='', {type, payload}) {
    switch(type) {
        case UPDATE_USER : {
            return payload.user;
        } 

        case FETCH_USER_PROGRESS : {
            return payload.user;
        } 

        case FETCH_USER_ERROR : {
            return payload.user;
        } 

        case FETCH_USER_SUCCESS : {
            return payload.user;
        } 

        default : {
            return state;
        }
    }
}