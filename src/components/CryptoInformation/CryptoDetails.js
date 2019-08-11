import React from 'react';
import './style/CryptoDetails.css';
import Detail from './Detail';


class CryptoDetails extends React.Component{

    render(){
        return(
            <div className="crypto-details">
                <div className="column-2">
                    <Detail 
                        name="Date added:"
                        value={this.props.dateAdded.split('T')[0]}
                    />
                    <Detail 
                        name="Last updated:"
                        value={this.props.lastUpdated.split('T')[0]}
                    />
                    <Detail 
                        name="Total suply:"
                        value={this.props.totalSuply}
                    />
                </div>
                <div className="column-2">
                    <Detail 
                        name="Change(1h):"
                        value={this.props.change1Hour}
                    />
                    <Detail 
                        name="Change(24h):"
                        value={this.props.change24Hours}
                    />
                    <Detail 
                        name="Change(7d):"
                        value={this.props.change7Days}
                    />
                </div>
            </div>
        )
    }
}

export default CryptoDetails;