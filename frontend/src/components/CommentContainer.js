import React from 'react'
import CommentCard from './CommentCard'
import { Container, Grid, Comment} from 'semantic-ui-react'
import CommentForm from './CommentForm'

class CommentContainer extends React.Component {

  state = {
    comments: []
  }

  mapCommentsToCard = () => {
    return this.state.comments.map((comment) => {
      return <CommentCard key={comment.id} comment={comment}/>
    })
  }

  handleSubmit = (e, commentObj) => {
    e.preventDefault()

    fetch(`http://localhost:3000/api/v1/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(commentObj)
    }).then(resp => resp.json())
    .then(comment => {
      const commentsCopy = [...this.state.comments, comment]
      this.setState({
        comments: commentsCopy
      })
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/posts/${this.props.postId}/comments`)
    .then(resp => resp.json())
    .then(parsedRes => {
      this.setState({
        comments: parsedRes
      })
    })
  }

  render(){
    return(
        <Comment.Group>
        { this.mapCommentsToCard()}

        <CommentForm postId={this.props.postId} handleSubmit={this.handleSubmit}/>
        </Comment.Group>
    )
  }
}

export default CommentContainer
