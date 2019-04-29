import React from 'react'
import PostCard from './PostCard'
import { Card } from 'semantic-ui-react'

const PostsContainer = (props) => {
  const makePostCards = () => {
    return props.posts.map(post => {
      return <PostCard key={post.id} post={post} />
    })
  }

  return(
    <React.Fragment>
      { props.posts.length === 0 ?
        <h3>You should write a post!</h3>
         :
        <Card.Group>
          {makePostCards()}
        </Card.Group>
      }
    </React.Fragment>
  )
}

export default PostsContainer
