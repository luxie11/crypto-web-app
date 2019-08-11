import {
    GET_CRYPTO_VALUES,
    SET_CRYPTO_PAGE,
    CLEAR_CRYPTO_VALUES,
    SORT_CRYPTO_VALUES,
    GET_CRYPTO_VALUE,
    GET_CRYPTO_METADATA,
    GET_CRYPTO_HISTORY,
    SELECT_CRYPO_VALUE,
    CLEAR_SELECTED_CRYPTO
} from '../actions/types';

const INITIAL_STATE = {
    page: 1, 
    cryptoValues: [],
    sortBy: "",
    selectedValue: {},
    selectedCryptoInformation:{
        id:1,
        symbol: "BTC"
    },
    cryptoMetadata:{}
}


export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_CRYPTO_VALUES:
            return { ...state, cryptoValues:action.payload }
        case SET_CRYPTO_PAGE:
            return { ...state, page: action.payload }
        case CLEAR_CRYPTO_VALUES:
            return { ...state, cryptoValues: [] }
        case SORT_CRYPTO_VALUES:
            return { ...state, sortBy: action.payload }
        case GET_CRYPTO_VALUE:
            return { ...state, selectedValue: action.payload }
        case GET_CRYPTO_METADATA:
            return { ...state, cryptoMetadata: action.payload }
        case GET_CRYPTO_HISTORY:
            return { ...state, history: action.payload }
        case SELECT_CRYPO_VALUE:
            return { ...state, selectedCryptoInformation:{
                id:action.payload.id,
                symbol: action.payload.symbol
            } 
        }
        case CLEAR_SELECTED_CRYPTO:
            return { ...state, selectedValue: {}, cryptoMetadata:null, history: null }
        default:
            return state;
    }
}