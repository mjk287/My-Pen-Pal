import React from 'react'
import PostCard from './PostCard'

const PostsContainer = (props) => {
  const makePostCards = () => {
    return props.posts.map(post => {
      return <PostCard post={post} />
    })
  }

  return(
    <React.Fragment>
      { props.posts.length === 0 ? <h3>You should write a post!</h3> : makePostCards()  }
    </React.Fragment>
  )
}

export default PostsContainer
