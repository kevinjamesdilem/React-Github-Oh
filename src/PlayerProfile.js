import React, { Component } from 'react';
import { Row, Col, CardPanel } from 'react-materialize';

class PlayerProfile extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<CardPanel className="teal lighten-4 black-text">
				<p>Name: {this.props.player_data.name}</p>
				<img src = {this.props.player_data.avatar_url} width = "100%" />
				<p>Bios: {this.props.player_data.bio}</p>
				<p>Repositories: {this.props.player_data.public_repos}</p>
				<p>Followers: {this.props.player_data.followers}</p>
			</CardPanel>
		)
	}
}

export default PlayerProfile;