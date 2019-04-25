import React from 'react'

const PostCard = (props) => {
  return (
    <React.Fragment>
      <h1>{props.post.title}</h1>
      <p>{props.post.content}</p>
    </React.Fragment>
  )
}

export default PostCard
