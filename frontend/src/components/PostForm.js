import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Segment, Grid, TextArea, Icon, Menu } from 'semantic-ui-react'

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
            user_id: this.props.currentUser.id
          })
          this.props.handleSubmit(e, this.state)
        }}>

          <Input label='Title:' type='text' name='title' value={this.state.title} onChange={this.handleChange} className='input-field-margin'/>

          <TextArea placeholder='content it out here!' type='textarea' name='content' value={this.state.content} onChange={this.handleChange} className='input-field-margin' style={{ minHeight: 200 }}/>

          <Input type='submit' value='Submit me!' className='input-field-margin'/>

        </Form>

      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(PostForm)
