import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile';
import { Row, Col, Button } from 'react-materialize';
import Judge from './Judge';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: [],
      player2: []
    }
  }


  /*componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }*/

  lookupPlayer(player_number){
    console.log(player_number)

    var username;
    if (player_number == 1) {
      username = this.player1Input.value
    } else {
      username = this.player2Input.value
    }
    console.log(username)

    fetch(`https://api.github.com/users/${username}`)
    .then(function(response) {
      return response.json()
    })
    .then((response) => {
      if (player_number == 1) {
      this.setState({ player1: response })
    } else {
      this.setState({ player2: response})
    }
    })

  }

  render() {
    //console.log('render')
    return (
      <div>
        <h2>GitHub-Oh</h2>

        <Judge 
          player1 = {this.state.player1}
          player2 = {this.state.player2}
        />

        <Row>
          <Col s={12} m={6}>
              <input 
                ref = {(input) => {this.player1Input = input; }}
              />
              <Button onClick = {() => this.lookupPlayer(1)}>Clek Clek </Button>
            <PlayerProfile player_data = {this.state.player1} />
          </Col>

          <Col s={12} m={6}>
              <input 
                ref = {(input) => {this.player2Input = input; }}
              />
              <Button onClick = {() => this.lookupPlayer(2)}>Clek Clek </Button>
            <PlayerProfile player_data = {this.state.player2} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
