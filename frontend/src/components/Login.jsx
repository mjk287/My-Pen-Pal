import React from 'react'
import { connect } from 'react-redux'
import { postLogin } from '../Redux/actions'

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

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label> Email:
          <input type='text' name='email' value={this.state.email} onChange={this.changeHandler} />
        </label>
        <label> Password:
          <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
        </label>
        <input type='submit' value='Submit Me!' />
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
