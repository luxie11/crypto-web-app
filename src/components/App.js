import React from 'react';
import './style/App.css';

import CryptoContainer from './Cryptocurrency/CryptoContainer';

class App extends React.Component{

    render(){
        return(
            <div id="wrapper">
                <div className="ui grid main-container">
                    <div className="five wide column">
                        <CryptoContainer />
                    </div>
                    <div className="eleven wide column">

                    </div>
                </div>
            </div>
        )
    }
}

export default App;