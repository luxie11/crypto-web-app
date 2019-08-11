import {
    GET_CRYPTO_VALUES,
    SET_CRYPTO_PAGE,
    CLEAR_CRYPTO_VALUES,
    SORT_CRYPTO_VALUES,
    GET_CRYPTO_VALUE,
    SELECT_CRYPO_VALUE,
    GET_CRYPTO_METADATA,
    GET_CRYPTO_HISTORY,
    CLEAR_SELECTED_CRYPTO
} from './types';

import crypto from '../api/crypto';
import history from '../api/history';

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

export const getCryptoValue = (id) =>{
    return async dispatch =>{
        const cryptoValue = await crypto.get(`/quotes/latest?id=${id}`);
        dispatch({
            type:GET_CRYPTO_VALUE,
            payload: cryptoValue.data
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

export const getCryptoMetadata = (id) =>{
    return async dispatch =>{
        const cryptoMetadata = await crypto.get(`/info?id=${id}`);
        dispatch({
            type:GET_CRYPTO_METADATA,
            payload: cryptoMetadata.data
        })
    }
}

export const getCryptoHistory = (symbol) =>{
    return async dispatch =>{
        const cryptoHistory = await history.get(`histoday?limit=30&tsym=USD&fsym=${symbol}`);
        dispatch({
            type:GET_CRYPTO_HISTORY,
            payload: cryptoHistory.data
        })
    }
}

export const selectCryptoValue = (id, symbol) =>{
    return async dispatch =>{
        dispatch({
            type:SELECT_CRYPO_VALUE,
            payload:{
                id,
                symbol
            }
        })
    }
}

export const clearSelectedCrypto = () =>{
    return async dispatch =>{
        dispatch({
            type:CLEAR_SELECTED_CRYPTO
        })
    }
}
