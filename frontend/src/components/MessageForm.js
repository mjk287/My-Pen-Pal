import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'

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

    if(!!this.props.currentUser.my_penpal){
      const penpalChannel = this.props.cable.subscriptions.subscriptions[0]
      penpalChannel.send({event: 'message', content: message})
    }
  }

  render(){
    return(
      <form onSubmit={(e) => this.submitHandler(e, this.state.message)} id='penpal-message'>
        <Input label='Message:' type='text' name='message' value={this.state.message} onChange={this.changeHandler} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(MessageForm)
