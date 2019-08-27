import React, { Fragment } from 'react';
import './style/CryptoMetadata.css'

class CryptoMetadata extends React.Component{

    fetchLinks(){
        let linkArray = [];
        if(this.props.urls.website.length !== 0){
            linkArray.push({ "info circle": this.props.urls.website[0]})
        }
        if(this.props.urls.reddit.length !== 0){
            linkArray.push({ "reddit": this.props.urls.reddit[0] })
        }
        if(this.props.urls.source_code.length !== 0){
            linkArray.push({ "github": this.props.urls.source_code[0] })
        }
        if(this.props.urls.twitter.length !== 0){
            linkArray.push({ "twitter": this.props.urls.twitter[0] })
        }
        if(this.props.urls.technical_doc.length !== 0){
            linkArray.push({ "file pdf": this.props.urls.technical_doc[0] })
        }
        return linkArray;
    }

    renderIcons(){
        const linkArray = this.fetchLinks();
        const renderedArray = linkArray.map(element =>{
            const key = Object.keys(element)[0];
            const value = element[key];
            return(
                <a key={key} target="_blank" rel="noopener noreferrer" className="link" href={value}>
                    <i className={`icon ${key}`}></i>
                </a>
            )
        });
        return renderedArray;
    }

    render(){
        return(
            <Fragment>
                <div className="description">
                   {this.props.description}
                </div>
                <div className="crypto-links">
                    <div className="header">
                        <h2>For more information you can visit:</h2>
                    </div>
                    <div className="links-list">
                        {this.renderIcons()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CryptoMetadata;