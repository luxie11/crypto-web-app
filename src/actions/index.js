import {
    GET_CRYPTO_VALUES,
    SET_CRYPTO_PAGE,
    CLEAR_CRYPTO_VALUES,
    SORT_CRYPTO_VALUES
} from './types';

import crypto from '../api/crypto';

export const getAllCryptoValues = (start, end, sortBy = "") =>{
    return async dispatch => {
        let cryptoArray;
        if(sortBy != ""){
            cryptoArray = await crypto.get(`/listings/latest?start=${start}&limit=${end}&sort=${sortBy}`);
        } else{
            cryptoArray = await crypto.get(`/listings/latest?start=${start}&limit=${end}`);
        }
        dispatch({
            type: GET_CRYPTO_VALUES,
            payload: cryptoArray.data
        })
    }
}

export const setCryptoListPage = (page) =>{
    return{
        type:SET_CRYPTO_PAGE,
        payload:page
    }
}

export const clearCryptoValues = () =>{
    return{
        type:CLEAR_CRYPTO_VALUES
    }
}

export const setSortType = (sortType) =>{
    return{
        type:SORT_CRYPTO_VALUES,
        payload:sortType
    }
}
