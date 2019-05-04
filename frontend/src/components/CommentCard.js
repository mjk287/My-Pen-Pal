import React from 'react'
import { Container, Comment } from 'semantic-ui-react'
import { connect } from 'react-redux'

const CommentCard = (props) => {
  const { comment } = props
  
  return(
    <Comment>
      <Comment.Avatar src={`http://localhost:3000/${comment.image}`}/>
      <Comment.Content>
        <Comment.Author as='a'>{comment.name}</Comment.Author>
        <Comment.Text>{comment.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CommentCard)
