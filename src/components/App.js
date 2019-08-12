import React from 'react';
import './style/App.css';

import CryptoContainer from './Cryptocurrency/CryptoContainer';
import CryptoInformation from './CryptoInformation';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
          width: window.innerWidth
        });
      }

    render(){
        return(
            <div id="wrapper">
                <div className="ui grid main-container">
                    <div className={`${this.state.width >= 1024 ? 'five': 'sixteen'} wide column`}>
                        <CryptoContainer />
                    </div>
                    <div className={`${this.state.width >= 1024 ? 'eleven': 'sixteen'} wide column`}>
                        <CryptoInformation />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;