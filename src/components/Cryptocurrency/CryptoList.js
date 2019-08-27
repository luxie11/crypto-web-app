import React from 'react';
import { connect } from 'react-redux';
import { 
    getAllCryptoValues,
    clearCryptoValues,
    setCryptoListPage,
    selectCryptoValue
} from '../../actions';

import CryptoPagination from './CryptoPagination';

//Components
import Loader from '../Loader';
import CryptoValue from './CryptoValue';

class CryptoList extends React.Component{

    constructor(props){
        super(props);
        this.cryptoList = React.createRef();
        this.containerHeight = 0;
        this.numberOfCryptos = 0;
    }

    componentDidMount(){
        this.containerHeight = this.cryptoList.current.parentNode.offsetHeight - 100;
        this.numberOfCryptos = Math.floor((this.cryptoList.current.parentNode.offsetHeight - 100) / 90);
        this.props.getAllCryptoValues(this.props.page, this.props.page * this.numberOfCryptos)
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.page !== prevProps.page) {
            this.props.clearCryptoValues();
            if(this.props.page === 1){
                this.props.getAllCryptoValues(this.props.page, this.numberOfCryptos, this.props.sortBy);
            } else{
                this.props.getAllCryptoValues(this.props.page * this.numberOfCryptos + 1, this.numberOfCryptos, this.props.sortBy);
            }
        }
        if(this.props.sortBy !== prevProps.sortBy){
            this.props.clearCryptoValues();
            this.props.setCryptoListPage(1);
            this.props.getAllCryptoValues(1, this.numberOfCryptos, this.props.sortBy)
        }
    }

    createCryptoList(){
        var { cryptoArray } = this.props;
        if(!cryptoArray){
            return <Loader />
        }
        return cryptoArray.map(crypto => {
            return(
                <CryptoValue 
                    name={crypto.name}
                    price={crypto.quote.USD.price}
                    priceChange={crypto.quote.USD.percent_change_24h}
                    symbol={crypto.symbol}
                    slug={crypto.slug}
                    key={crypto.id}
                    id={crypto.id}
                    click={this.props.selectCryptoValue}
                />
            )
        })
    }

 
    render(){
        return(
            <React.Fragment>
                <div
                    ref={this.cryptoList}
                    className="crypto-list">
                    {this.createCryptoList()}
                </div>
                <CryptoPagination />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        cryptoArray: state.crypto.cryptoValues.data,
        page: state.crypto.page,
        sortBy: state.crypto.sortBy,
        selectedCryptoInformation: state.crypto.selectedCryptoInformation
    }
}

export default connect(mapStateToProps, { 
    getAllCryptoValues,
    clearCryptoValues,
    setCryptoListPage,
    selectCryptoValue
 })(CryptoList);