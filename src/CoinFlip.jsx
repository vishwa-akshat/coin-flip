import React, { Component } from 'react';
import CoinFace from './CoinFace';

import {choice} from './helpers';

export default class CoinFlip extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", imgSrc:"https://tinyurl.com/react-coin-heads-jpg"},
            {side: "tails", imgSrc:"https://tinyurl.com/react-coin-tails-jpg"}
        ] 
    }
    constructor(props){
        super(props);
        this.state={
            CurrCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
        this.handleClick= this.handleClick.bind(this);
    }
    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st=>{
            let newState = {
                ...st,
                CurrCoin: newCoin,
                nFlips: st.nFlips+1
            } 
            if(newCoin.side==="heads"){
                newState.nHeads+=1;
            }else{
                newState.nTails +=1;
            }
            return newState;
        })
    }
    handleClick(e){
        this.flipCoin();
    }
    render() {
        return (
            <div>
                <h2>Let's Flip a Coin</h2>
                {this.state.CurrCoin && <CoinFace src={this.state.CurrCoin}/>}
                <button type="button" onClick={this.handleClick}>Flip Me!</button>
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}
