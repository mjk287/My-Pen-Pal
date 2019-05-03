import React from 'react'
import { Container, Card } from 'semantic-ui-react'
import CommentContainer from './CommentContainer'

const PostCard = (props) => {
  return (
    <React.Fragment>
      <Container className='card-margin-spacing shadow-box'>
        <Card fluid id='post-card' >
          <Card.Content header={props.post.title}/>
          <Card.Content description={props.post.content}/>
          <CommentContainer postId={props.post.id} />
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default PostCard
