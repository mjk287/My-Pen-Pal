import React from 'react'
import { connect } from 'react-redux'

class MessageForm extends React.Component {

  state = {
    message: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e, message) => {
    e.preventDefault()

    const penpalChannel = this.props.cable.subscriptions.subscriptions[0]
    penpalChannel.send({event: 'message', content: message})
  }

  render(){
    return(
      <form onSubmit={(e) => this.submitHandler(e, this.state.message)}>
        <label> Message:
        <input type='text' name='message' value={this.state.message} onChange={this.changeHandler} />
        </label>

        <input type='submit' value='Message Them!'/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MessageForm)
