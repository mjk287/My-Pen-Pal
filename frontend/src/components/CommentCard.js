import React from 'react'
import { Comment, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const CommentCard = (props) => {
  const { comment } = props

  return(

    <Comment>
      <Comment.Content>
        <Image src={`http://localhost:3000/${comment.image}`} className='post-profile-image' circular />
        <Comment.Author as='a'>{comment.name}</Comment.Author>
        <Comment.Text className='comment-content'>{comment.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CommentCard)
