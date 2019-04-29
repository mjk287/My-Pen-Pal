import React from 'react'
import MessageForm from './MessageForm'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

class PenpalContainer extends React.Component {
  render(){
    return(
      <div>
        { !!this.props.penpalMessage &&
        <div className='vertical-center' id='penpal-message-background'>
          <p id='penpal-message-text'>{this.props.penpalMessage}</p>
        </div>
        }
        <MessageForm />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PenpalContainer)
