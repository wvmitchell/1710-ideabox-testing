import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props) // this gives you this
    this.state = {
      title: '',
      body: ''
    }
  }

  handleFormInput = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  } // this is calling the "bound" reference to the function on the class

  submitIdea = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitIdea}>
          <input type='text'
                 placeholder='title'
                 value={this.state.title}
                 name='title'
                 onChange={ this.handleFormInput }
               />
          <input type='text'
                 placeholder='body'
                 name='body'
                 value={this.state.body}
                 onChange={ this.handleFormInput }
               />
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Form
