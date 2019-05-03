import React from 'react'

const CommentCard = (props) => {
  const { comment } = props

  return(
    <p>{comment.content}</p>
  )
}

export default CommentCard
