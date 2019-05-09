import React from 'react'
import { connect } from 'react-redux'
import { postUser } from '../Redux/actions'
import { Input, Button } from 'semantic-ui-react'

class Signup extends React.Component {

  state = {
    email: '',
    name: '',
    password: '',
    passwordConfirmation: '',
    online: true
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.postUser(this.state)
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <Input size='small' label='Email:' type='text' name='email' value={this.state.email} onChange={this.changeHandler} className='input-field-margin' required/>
        <Input size='small' label='Name:' type='text' name='name' value={this.state.name} onChange={this.changeHandler} className='input-field-margin' required/>
        <Input size='small' label='Password:' type='password' name='password' value={this.state.password} onChange={this.changeHandler} className='input-field-margin' required/>
        <Input size='small' label='Password Confirmation:' type='password' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.changeHandler} className='input-field-margin' required/>
        <Button type='submit' className='input-field-margin submit-button' inverted color='red'>Signup</Button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return(
    { postUser: (userObj) => dispatch(postUser(userObj)) }
  )
}

export default connect(null, mapDispatchToProps)(Signup)
