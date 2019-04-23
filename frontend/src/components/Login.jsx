import React from 'react'

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

  render(){
    return(
      <form >
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

export default Login
