import React from 'react'
import { Segment, Grid, Input, Form, TextArea, Icon } from 'semantic-ui-react'

class PostPicForm extends React.Component {

  state = {
    title: '',
    content: '',
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
            <Grid.Column width={8}>
              <h1 className='post-form-text'>Make a Post!</h1>
            </Grid.Column>
            <Grid.Column width={8}>
              <h3 onClick={(e) => this.props.handleTypeChange('text')}>Text Time!</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <Grid.Row>
            <Input label='Title:' type='text' name='title' value={this.state.title} onChange={this.handleChange} className='input-field-margin'/>
          </Grid.Row>
          <Grid.Row>
            <span ><Icon name='file image' />Upload a profile picture for yourself <label className='file-select-link'>here!
            <input type='file' className='input-field-margin' name='image' onChange={this.handleFileChange}  />
            </label></span>
          </Grid.Row>
          <Grid.Row>
            <TextArea placeholder='caption it out here!' type='textarea' name='content' value={this.state.content} onChange={this.handleChange} className='input-field-margin' style={{ minHeight: 200 }}/>
          </Grid.Row>
          <Grid.Row>
            <Input type='submit' value='Submit me!' className='input-field-margin'/>
          </Grid.Row>
        </Form>

      </Segment>
    )
  }

}

export default PostPicForm
