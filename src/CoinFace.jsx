import React, { Component } from 'react'

import './CoinFace.css'

export default class CoinFace extends Component {
    render() {
        return (
            <div>
                <img className="Coin" src={this.props.src.imgSrc} alt={this.props.src.side}/>
            </div>
        )
    }
}
