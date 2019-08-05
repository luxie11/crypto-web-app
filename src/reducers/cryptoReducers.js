import {
    GET_CRYPTO_VALUES,
    SET_CRYPTO_PAGE,
    CLEAR_CRYPTO_VALUES,
    SORT_CRYPTO_VALUES
} from '../actions/types';

const INITIAL_STATE = {
    page: 1, 
    cryptoValues: [], 
    sortBy: "" 
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_CRYPTO_VALUES:
            return { ...state, cryptoValues:action.payload }
        case SET_CRYPTO_PAGE:
            return { ...state, page:action.payload }
        case CLEAR_CRYPTO_VALUES:
            return { ...state, cryptoValues: [] }
        case SORT_CRYPTO_VALUES:
            return { ...state, sortBy: action.payload}
        default:
            return state;
    }
}