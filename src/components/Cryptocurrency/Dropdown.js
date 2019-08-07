import React from 'react';
import { connect } from 'react-redux';
import { setSortType } from '../../actions';

class Dropdown extends React.Component{

    render(){
        return(
            <div className="dropdown-div">
                <label className="sort-by">
                    <select className="ui dropdown" onChange={
                        (e) => { this.props.setSortType(e.target.value); }
                    }>
                        <option value="">Sort by</option>
                        <option value="name">Name</option>
                        <option value="market_cap">Market Cap</option>
                        <option value="percent_change_1h">Percent change 1h</option>
                        <option value="percent_change_24h">Percent change 24h</option>
                        <option value="percent_change_7d">Percent change 7d</option>
                    </select>
                </label>
            </div>
        )
    }
}

const mapStateToProps = (props) =>{
    return{ 
        sortBy: props.crypto.sortBy
    }
}

export default connect(mapStateToProps,{ 
    setSortType 
})(Dropdown);