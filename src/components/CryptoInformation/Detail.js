import React from 'react';
import './style/Details.css';

const Detail = (props) =>{
    return(
        <div className="details">
            <div className="detail-name">
                <label>{props.name}</label>
            </div>
            <div className="detail-value">
                <label>{props.value}</label>
            </div> 
        </div>
    )
}

export default Detail;