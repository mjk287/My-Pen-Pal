import React from 'react'

const CommentCard = (props) => {
  const { comment } = props

  return(
    <React.Fragment>
      <p>{comment.content}</p>
      <p>{comment.name}</p>
    </React.Fragment>
  )
}

export default CommentCard
