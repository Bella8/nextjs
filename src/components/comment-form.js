import React, { Component } from 'react'
// import "../../static/comment-form.css";

export default class CommentForm extends Component {
  state = {
    name: '',
    title: '',
    comment: ''
  }
  onFormSubmit = event => {
    event.preventDefault()
    const commentData = {
      name: this.state.name,
      title: this.state.title,
      comment: this.state.comment
    }
    this.props.onFormSubmit(commentData)
  }
  onChangeName = event => {
    this.setState({
    name: event.target.value
    })
  }

  onChangeTitle = event => {
    this.setState({
    title: event.target.value
    })
  }

  onChangeComent = event => {
    this.setState({
    comment: event.target.value
  })
}

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
      <ul class="flex-outer">
      <li>
        <label>Name: </label>
        <input 
          onChange={this.onChangeName}
          value={this.state.name}
        />
      </li>
      <li>
        <label>Add a headline: </label>
        <input 
          onChange={this.onChangeTitle}
          value={this.state.title}
        />
      </li>
      <li>
        <label>Comment: </label>
        <textArea
          onChange={this.onChangeComent}
          value={this.state.comment}
        />
      </li>
      <li>
        <button>Submit</button>
      </li>
      </ul>
      </form>
    )
  }
}
