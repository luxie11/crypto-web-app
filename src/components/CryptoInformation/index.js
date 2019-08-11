import React from 'react';
import { connect } from 'react-redux';
import { getCryptoValue, getCryptoMetadata, getCryptoHistory, clearSelectedCrypto } from '../../actions';

import CryptoChart from './CryptoChart';
import CryptoDetails from './CryptoDetails';
import CryptoMetadata from './CryptoMetadata';

import Loader from '../Loader';

class CryptoInformation extends React.Component {

    componentDidMount(){
        const { selectedCryptoInformation } = this.props;
        this.props.getCryptoHistory(selectedCryptoInformation.symbol);
        this.props.getCryptoValue(selectedCryptoInformation.id);
        this.props.getCryptoMetadata(selectedCryptoInformation.id);
    }

    componentDidUpdate(prevProps){
        const { selectedCryptoInformation } = this.props;
        if(JSON.stringify(prevProps.selectedCryptoInformation) !== JSON.stringify(selectedCryptoInformation)){
            this.props.clearSelectedCrypto();
            this.props.getCryptoHistory(selectedCryptoInformation.symbol);
            this.props.getCryptoValue(selectedCryptoInformation.id);
            this.props.getCryptoMetadata(selectedCryptoInformation.id);
        }
    }

    renderCryptoDetails(){
        const { selectedCryptoInformation } = this.props;
        if((Object.keys(this.props.selectedValue).length === 0 && this.props.selectedValue.constructor === Object)){
            return <Loader />
        }  
        if(this.props.selectedValue.data[selectedCryptoInformation.id] !== undefined){
            const { date_added, total_supply, last_updated } = this.props.selectedValue.data[selectedCryptoInformation.id];
            const { percent_change_1h, percent_change_24h, percent_change_7d} = 
                    this.props.selectedValue.data[selectedCryptoInformation.id].quote.USD;
            return (
                <CryptoDetails
                    dateAdded={date_added}
                    lastUpdated={last_updated}
                    totalSuply={total_supply}
                    change1Hour={percent_change_1h}
                    change24Hours={percent_change_24h}
                    change7Days={percent_change_7d}
                 />
            )
        } 
    }

    renderCryptoImage = () =>{
        const { selectedCryptoInformation } = this.props;  
        if((Object.keys(this.props.selectedValue).length === 0 && this.props.selectedValue.constructor === Object)){
            return;
        }  
        if(this.props.selectedValue.data[selectedCryptoInformation.id] !== undefined){
            const { id, name } = this.props.selectedValue.data[selectedCryptoInformation.id];
            return(
                <div className="crypto-image labeled-center">
                    <div>
                        <img alt={name} src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}/>
                    </div>
                    <div className="detailed-information crypto-header">
                        <span>{name}</span>
                    </div>
                </div>
            )
        }
    }

    renderCryptoChart(){
        if(!this.props.history){
            return ;
        }
        return <CryptoChart 
            history={this.props.history}
        />
    }

    renderCryptoMetadata(){
        const { selectedCryptoInformation } = this.props;  
        if((Object.keys(this.props.selectedMetadata).length === 0 && this.props.selectedMetadata.constructor === Object)){
            return ;
        }
        if(this.props.selectedMetadata.data[selectedCryptoInformation.id] !== undefined){
            const { description, urls } = this.props.selectedMetadata.data[this.props.selectedCryptoInformation.id];
            return(
                <CryptoMetadata
                    description={description}
                    urls={urls}
                />
            )
        }
    }

    renderContainer(){
        if(
            !this.props.selectedValue 
            || !this.props.selectedMetadata 
            || !this.props.selectedCryptoInformation 
            || !this.props.history
        ){
                return <Loader />
            }
        return(
            <React.Fragment>
                {this.renderCryptoImage()}
                {this.renderCryptoChart()}
                {this.renderCryptoDetails()}
                {this.renderCryptoMetadata()}
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className="crypto-container">
                {this.renderContainer()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        selectedValue: state.crypto.selectedValue,
        selectedMetadata: state.crypto.cryptoMetadata,
        selectedCryptoInformation: state.crypto.selectedCryptoInformation,
        history: state.crypto.history
    }
}

export default connect(mapStateToProps, {
    getCryptoValue,
    getCryptoMetadata,
    getCryptoHistory,
    clearSelectedCrypto
})(CryptoInformation);