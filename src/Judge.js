import React, { Component } from 'react';

class Judge extends Component {
	render() {
		var isPlayer1Ready = !Object.keys(this.props.player1).length;
		var isPlayer2Ready = !Object.keys(this.props.player2).length;
		var playersReady = isPlayer1Ready && isPlayer2Ready;
		
		var results;
		if (this.props.player1.followers > this.props.player2.followers) {
			results = "player1"
		} else if (this.props.player1.followers = this.props.player2.followers) {
			results = "It's a draw"
		} else {
			results = "player2"
		}
		
		
		return (
			<div>
				{playersReady ? <p>{results}</p> : null}
			</div>
		)
	}
}

export default Judge;