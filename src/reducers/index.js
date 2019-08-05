import { combineReducers } from 'redux';
import cryptoReducers from './cryptoReducers';

export default combineReducers({
    crypto: cryptoReducers
})