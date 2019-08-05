import React from 'react';

import { connect } from 'react-redux';
import { getAllCryptoValues, clearCryptoValues, sortCryptoValues } from '../../actions';

//Components
import CryptoList from './CryptoList';
import Dropdown from './Dropdown';
import CryptoPagination from './CryptoPagination';

class CryptoContainer extends React.Component{
    render(){
        return(
            <div className="crypto-container">
                <div className="crypto-wrapper">
                    <Dropdown />
                    <CryptoList  />
                    <CryptoPagination />
                </div>
            </div>
        )
    }
}

export default CryptoContainer;