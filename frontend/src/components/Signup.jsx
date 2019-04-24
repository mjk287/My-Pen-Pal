import React from 'react'
import { connect } from 'react-redux'

class Signup extends React.Component {

  state = {
    email: '',
    name: '',
    password: '',
    passwordConfirmation: ''
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
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
        <label> Name:
          <input type='text' name='name' value={this.state.name} onChange={this.changeHandler} />
        </label>
        <label> Password:
          <input type='password' name='password' value={this.state.password} onChange={this.changeHandler} />
        </label>
        <label> Password Confirmation:
          <input type='password' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.changeHandler} />
        </label>
        <input type='submit' value='Submit Me!' />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return(
    { setCurrentUser: (userObj) => {
      dispatch({type: "SET_CURRENT_USER", payload: userObj.user})
    }
    }
  )
}

export default connect(null, mapDispatchToProps)(Signup)
