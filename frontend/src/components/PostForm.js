import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Segment, Grid, TextArea } from 'semantic-ui-react'

class PostForm extends React.Component {
  state = {
    title: '',
    content: '',
    user_id: this.props.currentUser.id
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Segment id='post-form-segment'>
        <Grid.Row>
        <h1 className='post-form-text'>Make a Post!</h1>
        </Grid.Row>
        <Form onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
          <Grid.Row>
          <Input label='Title:' type='text' name='title' value={this.state.title} onChange={this.handleChange} className='input-field-margin'/>
          </Grid.Row>
          <Grid.Row>
          <TextArea placeholder='content it out here!' type='textarea' name='content' value={this.state.content} onChange={this.handleChange} className='input-field-margin' style={{ minHeight: 200 }}/>
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

export default connect(mapStateToProps)(PostForm)
