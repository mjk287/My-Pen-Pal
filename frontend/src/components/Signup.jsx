import React from 'react'

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

  render(){
    return(
      <form >
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

export default Signup
