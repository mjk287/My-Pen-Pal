import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Segment, Grid, TextArea, Icon, Menu, Button } from 'semantic-ui-react'

class PostForm extends React.Component {
  state = {
    post: {
      title: '',
      content: '',
      user_id: this.props.currentUser.id
    },
    submitted: false
  }

  handleChange = (e) => {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
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
            post: {
              title: '',
              content: '',
              user_id: this.props.currentUser.id
            },
            submitted: true
          })
          this.props.handleSubmit(e, this.state.post)
        }}>
          <Grid.Row>
            <Input label='Title:' type='text' name='title' value={this.state.post.title} onChange={this.handleChange} className='input-field-margin' required/>
          </Grid.Row>
          <Grid.Row>
            <TextArea placeholder='content it out here!' type='textarea' name='content' value={this.state.post.content} onChange={this.handleChange} className='input-field-margin' style={{ minHeight: 200 }} required/>
          </Grid.Row>
          <Grid.Row>
            <Button type='submit' className='input-field-margin submit-button' inverted color='red'>Submit me!</Button>
            {!!this.state.submitted &&
              <Icon size='large' name='check circle' color='green' className='approve-icon'/>
            }

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
