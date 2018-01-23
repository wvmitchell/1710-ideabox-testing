import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import CardContainer from '../CardContainer/CardContainer'
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

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ ideas })
  }

  numIdeas(ideas) {
  }

  render() {
    return (
      <div className="App">
        <h1>My ideas</h1>
        <h2>Num ideas: { this.numIdeas(this.state.ideas) }</h2>
        <Form handleSubmit={this.handleSubmit} />
        <CardContainer ideas={this.state.ideas}
                       removeIdea={this.removeIdea}/>
      </div>
    );
  }
}

export default App;
