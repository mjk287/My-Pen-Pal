import React from 'react'
import { connect } from 'react-redux'
import { postLogin } from '../Redux/actions'
import { Input } from 'semantic-ui-react'

class Login extends React.Component {

  state = {
    email: '',
    password: '',
    online: true
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.postLogin(this.state)
  }

  // <Input label='Message:' type='text' name='message' value={this.state.message} onChange={this.changeHandler} />

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
          <Input size='small' label='Email:' type='text' name='email' value={this.state.email} onChange={this.changeHandler} className='input-field-margin'/>
          <Input size='small' label="Password:" type='password' name='password' value={this.state.password} onChange={this.changeHandler} className='input-field-margin'/>
        <Input size='small' type='submit' value='Submit Me!' className='input-field-margin' />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return (
    { postLogin: (userObj) => dispatch(postLogin(userObj)) }
  )
}

export default connect(null, mapDispatchToProps)(Login)
