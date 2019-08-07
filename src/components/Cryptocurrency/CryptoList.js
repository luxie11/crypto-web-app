import React from 'react';
import { connect } from 'react-redux';
import { 
    getAllCryptoValues,
    clearCryptoValues,
    setCryptoListPage 
} from '../../actions';

//Components
import Loader from '../Loader';
import CryptoValue from './CryptoValue';

class CryptoList extends React.Component{

    constructor(props){
        super(props);
        this.cryptoList = React.createRef();
        this.numberOfCryptos = 0;
    }

    componentDidMount(){
        this.numberOfCryptos = Math.floor((this.cryptoList.current.parentNode.offsetHeight - 120) / 80);
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

    renderCryptoList(){
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
               />
            )
        })
    }

    render(){
        return(
            <div
                ref={this.cryptoList}
                className="crypto-list">
                {this.renderCryptoList()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state.crypto.cryptoValues)
    return{
        cryptoArray: state.crypto.cryptoValues.data,
        page: state.crypto.page,
        sortBy: state.crypto.sortBy
    }
}

export default connect(mapStateToProps, { 
    getAllCryptoValues,
    clearCryptoValues,
    setCryptoListPage
 })(CryptoList);