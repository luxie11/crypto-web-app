import React from 'react';

//Components
import CryptoList from './CryptoList';
import Dropdown from './Dropdown';


class CryptoContainer extends React.Component{
    render(){
        return(
            <div className="crypto-container">
                <div className="crypto-wrapper">
                    <Dropdown />
                    <CryptoList  />
                </div>
            </div>
        )
    }
}

export default CryptoContainer;