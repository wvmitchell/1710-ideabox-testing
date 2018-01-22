import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
class App extends Component {
  constructor(props) {
    super(props) // this gives us this :D
    this.state = {
      ideas: []
    }
  }

  handleSubmit = (idea) => {
    const ideas = [ ...this.state.ideas, idea]
    this.setState({ ideas })
  }

  render() {
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
