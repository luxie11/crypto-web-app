import React from 'react';

const CryptoContainer = (props) =>{
    
    return(
        <div className="crypto">
            <div className="crypto-image">
                <img alt={props.name} src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${props.id}.png`}/>
            </div>
            <div className="crypto-information">
                <div className="column-left ">
                    <div className="crypto-name">
                        <span>{props.name} ({props.symbol})</span>
                    </div>
                    <div className="crypto-price">
                        <div className="text-left">
                            <label className="crypto-label">Price:</label> 
                        </div>
                        <div className="text-left">
                            <label className="price-label">{Math.floor(props.price * 100) / 100}$</label>
                        </div>
                    </div>
                </div>
                <div className="column-right">
                    <div className="crypto-icon">
                        <div className="arrow">
                            <i className={`chevron  icon ${props.priceChange > 0 ? 'price-up up' : 'price-down down'}`}></i>
                        </div>
                    </div>
                    <div className="crypto-price-change">
                        <div className="text-left">
                            <label className="crypto-label">Change(24h): </label> 
                        </div>
                        <div className={`text-left ${props.priceChange > 0 ? 'price-up' : 'price-down'}`}>
                            <span>{Math.floor(props.priceChange *100) / 100}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CryptoContainer;