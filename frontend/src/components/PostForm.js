import React from 'react'
import { connect } from 'react-redux'

class PostForm extends React.Component {
  state = {
    title: '',
    content: '',
    user_id: this.props.currentUser.id
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
        <label> Title:
        <input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
        </label>
        <label> Content:
        <input type='textarea' name='content' value={this.state.content} onChange={this.handleChange}/>
        </label>
        <input  type='submit' value='Submit me!'/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PostForm)
