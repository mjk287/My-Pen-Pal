import React from 'react'
import MessageForm from './MessageForm'
import { connect } from 'react-redux'

class PenpalContainer extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.penpalMessage}</p>
        <MessageForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PenpalContainer)
