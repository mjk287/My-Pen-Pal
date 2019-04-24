import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(userObj => {
      if(!!userObj.message) {
        alert(userObj.message)
      } else {
      localStorage.setItem('token', userObj.jwt)
      this.props.setCurrentUser(userObj)
      }
    })
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
    { setCurrentUser: (userObj) => {
      dispatch({type: "SET_CURRENT_USER", payload: userObj.user})
    }}
  )
}

export default connect(null, mapDispatchToProps)(Login)
