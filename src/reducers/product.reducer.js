import {UPDATE_PRODUCT} from '../actions/product.action'

export default function productReducers (state=[], {type, payload}) {
    switch(type) {
        case UPDATE_PRODUCT : {
            return payload.product;
        }
        default : {
           // return {...state, payload};
           return state;
        }
    }
}