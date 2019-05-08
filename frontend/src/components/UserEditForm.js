import React from 'react'
import { connect } from 'react-redux'
import { Segment, Grid, Image, Icon, Input } from 'semantic-ui-react'

class UserEditForm extends React.Component {

  state = {
    name: '',
    password: '',
    passwordConfirmation: '',
    image: null,
    song: null,
    preview: null
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileChange = (e) => {
    if(e.target.name === 'image'){
      this.setState({
        [e.target.name]: e.target.files[0],
        preview: URL.createObjectURL(e.target.files[0])
      })
    } else {
      this.setState({
        [e.target.name]: e.target.files[0]
      })
    }
  }

  render(){
    return(
      <Segment>
        <Grid verticalAlign='middle' divided >
          <Grid.Column width={8}>
            <form onSubmit = {(e) => this.props.submitHandler(e, this.state)}>
              <Grid.Row>
                <input type='text' className='edit-form-input input-field-margin' name='name' value={this.state.name} placeholder={this.props.currentUser.name} onChange={this.changeHandler}/>
              </Grid.Row>
              <Grid.Row>
                <input type='password' placeholder='password' className='edit-form-input input-field-margin' name='password' value={this.state.password} onChange={this.changeHandler}/>
              </Grid.Row>
              <Grid.Row>
                <input type='password' placeholder='confirmation password' className='edit-form-input input-field-margin' name='passwordConfirmation' value={this.state.passwordConfirmation} onChange={this.changeHandler}/>
              </Grid.Row>
              <Grid.Row className='input-field-margin'>
                <span ><Icon name='file image' />Upload a profile picture for yourself <label className='file-select-link'>here!
                <input type='file' className='input-field-margin' name='image' onChange={this.handleFileChange}  />
                </label></span>
              </Grid.Row>
              <Grid.Row className='input-field-margin'>
                <span> <Icon name='music' />Upload a song for your penpal <label className='file-select-link'>here!
                <input type='file' className='input-field-margin' name='song' onChange={this.handleFileChange}  />
                </label></span>
              </Grid.Row>
              <Grid.Row>
              <Input type='submit' className='input-field-margin' value='Submit Me!'/>
              </Grid.Row>
            </form>
          </Grid.Column>
          <Grid.Column width={8}>
            {!!this.state.preview &&
              <Image className='our-profile-imgs' src={this.state.preview} centered/>
            }
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(UserEditForm)
