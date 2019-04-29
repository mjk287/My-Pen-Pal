import React from 'react'
import { Container, Card } from 'semantic-ui-react'

const PostCard = (props) => {
  return (
    <React.Fragment>
      <Container className='card-margin-spacing'>
        <Card fluid>
          <Card.Content header={props.post.title}/>
          <Card.Content description={props.post.content}/>
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default PostCard
