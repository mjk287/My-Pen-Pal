import React from 'react'
import { Container, Card, Button, Icon } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'

class PostCard extends React.Component{

  state = {
    commentClicked: false
  }

  handleClick = (e) => {
    e.preventDefault()

    this.setState({
      commentClicked: !this.state.commentClicked
    })
  }

  render(){
    return (
      <React.Fragment>
        <Container className='card-margin-spacing shadow-box'>
          <Card fluid id='post-card' >
            <Card.Content header={this.props.post.title}/>
            <Card.Content description={this.props.post.content}/>
            { this.state.commentClicked ?
            <Card.Content extra>
              <CommentContainer postId={this.props.post.id} />
              <Button icon='angle up' onClick={this.handleClick} className='pull-down-icon'/>
            </Card.Content>
            :
            <Button icon='angle down' onClick={this.handleClick} className='pull-down-icon'/>
            }
          </Card>
        </Container>
      </React.Fragment>
    )
  }
}

export default PostCard
