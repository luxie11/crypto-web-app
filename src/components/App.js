import React from 'react';
import './style/App.css';

import CryptoContainer from './Cryptocurrency/CryptoContainer';
import CryptoChart from './CryptoInformation/CryptoChart';
import CryptoDetails from './CryptoInformation/CryptoDetails';

class App extends React.Component{

    render(){
        return(
            <div id="wrapper">
                <div className="ui grid main-container">
                    <div className="five wide column">
                        <CryptoContainer />
                    </div>
                    <div className="eleven wide column">
                        <div className="crypto-container">
                        <CryptoDetails />
                            <div className="crypto-chart">
                                <CryptoChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;