import React from 'react'
import CommentCard from './CommentCard'

class CommentContainer extends React.Component {

  state = {
    comments: []
  }

  mapCommentsToCard = () => {
    return this.state.comments.map((comment) => {
      return <CommentCard comment={comment}/>
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
      <React.Fragment>
        { this.mapCommentsToCard()}
      </React.Fragment>
    )
  }
}

export default CommentContainer
