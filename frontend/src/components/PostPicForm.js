import React from 'react'
import { Segment, Grid, Input, Form, TextArea, Icon, Menu, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class PostPicForm extends React.Component {

  state = {
    title: '',
    content: '',
    user_id: this.props.currentUser.id,
    pic: null,
    preview: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFileChange = (e) => {
    this.setState({
      pic: e.target.files[0],
      preview: URL.createObjectURL(e.target.files[0])
    })
  }

  render(){
    return(
      <Segment id='post-form-segment'>
        <Grid>
          <Grid.Row>
            <Grid.Column width={12}>
              <h1 className='post-form-text'>Make a Post!</h1>
            </Grid.Column>
            <Grid.Column width={4}>
              <Menu icon borderless fluid widths={3} className='post-form-types'>
                <Menu.Item>
                  <Icon name='image outline' size='large' onClick={(e) => this.props.handleTypeChange('pic')}/>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='write square' size='large' onClick={(e) => this.props.handleTypeChange('text')}/>
                </Menu.Item>
                <Menu.Item>
                  <Icon name='file audio' size='large' onClick={(e) => this.props.handleTypeChange('voice')}/>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form onSubmit={(e) => {
          this.setState({
            title: '',
            content: '',
            user_id: this.props.currentUser.id,
            pic: null,
            preview: ''
          })
          this.props.handleSubmit(e, this.state)}}>
          <Grid.Row>
            <Input label='Title:' type='text' name='title' value={this.state.title} onChange={this.handleChange} className='input-field-margin'/>
          </Grid.Row>
          <Grid.Row>
            <div className='pic-zone'>
              <p className='image-upload-text'><Icon name='file image' />Upload a profile picture for yourself <label className='file-select-link'>here!
              <input type='file' className='input-field-margin' name='image' onChange={this.handleFileChange}  />
              </label></p>
                {!!this.state.preview &&
                  <Image src={this.state.preview} centered className='upload-preview'/>
                }
            </div>
          </Grid.Row>
          <Grid.Row className='input-field-margin'>
            <TextArea placeholder='caption it out here!' type='textarea' name='content' value={this.state.content} onChange={this.handleChange} className='input-field-margin caption-textarea' style={{ minHeight: 200 }}/>
          </Grid.Row>
          <Grid.Row>
            <Input type='submit' value='Submit me!' className='input-field-margin'/>
          </Grid.Row>
        </Form>

      </Segment>
    )
  }

}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PostPicForm)
