import React from 'react'
import { Container, Card, Button, Icon, Image } from 'semantic-ui-react'
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
            <Card.Content>
              <Card.Header>
                <Image src={`http://localhost:3000/${this.props.post.image}`} className='post-profile-image' circular/>
                {this.props.post.title}
              </Card.Header>
            </Card.Content>
            <Card.Content description={this.props.post.content}/>
            { this.state.commentClicked ?
            <React.Fragment>
              <Card.Content extra>
                <CommentContainer postId={this.props.post.id} />
              </Card.Content>
              <Button icon='angle up' onClick={this.handleClick} className='pull-down-icon'/>
            </React.Fragment>
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
