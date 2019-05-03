import React from 'react'
import { connect } from 'react-redux'
import { Input, TextArea, Form } from 'semantic-ui-react'

class CommentForm extends React.Component {
  state = {
    content: '',
    user_id: this.props.currentUser.id,
    post_id: this.props.postId
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
      <Form onSubmit ={(e) => this.props.handleSubmit(e, this.state)}>
        <TextArea label='Comment:' onChange={this.handleChange} value={this.state.content} name='content'  />
        <Input type='submit' value='Submit Me!' />
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CommentForm)
