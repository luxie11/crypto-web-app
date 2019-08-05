import React from 'react';
import { connect } from 'react-redux';

import { setCryptoListPage } from '../../actions';

class CryptoPagination extends React.Component{

    renderPreviousButton(){
        if(this.props.page > 1){
            return (
                <div className="prev-page" onClick={()=>{
                    this.props.setCryptoListPage(this.props.page - 1);}}>
                    <i className="icon arrow left"></i>
                </div>
            )
        }
    }

    renderNextButton(){
        if(this.props.page <= 10 && this.props.page >= 1){
            return(
                <div className="next-page" onClick={()=>{
                    this.props.setCryptoListPage(this.props.page + 1);}}>
                    <i className="icon arrow right"></i>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="crypto-pagination">    
                <div className="column-2 center">
                   { this.renderPreviousButton() }
                </div>
                <div className="column-2 center">
                    { this.renderNextButton() }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        page: state.crypto.page
    }
}

export default connect(mapStateToProps, {
    setCryptoListPage
})(CryptoPagination);