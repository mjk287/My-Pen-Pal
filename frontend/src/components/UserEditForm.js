import React from 'react'
import { connect } from 'react-redux'

class UserEditForm extends React.Component {

  state = {
    name: '',
    password: '',
    passwordConfirmation: '',
    image: null,
    song: null
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }

  render(){
    return(
      <form onSubmit = {(e) => this.props.submitHandler(e, this.state)}>
        <label> Name:
          <input type='text' name='name' value={this.state.name} placeholder={this.props.currentUser.name} onChange={this.changeHandler}/>
        </label>
        <label> Password:
          <input type='password' name='password' value={this.state.password} onChange={this.changeHandler}/>
        </label>
        <label> Confirmation Password:
          <input type='password' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.changeHandler}/>
        </label>
        <label> Upload Image:
        <input type='file' name='image' onChange={this.handleFileChange}  />
        </label>
        <label> Upload Song:
        <input type='file' name='song' onChange={this.handleFileChange}  />
        </label>

        <input type='submit' value='Submit Me!'/>

      </form>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(UserEditForm)
